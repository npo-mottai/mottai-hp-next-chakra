import { Box } from '@chakra-ui/react'

import ContentContainer from '../../components/ContentContainer'
import MainVisual from '../../components/MainVisual'
import TopicPath from '../../components/TopicPath'
import { HowToSupport } from '../../components/support-page/HowToSupport'
import { MottaiPartners2024 } from '../../components/support-page/MottaiPartners2024'
import RequestSupportMessage from '../../components/support-page/RequestSupportMessage'
import SectionContainer from '../../components/top-page/SectionContainer'

export default function SupportPage() {
  return (
    <Box>
      <MainVisual title={'MOTTAIをサポートする'} />
      <ContentContainer>
        <TopicPath />
        <SectionContainer id={'request-support-message'} title={'MOTTAIの想い'}>
          <RequestSupportMessage />
        </SectionContainer>
        <SectionContainer
          id={'mottai-partners-2024'}
          title={'MOTTAIパートナー2024（C協賛以上の方）'}
        >
          <MottaiPartners2024 />
        </SectionContainer>
        <SectionContainer id={'how-to-support'} title={'MOTTAIをサポートする'}>
          <HowToSupport />
        </SectionContainer>
      </ContentContainer>
    </Box>
  )
}
