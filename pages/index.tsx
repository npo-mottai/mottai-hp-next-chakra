import fs from 'fs'
import matter from 'gray-matter'
import { Box } from '@chakra-ui/react'
import MainVisual from '../components/MainVisual'
import About from '../components/top-page/About'
import Activity from '../components/top-page/Activity'
import Publication from '../components/top-page/Publication'
import News from '../components/top-page/News'
import Support from '../components/top-page/Support'
import Contact from '../components/top-page/Contact'
import SectionContainer from '../components/top-page/SectionContainer'
import { jaYYYYMMDD } from '../utils/date'

export default function TopPage({ news }: { news: NewsSummary[] }) {
  return (
    <Box>
      <MainVisual title={'当たり前の裏側にアクセスしやすい社会を創る'} />
      <Box maxW={'62em'} mx={'auto'} py={'0'} px={'2rem'}>
        <SectionContainer
          title={'MOTTAI とは'}
          detailButton={{ text: 'NPO法人 MOTTAI の詳細', href: '/about' }}
        >
          {/* メモ：children: ReactNode の値は Component のパラメータには含めず、
          このようにタグ間に記述する */}
          <About />
        </SectionContainer>
        <SectionContainer
          title={'MOTTAI の活動'}
          detailButton={{
            text: 'MOTTAI の活動をもっと見る',
            href: '/activities',
          }}
        >
          <Activity />
        </SectionContainer>
        <SectionContainer title={'メディア掲載'}>
          <Publication />
        </SectionContainer>
        <SectionContainer
          title={'ニュース'}
          detailButton={{ text: 'ニュース一覧', href: '/news' }}
        >
          <News news={news} />
        </SectionContainer>
        <SectionContainer
          title={'MOTTAI をサポートする'}
          detailButton={{ text: 'MOTTAI をサポートする', href: '/support' }}
        >
          <Support />
        </SectionContainer>
        <Box id="contact">
          <SectionContainer title={'お問い合わせ'}>
            <Contact />
          </SectionContainer>
        </Box>
      </Box>
    </Box>
  )
}

// TODO: コメントを追加する
/** */
export const getStaticProps = (): {
  props: {
    news: {
      slug: string
      createdAt: string
      title: string
      imageUrl: string
      description: string
    }[]
  }
} => {
  const newsFiles = fs
    .readdirSync('news-articles')
    .reverse()
    .slice(0, TOP_PAGE_NEWS_COUNT)
  const news = newsFiles.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fileContent = fs.readFileSync(`news-articles/${fileName}`, 'utf-8')
    const { data } = matter(fileContent)
    const createdAt = jaYYYYMMDD(data.createdAt)
    const title = data.title as string
    const imageUrl = data.imageUrl as string
    const description = data.description as string
    return { slug, createdAt, title, imageUrl, description }
  })
  return { props: { news } }
}

/** トップページに表示するニュースの件数 */
const TOP_PAGE_NEWS_COUNT = 4
