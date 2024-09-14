import { Box } from '@chakra-ui/react'

import ContentContainer from '../../components/ContentContainer'
import MainVisual from '../../components/MainVisual'
import TopicPath from '../../components/TopicPath'
import ActivityList from '../../components/activity/ActivityList'
import MottaiNight from '../../components/mottai-night-page/MottaiNight'
import SectionContainer from '../../components/top-page/SectionContainer'
import { getNotionActivityData } from '../../utils/notion'

import type { GetStaticProps, InferGetStaticPropsType } from 'next'

export default function MottaiNightPage({ mottaiNightLinkArr }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Box>
        <MainVisual title={'MOTTAI の活動'} />
        <ContentContainer>
          <TopicPath />
          <SectionContainer id={'mottai-night'} title={'モッタイNight'}>
            <MottaiNight />
          </SectionContainer>
          <SectionContainer id={'news'} title={'開催予定'}>
            {/* メモ：children: ReactNode の値は Component のパラメータには含めず、
            このようにタグ間に記述する */}
            <ActivityList activityLinkArr={mottaiNightLinkArr} />
          </SectionContainer>
        </ContentContainer>
      </Box>
    </>
  )
}

// TODO: コメントを追加する
/** */
export const getStaticProps: GetStaticProps<{
  mottaiNightLinkArr: activityLinkObj[]
}> = (async () => {
  let mottaiNightLinkArr = await getNotionActivityData('mottai-night' as string)

  return { props: { mottaiNightLinkArr } }
})
