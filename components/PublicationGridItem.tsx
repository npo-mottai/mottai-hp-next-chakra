import { Box, Heading, Image, GridItem } from '@chakra-ui/react'

type PublicationItem = {
  title: string
  imageUrl: string
}

export default function PublicationGridItem(publicationItem: PublicationItem) {
  return (
    <GridItem>
      <Box>
        <Heading as="h3" mb="3" fontSize="md" fontWeight="normal" noOfLines={1}>
          {publicationItem.title}
        </Heading>
        <Image
          htmlWidth="320px"
          htmlHeight="240px"
          objectFit="cover"
          rounded="lg"
          src={publicationItem.imageUrl}
          alt={publicationItem.title}
        />
      </Box>
    </GridItem>
  )
}
