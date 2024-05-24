import { Client } from '@notionhq/client'
import { NotionToMarkdown } from 'notion-to-md'

import { jaYYYYMMDD } from '../utils/date'
import { checkExistingR2ImageKey, uploadImageToR2 } from './r2'

import type { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints.d'

const NOTION = new Client({ auth: process.env.NOTION_API_KEY })

/**
 * @returns Notionのテーブルデータベースの各カラムに対応するプロパティ持つオブジェクト配列。
 */
export const getNotionMottaiNightData = async () => {
  try {

    const res = await NOTION.databases.query({
      database_id: process.env.NOTION_MOTTAI_NIGHT_LINK_PAGE_ID as string,
    })

    const notionRowArr = convertNotionResponse(res)

    // sv-SEロケールはYYYY-MM-DD形式の日付文字列を戻す。
    const today = new Date().toLocaleDateString('sv-SE')
    const mottaiNightLinkArr: NewsSummary[] = []

    for(let notionRowObj of notionRowArr) {
      // データベース上でdate(開催日)が空欄の場合は表示しない。
      if (notionRowObj.date === null) {
        continue
      }

      // 開催日が過去のものは表示しない。
      if (notionRowObj.date < today) {
        continue
      }

      const notionImageKey = await extractImageKey(notionRowObj.thumbnail),
        mottaiNightLink = notionRowObj.url.split('/').slice(-1)[0],
        r2ImageUrl = await swapNotionImageForR2Image(notionRowObj.thumbnail, `mottai-night/${mottaiNightLink}/${notionImageKey}`)

      mottaiNightLinkArr.push({
        title: notionRowObj.title,
        date: jaYYYYMMDD(notionRowObj.date),
        url: notionRowObj.url,
        description: notionRowObj.description,
        thumbnail: r2ImageUrl
      })
    }

    // 開催日が近いものから表示する。
    mottaiNightLinkArr.sort((a, b) => {
      if (a.date > b.date) {
        return 1
      } else {
        return -1
      }
    })

    return mottaiNightLinkArr
  } catch {
    return []
  }
}

/**
 * @returns Notionのテーブルデータベースの各カラムに対応するプロパティ持つオブジェクト配列。
 */
export const getNotionNewsArr = async () => {
  // TODO レスポンス型定義
  const res = await NOTION.databases.query({
    database_id: process.env.NOTION_NEWS_PAGE_ID as string,
  })

  const notionRowArr = convertNotionResponse(res)

  const newsArr: NewsSummary[] = []
  for(let notionRowObj of notionRowArr){
    if (notionRowObj.isPublished === 'false') {
      continue
    }

      const notionImageKey = await extractImageKey(notionRowObj.thumbnail),
        r2ImageUrl = await swapNotionImageForR2Image(notionRowObj.thumbnail, `news/${notionRowObj.url}/${notionImageKey}`)

    newsArr.push({
      title: notionRowObj.title,
      date: jaYYYYMMDD(notionRowObj.date),
      url: notionRowObj.url,
      description: notionRowObj.description,
      thumbnail: r2ImageUrl
    })
  }

  // dateが古い順に表示する
  newsArr.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
  return newsArr
}

/**
 * @param url Notionのデータベースで定義されたurlカラムに記入された任意の文字列。
 * @returns Notionのテーブルデータベースの各カラムに対応するプロパティ持つオブジェクト。
 */
export const getNotionNewsArticle = async (url:string) => {
  // TODO レスポンス型定義。
  const res = await NOTION.databases.query({
    database_id: process.env.NOTION_NEWS_PAGE_ID as string,
    filter: {
      property: 'url',
      rich_text: {
        equals: url
      }
    }
  })

  const markdown = await convertNotion2Markdown(res['results'][0].id, url)

  const notionPropertyObj =  convertNotionResponse(res)

  const notionImageKey = await extractImageKey(notionPropertyObj[0].thumbnail),
    r2ImageUrl = await swapNotionImageForR2Image(notionPropertyObj[0].thumbnail, `news/${url}/${notionImageKey}`)

  const newsArticle: NewsArticle = {
    summary: {
      url: notionPropertyObj[0].url,
      date: jaYYYYMMDD(notionPropertyObj[0].date),
      title: notionPropertyObj[0].title,
      thumbnail: r2ImageUrl,
      description: notionPropertyObj[0].description
    },
    content: markdown
  }

  return newsArticle
}

/**
 * @param notionPageId NotionのページIDの文字列。
 * @param url Notionのデータベースで定義されたurlカラムに記入された任意の文字列。
 * @returns Notionページのマークダウンの文字列。
 */
const convertNotion2Markdown = async (notionPageId:string, url: string) => {
  const n2m = new NotionToMarkdown({
    notionClient: NOTION,
    config: {
      separateChildPage: true,
    },
  })

  const mdBlock = await n2m.pageToMarkdown(notionPageId)

  // 空白のブロックを入れた際に改行として表示するために変換
  for (let block of mdBlock) {
    if (block.type === 'paragraph' && block.parent === '') {
      block.parent = '&nbsp;'
    }
    if (block.type === 'image') {
      const notionImageUrl = await extractImageUrlFromNotionPageBlock(block.parent),
        notionImageKey = await extractImageKey(block.parent)

        if (notionImageUrl === null || notionImageKey === null) continue

      const r2ImageUrl = await swapNotionImageForR2Image(notionImageUrl, `news/${url}/${notionImageKey}`)

      block.parent = `![${notionImageKey}](${r2ImageUrl})` // 画像の埋め込みのマークダウン記法
    }
  }

  const markdown = n2m.toMarkdownString(mdBlock).parent

  return markdown
}

/**
 * @param databaseResponse NotionAPIレスポンスのオブジェクト。
 * @returns NotionAPIレスポンスを変換したオブジェクト配列。
 */
const convertNotionResponse = (databaseResponse:QueryDatabaseResponse) => {
  const notionRowArr = []

  for (let responseObj of databaseResponse.results) {
    const notionRowObj:{[key: string]: string} = {}
    for(let [key, value] of Object.entries(responseObj['properties' as keyof object])){
      notionRowObj[key] = extractNotionProperty(value)
    }
    notionRowArr.push(notionRowObj)
  }

  return notionRowArr
}

/**
 * @param value Notionのプロパティの値。(TODO anyやめる)
 * @returns Notionのプロパティの値を抽出した文字列。
 */
const extractNotionProperty = (value: any) => {
  switch(value.type){
    case 'rich_text':
      if(value['rich_text'].length === 0) return ''
      return value.rich_text[0].text.content
    case 'date':
      if(value.date === null) return null
      return value.date.start
    case 'checkbox':
      // 返却値をString型に統一する。
      return String(value.checkbox)
    case 'files':
      if(value.files.length === 0) return ''
      return value.files[0].file.url
    default:
      return ''
  }
}

/**
 * @param notionImageUrl Notionの有効期限ありの画像URL。
 * @param notionImageKey 画像のキー R2にアップロードする際のバケット内一意のファイル名。
 * @returns R2にアップロードされた画像のURL。
 */
const swapNotionImageForR2Image = async (notionImageUrl: string, notionImageKey:string) => {
  const decodedNotionImageKey = decodeURI(notionImageKey)

  const isExisting = await checkExistingR2ImageKey('notion-image', decodedNotionImageKey)
  if(!isExisting){
    await uploadImageToR2('notion-image', notionImageUrl, decodedNotionImageKey)
  }

  return `${process.env.R2_IMAGE_WORKER_URL}/${decodedNotionImageKey}`
}

/**
 * @param notionImageUrl Notionのテーブルにアップロードした画像のURL。'https://xxx/xxx/xxx/ファイル名?...'の形式。
 * @returns 画像のファイル名の文字列。
 */
const extractImageKey = async (notionImageUrl: string) => {
  const imageKeyWithUrlParam = notionImageUrl.split('/').slice(-1)[0]

  return imageKeyWithUrlParam.substring(0, imageKeyWithUrlParam.indexOf('?'))
}

/**
 * @param notionImageUrl Notionページ内のブロックのtypeがimageの要素の値'![ファイル名](https://xxx/xxx/xxx/ファイル名?...)'の形式。
 * @returns　パーレンで囲まれた画像のURL。
 */
const extractImageUrlFromNotionPageBlock = async (notionImageUrl: string) => {
  const notionImageKeyMatches = notionImageUrl.match(/\((.*?)\)/)

  if (notionImageKeyMatches === null) return null

  return notionImageKeyMatches[1]
}
