import { Box, Button, Heading, Text } from '@chakra-ui/react'

export default function News() {
  return (
    <Box mb={12}>
      <Heading my={6}>ニュース</Heading>
      <Text pb={4}>MOTTAIの最新の活動やニュースは次の通りです。</Text>
      <Button colorScheme="orange">MOTTAI の活動の詳細</Button>
    </Box>
  )
}
