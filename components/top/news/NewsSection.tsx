import { Box, Button, Center, Heading, Text } from '@chakra-ui/react'
import PrimaryButton from '../../buttons/PrimaryButton'
import News from './News'

export default function NewsSection() {
  return (
    <Box mb={12}>
      <Heading my={6}>ニュース</Heading>
      <Text pb={4}>MOTTAIの最新の活動やニュースは次の通りです。</Text>
      <Box mb={8}>
        <News />
      </Box>
      <Center>
        <PrimaryButton text="ニュース一覧" />
      </Center>
    </Box>
  )
}
