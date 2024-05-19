import { Client } from '@notionhq/client'
import { NotionToMarkdown } from 'notion-to-md'

import { jaYYYYMMDD } from '../utils/date'

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

    for(let noitonRowObj of notionRowArr) {
      // データベース上でdate(開催日)が空欄の場合は表示しない。
      if (noitonRowObj.date === null) {
        continue
      }

      // 開催日が過去のものは表示しない。
      if (noitonRowObj.date < today) {
        continue
      }

      mottaiNightLinkArr.push({
        title: noitonRowObj.title,
        date: jaYYYYMMDD(noitonRowObj.date),
        url: noitonRowObj.url,
        description: noitonRowObj.description,
        thumbnail: noitonRowObj. thumbnail // TODO R2からの画像取得。
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

    newsArr.push({
      title: notionRowObj.title,
      date: jaYYYYMMDD(notionRowObj.date),
      url: notionRowObj.url,
      description: notionRowObj.description,
      thumbnail: notionRowObj.thumbnail // TODO R2からの画像取得。
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

  const markdown = await convertNotion2Markdown(res['results'][0].id)

  const notionPropertyObj =  convertNotionResponse(res)

  const newsArticle: NewsArticle = {
    summary: {
      url: notionPropertyObj[0].url,
      date: jaYYYYMMDD(notionPropertyObj[0].date),
      title: notionPropertyObj[0].title,
      thumbnail: notionPropertyObj[0].thumbnail, // TODO R2からの画像取得。
      description: notionPropertyObj[0].description
    },
    content: markdown
  }

  return newsArticle
}

/**
 * @param notionPageId NotionのページIDの文字列。
 * @returns Notionページのマークダウンの文字列。
 */
export const convertNotion2Markdown = async (notionPageId:string) => {
  const n2m = new NotionToMarkdown({
    notionClient: NOTION,
    config: {
      separateChildPage: true,
    },
  })

  const mdBlock = await n2m.pageToMarkdown(notionPageId)

  // 空白のブロックを入れた際に改行として表示するために変換
  for (let block of mdBlock) {
    if (block['type'] === 'paragraph' && block['parent'] === '') {
      block['parent'] = '<br />'
    }
  }

  const markdown = n2m.toMarkdownString(mdBlock).parent

  return markdown
}

/**
 * @param databaseResponse NotionAPIレスポンスのオブジェクト。
 * @returns NotionAPIレスポンスを変換したオブジェクト配列。
 */
export const convertNotionResponse = (databaseResponse:QueryDatabaseResponse) => {
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
export const extractNotionProperty = (value: any) => {
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
