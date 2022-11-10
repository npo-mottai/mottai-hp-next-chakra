import { Box } from '@chakra-ui/react'
import MainVisual from '../../../components/MainVisual'
import SectionContainer from '../../../components/top-page/SectionContainer'
import ContentContainer from '../../../components/ContentContainer'
import Donation from '../../../components/donation/donation'

export default function DonationPage() {
  return (
    <Box>
      <MainVisual title={'寄付によるサポート'} />
      <ContentContainer>
        <SectionContainer title={'寄付によるサポート'}>
          <Donation />
        </SectionContainer>
      </ContentContainer>
    </Box>
  )
}
