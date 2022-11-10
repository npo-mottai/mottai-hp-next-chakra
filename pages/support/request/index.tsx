import { Box } from '@chakra-ui/react'
import MainVisual from '../../../components/MainVisual'
import SectionContainer from '../../../components/top-page/SectionContainer'
import ContentContainer from '../../../components/ContentContainer'
import Request from '../../../components/support-page/Request'

export default function RequestPage() {
  return (
    <Box>
      <MainVisual title={'講演依頼などでサポート'} />
      <ContentContainer>
        <SectionContainer title={'講演依頼などでサポート'}>
          <Request />
        </SectionContainer>
      </ContentContainer>
    </Box>
  )
}
