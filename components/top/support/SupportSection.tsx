import { Box, Center, Heading, Text } from '@chakra-ui/react'
import PrimaryButton from '../../buttons/PrimaryButton'

export default function SupportSection() {
  return (
    <Box mb={12}>
      <Heading my={6}>MOTTAI をサポートする</Heading>
      <Text pb={4}>
        MOTTAIの活動や理念に共感してもらえる仲間を探しています。プロボノやインターンや会員としての参加、寄付支援、講演依頼など様々な形でMOTTAIをサポートしてみませんか？
      </Text>
      <Center>
        <PrimaryButton text="MOTTAI をサポートする"></PrimaryButton>
      </Center>
    </Box>
  )
}
