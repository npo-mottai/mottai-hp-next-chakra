import { Box } from '@chakra-ui/react'
import MainVisual from '../../components/MainVisual'
import SectionContainer from '../../components/top-page/SectionContainer'
import ContentContainer from '../../components/ContentContainer'
import RequestSupportMessage from '../../components/support-page/RequestSupportMessage'
import { HowToSupport } from '../../components/support-page/HowToSupport'

export default function ProBonoPage() {
  return (
    <Box>
      <MainVisual title={'MOTTAIをサポートする'} />
      <ContentContainer>
        <SectionContainer title={'MOTTAIの想い'}>
          <RequestSupportMessage />
        </SectionContainer>
        <SectionContainer title={'MOTTAIをサポートする'}>
          <HowToSupport />
        </SectionContainer>
      </ContentContainer>
    </Box>
  )
}
