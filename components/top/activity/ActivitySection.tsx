import { Box, Button, Center, Heading, Text, Image } from '@chakra-ui/react'
import Activities from './Activities'

export default function ActivitySection() {
  return (
    <Box mb={12}>
      <Heading my={6}>MOTTAI の活動</Heading>
      <Text pb={4}>MOTTAI では、次のような活動に取り組んでいます。</Text>
      <Activities />
      <Center>
        <Button colorScheme="orange" variant="outline">
          MOTTAI の活動の詳細
        </Button>
      </Center>
    </Box>
  )
}
