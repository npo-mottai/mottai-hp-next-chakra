import { Box, Button, Center, Heading, Text, Image } from '@chakra-ui/react'
import MottaiButton from '../../MottaiButton'
import Activities from './Activities'

export default function ActivitySection() {
  return (
    <Box mb={12}>
      <Heading my={6}>MOTTAI の活動</Heading>
      <Text pb={4}>MOTTAI では、次のような活動に取り組んでいます。</Text>
      <Activities />
      <Center>
        <MottaiButton text="Mottai の活動の詳細" />
      </Center>
    </Box>
  )
}
