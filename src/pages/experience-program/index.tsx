import { Box } from '@chakra-ui/react'

import ContentContainer from '../../components/ContentContainer'
import MainVisual from '../../components/MainVisual'
import TopicPath from '../../components/TopicPath'
import ActivityList from '../../components/activity/ActivityList'
import ExperienceProgram from '../../components/experience-program-page/ExperienceProgram'
import SectionContainer from '../../components/top-page/SectionContainer'
import { getNotionActivityData } from '../../utils/notion'

import type { GetStaticProps, InferGetStaticPropsType } from 'next'

export default function ExperienceProgramPage({ experienceProgramLinkArr }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Box>
        <MainVisual title={'MOTTAI の活動'} />
        <ContentContainer>
          <TopicPath />
          <SectionContainer id={'experience-program'} title={'体験事業'}>
            <ExperienceProgram />
          </SectionContainer>
          <SectionContainer id={'news'} title={'開催予定'}>
            <ActivityList activityLinkArr={experienceProgramLinkArr} />
          </SectionContainer>
        </ContentContainer>
      </Box>
    </>
  )
}

// TODO: コメントを追加する
/** */
export const getStaticProps: GetStaticProps<{
  experienceProgramLinkArr: activityLinkObj[]
}> = (async () => {
  let experienceProgramLinkArr = await getNotionActivityData('experience-program' as string)

  return { props: { experienceProgramLinkArr } }
})
