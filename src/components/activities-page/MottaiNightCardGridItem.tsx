import { Box, GridItem, Image, Text } from '@chakra-ui/react'

export default function MottaiNightCardGridItem(mottaiNightLinkObj: MottaiNightLinkObj) {
  return (
    <a href={mottaiNightLinkObj.url} target='_blank' rel='noopener noreferrer' key={mottaiNightLinkObj.title}> 
      <GridItem>
        <Box width="full" borderWidth="1px" rounded="lg" overflow="hidden">
          <Image src={mottaiNightLinkObj.thumbnail} alt={mottaiNightLinkObj.title} />
          <Box p="4">
            <Text mb="2" noOfLines={1} fontSize={'xs'}>
              {mottaiNightLinkObj.date}
            </Text>
            <Text
              mb="2"
              fontSize="lg"
              fontWeight="semibold"
              as="h3"
              noOfLines={1}
            >
              {mottaiNightLinkObj.title}
            </Text>
            <Text noOfLines={4} mb="2" fontSize={'sm'}>
              {mottaiNightLinkObj.description}
            </Text>
          </Box>
        </Box>
      </GridItem>
    </a>
  )
}
