import { Box } from '@chakra-ui/react'

import ContentContainer from '../components/ContentContainer'
import MainVisual from '../components/MainVisual'
import About from '../components/top-page/About'
import Activity from '../components/top-page/Activity'
import Contact from '../components/top-page/Contact'
import News from '../components/top-page/News'
import Publication from '../components/top-page/Publication'
import SectionContainer from '../components/top-page/SectionContainer'
import Support from '../components/top-page/Support'
import { getNotionNewsArr } from '../utils/notion'

import type { GetStaticProps, InferGetStaticPropsType } from 'next'

export default function TopPage({ news }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Box>
      <MainVisual title={'当たり前の裏側にアクセスしやすい社会を創る'} />
      <ContentContainer>
        <SectionContainer
          id={'about'}
          title={'MOTTAI とは'}
          detailButton={{ text: 'NPO法人 MOTTAI の詳細', href: '/about' }}
        >
          {/* メモ：children: ReactNode の値は Component のパラメータには含めず、
          このようにタグ間に記述する */}
          <About />
        </SectionContainer>
        <SectionContainer
          id={'activity'}
          title={'MOTTAI の活動'}
        >
          <Activity />
        </SectionContainer>
        <SectionContainer
          id={'publications'}
          title={'メディア掲載'}
          detailButton={{
            text: '実績・メディア掲載を見る',
            href: '/about#publications',
          }}
        >
          <Publication />
        </SectionContainer>
        <SectionContainer
          id={'news'}
          title={'ニュース'}
          detailButton={{ text: 'ニュース一覧', href: '/news' }}
        >
          <News news={news} />
        </SectionContainer>
        <SectionContainer
          id={'support'}
          title={'MOTTAI をサポートする'}
          detailButton={{ text: 'MOTTAI をサポートする', href: '/support' }}
        >
          <Support />
        </SectionContainer>
        <SectionContainer id={'contact'} title={'お問い合わせ'}>
          <Contact />
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
  let news = await getNotionNewsArr()
  news = news.slice(0, TOP_PAGE_NEWS_COUNT)

  return { props: { news } }
})

/** トップページに表示するニュースの件数 */
const TOP_PAGE_NEWS_COUNT = 4
