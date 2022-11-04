import { Box, Button, Heading, Text } from '@chakra-ui/react'

export default function Publication() {
  return (
    <Box mb={12}>
      <Heading my={6}>メディア掲載</Heading>
      <Text pb={4}>今までに次のようなメディアに掲載して頂きました。</Text>
      <Button colorScheme="orange">NPO法人 MOTTAI の詳細</Button>
    </Box>
  )
}
