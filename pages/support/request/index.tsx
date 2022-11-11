import { Box } from '@chakra-ui/react'
import MainVisual from '../../../components/MainVisual'
import SectionContainer from '../../../components/top-page/SectionContainer'
import ContentContainer from '../../../components/ContentContainer'
import Request from '../../../components/support-page/Request'
import TopicPath from '../../../components/TopicPath'

export default function RequestPage() {
  return (
    <Box>
      <MainVisual title={'講演依頼などでサポート'} />
      <ContentContainer>
        <TopicPath />
        <SectionContainer id={'request'} title={'講演依頼などでサポート'}>
          <Request />
        </SectionContainer>
      </ContentContainer>
    </Box>
  )
}
