import { Box, Heading, Text } from '@chakra-ui/react'
import ContactForm from '../../contact-form/ContactForm'

export default function ContactSection() {
  return (
    <Box mb={12}>
      <Heading my={6}>お問い合わせ</Heading>
      <Text pb={4}>
        活動内容についてのご不明点・ご意見、会員登録、寄付、各種サポートについてのお問い合わせは、こちらのフォームよりご連絡ください。
      </Text>
      <ContactForm />
    </Box>
  )
}
