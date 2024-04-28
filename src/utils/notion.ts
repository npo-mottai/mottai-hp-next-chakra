
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

    for (let data_obj of res['results']) {
      if (data_obj['properties' as keyof object]['date']['date'] !== null) {
        mottaiNightLinkArr.push({
          title: data_obj['properties' as keyof object]['title']['rich_text'][0]['text']['content'],
          date: data_obj['properties' as keyof object]['date']['date']['start'],
          url: data_obj['properties' as keyof object]['url']['rich_text'][0]['text']['content'],
          description: data_obj['properties' as keyof object]['description']['rich_text'][0]['text']['content'],
          thumbnail: 
          (data_obj['properties' as keyof object]['thumbnail']['files'] as string[]).length > 0 ? data_obj['properties' as keyof object]['thumbnail']['files'][0]['file']['url'] : '',
        })
      }
    }

    mottaiNightLinkArr.sort((a, b) => {
      if (a.date < b.date) {
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

