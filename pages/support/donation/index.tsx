import { Box } from '@chakra-ui/react'
import MainVisual from '../../../components/MainVisual'
import SectionContainer from '../../../components/top-page/SectionContainer'
import ContentContainer from '../../../components/ContentContainer'
import Donation from '../../../components/support-page/Donation'
import TopicPath from '../../../components/TopicPath'

export default function DonationPage() {
  return (
    <Box>
      <MainVisual title={'寄付によるサポート'} />
      <ContentContainer>
        <TopicPath />
        <SectionContainer id={'donation'} title={'寄付によるサポート'}>
          <Donation />
        </SectionContainer>
      </ContentContainer>
    </Box>
  )
}
