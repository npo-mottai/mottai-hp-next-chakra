import { Box, Heading, Text } from '@chakra-ui/react'
import Publications from './Publications'

export default function PublicationSection() {
  return (
    <Box mb={12}>
      <Heading my={6}>メディア掲載</Heading>
      <Text pb={4}>今までに次のようなメディアに掲載して頂きました。</Text>
      <Publications />
    </Box>
  )
}
