import { Box } from '@chakra-ui/react'
import MainVisual from '../../../components/MainVisual'
import SectionContainer from '../../../components/top-page/SectionContainer'
import ContentContainer from '../../../components/ContentContainer'
import ProBono from '../../../components/support-page/ProBono'

export default function ProBonoPage() {
  return (
    <Box>
      <MainVisual title={'メンバーとしてサポート'} />
      <ContentContainer>
        <SectionContainer title={'メンバーとしてサポート'}>
          <ProBono />
        </SectionContainer>
      </ContentContainer>
    </Box>
  )
}
