import { Box } from '@chakra-ui/react'

import ContentContainer from '../../components/ContentContainer'
import MainVisual from '../../components/MainVisual'
import TopicPath from '../../components/TopicPath'
import MottaiNight from '../../components/mottai-night-page/MottaiNight'
import MottaiNightList from '../../components/mottai-night-page/MottaiNightList'
import SectionContainer from '../../components/top-page/SectionContainer'
import { getNotionMottaiNightData } from '../../utils/notion'

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
            <MottaiNightList mottaiNightLinkArr={mottaiNightLinkArr} />
          </SectionContainer>
        </ContentContainer>
      </Box>
    </>
  )
}

// TODO: コメントを追加する
/** */
export const getStaticProps: GetStaticProps<{
  mottaiNightLinkArr: MottaiNightLinkObj[]
}> = (async () => {
  let mottaiNightLinkArr = await getNotionMottaiNightData()

  return { props: { mottaiNightLinkArr } }
})
