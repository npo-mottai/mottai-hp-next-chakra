import fs from 'fs'
import matter from 'gray-matter'
import { Box } from '@chakra-ui/react'
import MainVisual from '../../components/MainVisual'
import SectionContainer from '../../components/top-page/SectionContainer'
import { jaYYYYMMDD } from '../../utils/date'
import News from '../../components/top-page/News'

export default function NewsPage({ news }: { news: NewsSummary[] }) {
  return (
    <Box>
      <MainVisual title={'ニュース'} />
      <Box maxW={'62em'} mx={'auto'} py={'0'} px={'2rem'}>
        <SectionContainer title={'ニュース一覧'}>
          {/* メモ：children: ReactNode の値は Component のパラメータには含めず、
          このようにタグ間に記述する */}
          <News news={news} />
        </SectionContainer>
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
  const newsFiles = fs.readdirSync('news-articles').reverse()
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
