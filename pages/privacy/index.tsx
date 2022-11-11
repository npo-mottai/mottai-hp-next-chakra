import { Box } from '@chakra-ui/react'
import ContentContainer from '../../components/ContentContainer'
import PrivacyPolicy from '../../components/privacy-policy-page/PrivacyPolicy'
import SectionContainer from '../../components/top-page/SectionContainer'
import TopicPath from '../../components/TopicPath'

export default function PrivacyPolicyPage() {
  return (
    <Box>
      <Box mt={8}>
        <ContentContainer>
          <Box mb={8}>
            <TopicPath />
          </Box>
          <SectionContainer title={'プライバシーポリシー'}>
            <PrivacyPolicy />
          </SectionContainer>
        </ContentContainer>
      </Box>
    </Box>
  )
}
