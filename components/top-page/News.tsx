import { Box, Center, Grid, Text } from '@chakra-ui/react'
import PrimaryLinkButton from '../buttons/PrimaryLinkButton'
import NewsCardGridItem from '../NewsCardGridItem'

// {
//   news,
// }: {
//   news: {
//     data: {
//       [key: string]: any
//     }
//     slug: string
//   }[]
// }

export default function News() {
  return (
    <Box>
      <Text pb={4}>MOTTAIの最新の活動やニュースは次の通りです。</Text>
      <Box mb={8}>
        <NewsGrid />
      </Box>
    </Box>
  )
}

function NewsGrid() {
  const news = []
  for (const newsItem of newsItems) {
    news.push(NewsCardGridItem(newsItem))
  }

  return (
    <Grid
      templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)']}
      gap={[6]}
    >
      {news}
    </Grid>
  )
}

const newsItems = [
  {
    createdAt: '2022年7月27日 (水)',
    title: 'メディア掲載情報：サスタビ',
    description:
      'サステナブルな旅の情報サイト「サスタビ」に、MOTTAIが毎月末に開催をしている体験会の様子がレポートされました。',
    imageUrl: '/images/news/2022-07-27-sustabi/2022-07-27.png',
  },
  {
    createdAt: '2022年7月27日 (水)',
    title: 'メディア掲載情報：Forbes JAPAN',
    description:
      'Forbes JAPANさんにMOTTAIの活動を取り上げていただきました。ぜひ、ご覧ください。',
    imageUrl: '/images/news/2022-07-10-forbes/2022-07-10.jpg',
  },
  {
    createdAt: '2022年7月27日 (水)',
    title: 'イベント参加者の方がブログに体験をまとめてくださいました！！',
    description:
      '記事タイトル：イベント参加者の方がブログ「note 生きた鶏をしめてさばく講座」に体験をまとめてくださいました！!',
    imageUrl:
      '/images/news/2022-050-20-workshop-review/2022-050-20-workshop-review.jpeg',
  },
  {
    createdAt: '2022年7月27日 (水)',
    title: '登壇情報「NPO法人MOTTAI ウメコ第二回団体交流会」',
    description:
      '2022 年 2 月 20 日（日）に開始された、おだわら市民交流センター UMECO が主催する、第 2 回団体交流会にて MOTTAI の活動を発表させていただきました。',
    imageUrl: '/images/news/2022-02-24-umeco/2022-02-24-umeco.png',
  },
]
