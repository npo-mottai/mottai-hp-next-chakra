
import { Client } from '@notionhq/client'

/**
 *
 * @returns "Notionのテーブルデータベースの各カラムに対応するプロパティ持つオブジェクト配列。
 */
export const getNotionMottaiNightData = async () => {
  try {
    const notion = new Client({ auth: process.env.NOTION_API_KEY })
    const mottaiNightLinkArr:MottaiNightLinkObj[] = []

    // TODO レスポンス型定義
    const res = await notion.databases.query({
      database_id: process.env.NOTION_MOTTAI_NIGHT_LINK_PAGE_ID as string,
    })

    // sv-SEロケールはYYYY-MM-DD形式の日付文字列を戻す
    const today = new Date().toLocaleDateString('sv-SE')
    
    for (let data_obj of res['results']) {
      // データベース上でdate(開催日)が空欄の場合は表示しない
      if (data_obj['properties' as keyof object]['date']['date'] === null) {
        continue
      }

      // 開催日が過去のものは表示しない
      if (data_obj['properties' as keyof object]['date']['date']['start'] as string < today) {
        continue
      }

      mottaiNightLinkArr.push({
        title: data_obj['properties' as keyof object]['title']['rich_text'][0]['text']['content'],
        date: data_obj['properties' as keyof object]['date']['date']['start'],
        url: data_obj['properties' as keyof object]['url']['rich_text'][0]['text']['content'],
        description: data_obj['properties' as keyof object]['description']['rich_text'][0]['text']['content'],
        thumbnail: 
        (data_obj['properties' as keyof object]['thumbnail']['files'] as string[]).length > 0 ? data_obj['properties' as keyof object]['thumbnail']['files'][0]['file']['url'] : '',
      })
    }

    // 開催日が近いものから表示する
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

