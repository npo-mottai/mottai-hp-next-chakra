import { Box } from '@chakra-ui/react'

import ContentContainer from '../../components/ContentContainer'
import MainVisual from '../../components/MainVisual'
import TopicPath from '../../components/TopicPath'
import TrapOwner from '../../components/activities-page/TrapOwner'
import SectionContainer from '../../components/top-page/SectionContainer'

export default function Activities2Page() {
  return (
    <Box>
      <MainVisual title={'MOTTAI の活動'} />
      <ContentContainer>
        <TopicPath />
        <SectionContainer id={'trap-owner'} title={'罠オーナー制度'}>
          <TrapOwner />
        </SectionContainer>
      </ContentContainer>
    </Box>
  )
}
