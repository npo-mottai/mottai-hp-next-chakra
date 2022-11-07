import { Box, Grid, Text } from '@chakra-ui/react'
import NewsCardGridItem from '../NewsCardGridItem'

export default function News({ news }: { news: NewsSummary[] }) {
  return (
    <Box>
      <Text pb={4}>MOTTAIの最新の活動やニュースは次の通りです。</Text>
      <Box mb={8}>
        <NewsGrid news={news} />
      </Box>
    </Box>
  )
}

function NewsGrid({ news }: { news: NewsSummary[] }) {
  const newsGridItem = []
  for (const n of news) {
    newsGridItem.push(NewsCardGridItem(n))
  }
  return (
    <Grid
      templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)']}
      gap={[6]}
    >
      {newsGridItem}
    </Grid>
  )
}
