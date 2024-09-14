import { Box, GridItem, Image, Text } from '@chakra-ui/react'

export default function ActivityCardGridItem(activityLinkObj: activityLinkObj) {
  return (
    <a href={activityLinkObj.url} target="_blank" rel="noopener noreferrer" key={activityLinkObj.title}>
      <GridItem>
        <Box width="full" borderWidth="1px" rounded="lg" overflow="hidden">
          <Image src={activityLinkObj.thumbnail} alt={activityLinkObj.title} />
          <Box p="4">
            <Text mb="2" noOfLines={1} fontSize={'xs'}>
              {activityLinkObj.date}
            </Text>
            <Text
              mb="2"
              fontSize="lg"
              fontWeight="semibold"
              as="h3"
              noOfLines={1}
            >
              {activityLinkObj.title}
            </Text>
            <Text noOfLines={4} mb="2" fontSize={'sm'}>
              {activityLinkObj.description}
            </Text>
          </Box>
        </Box>
      </GridItem>
    </a>
  )
}
