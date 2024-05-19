import { Box } from '@chakra-ui/react'

import ContentContainer from '../../components/ContentContainer'
import MainVisual from '../../components/MainVisual'
import TopicPath from '../../components/TopicPath'
import News from '../../components/top-page/News'
import SectionContainer from '../../components/top-page/SectionContainer'
import { getNotionNewsArr } from '../../utils/notion'

import type { GetStaticProps, InferGetStaticPropsType } from 'next'

export default function NewsPage({ news }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Box>
      <MainVisual title={'ニュース'} />
      <ContentContainer>
        <TopicPath />
        <SectionContainer id={'news'} title={'ニュース一覧'}>
          {/* メモ：children: ReactNode の値は Component のパラメータには含めず、
          このようにタグ間に記述する */}
          <News news={news} />
        </SectionContainer>
      </ContentContainer>
    </Box>
  )
}

// TODO: コメントを追加する
/** */
export const getStaticProps: GetStaticProps<{
  news: NewsSummary[]
}> = (async () => {
  const news = await getNotionNewsArr()
  return { props: { news } }
})
