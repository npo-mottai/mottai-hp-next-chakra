import { Box, Text, Image, GridItem } from '@chakra-ui/react'
import SecondaryButton from './buttons/SecondaryButton'

type NewsItem = {
  createdAt: string
  title: string
  description: string
  imageUrl: string
}

export default function NewsGridItem(newsItem: NewsItem) {
  return (
    <GridItem key={newsItem.title}>
      <Box width="full" borderWidth="1px" rounded="lg" overflow="hidden">
        <Image src={newsItem.imageUrl} alt={newsItem.title} />
        <Box p="4">
          <Text mb="2" as="h4" noOfLines={1}>
            {newsItem.createdAt}
          </Text>
          <Text mb="2" fontSize="lg" fontWeight="normal" as="h4" noOfLines={1}>
            {newsItem.title}
          </Text>
          <Text noOfLines={4} mb="2">
            {newsItem.description}
          </Text>
          <SecondaryButton text="記事を読む" />
        </Box>
      </Box>
    </GridItem>
  )
}
