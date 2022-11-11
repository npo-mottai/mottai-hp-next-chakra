import { Box } from '@chakra-ui/react'
import MainVisual from '../../components/MainVisual'
import SectionContainer from '../../components/top-page/SectionContainer'
import ContentContainer from '../../components/ContentContainer'
import About from '../../components/about-page/About'
import Background from '../../components/about-page/Background'
import Origin from '../../components/about-page/Origin'
import Message from '../../components/about-page/Message'
import Publications from '../../components/about-page/Publications'
import Corporate from '../../components/about-page/Corporate'
import TopicPath from '../../components/TopicPath'

export default function AboutPage() {
  return (
    <Box>
      <MainVisual title={'私たちについて'} />
      <ContentContainer>
        <TopicPath />
        <SectionContainer title={'MOTTAI とは'}>
          <About />
        </SectionContainer>
        <SectionContainer title={'設立の背景'}>
          <Background />
        </SectionContainer>
        <SectionContainer title={'MOTTAI の由来'}>
          <Origin />
        </SectionContainer>
        <SectionContainer title={'代表からのメッセージ'}>
          <Message />
        </SectionContainer>
        <SectionContainer title={'実績・メディア掲載'}>
          <Publications />
        </SectionContainer>
        <SectionContainer title={'法人概要'}>
          <Corporate />
        </SectionContainer>
      </ContentContainer>
    </Box>
  )
}
