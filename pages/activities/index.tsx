import { Box } from '@chakra-ui/react'
import MainVisual from '../../components/MainVisual'
import SectionContainer from '../../components/top-page/SectionContainer'
import ContentContainer from '../../components/ContentContainer'
import TrapOwner from '../../components/activities-page/TrapOwner'
import MottaiNight from '../../components/activities-page/MottaiNight'
import TopicPath from '../../components/TopicPath'

export default function AboutPage() {
  return (
    <Box>
      <MainVisual title={'MOTTAI の活動'} />
      <ContentContainer>
        <TopicPath />
        <SectionContainer id={'trap-owner'} title={'罠オーナー制度'}>
          <TrapOwner />
        </SectionContainer>
        <SectionContainer id={'mottai-night'} title={'モッタイNight'}>
          <MottaiNight />
        </SectionContainer>
      </ContentContainer>
    </Box>
  )
}
