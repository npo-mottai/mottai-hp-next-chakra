import { Grid } from '@chakra-ui/react'
import PublicationGridItem from '../../PublicationGridItem'

export default function Publications() {
  const publications = []
  for (const publicationItem of publicationItems) {
    publications.push(PublicationGridItem(publicationItem))
  }

  return (
    <Grid
      templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
      gap={[12, 6]}
    >
      {publications}
    </Grid>
  )
}

const publicationItems = [
  {
    title: 'TEDx Keio USFC 登壇',
    imageUrl: '/images/youtube-1-tedx.png',
  },
  {
    title: '食べるを考える',
    imageUrl: '/images/youtube-2-taberu-wo-kangaeru.png',
  },
  {
    title: 'ANN News "食"のウラ側にある命の重さを考える',
    imageUrl: '/images/youtube-3-sdgs.png',
  },
]
