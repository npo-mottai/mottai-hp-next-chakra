import fs from 'fs'
import matter from 'gray-matter'
import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import MainVisual from '../components/MainVisual'
import About from '../components/top-page/About'
import Activity from '../components/top-page/Activity'
import Publication from '../components/top-page/Publication'
import News from '../components/top-page/News'
import Support from '../components/top-page/Support'
import Contact from '../components/top-page/Contact'
import SectionContainer from '../components/top-page/SectionContainer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>NPO法人 MOTTAI</title>
        <meta
          name="description"
          content="MOTTAIは「当たり前の裏側にアクセスしやすい社会を創る」をビジョンに掲げて活動するNPO法人です。"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainVisual />
      <Box maxW="960px" mx="auto" py="0" px="2rem">
        <SectionContainer
          title={'MOTTAI とは'}
          detailButton={{ text: 'NPO法人 MOTTAI の詳細', href: '#' }}
        >
          {/* メモ：children: ReactNode の値は Component のパラメータには含めず、
          このようにタグ間に記述する */}
          <About />
        </SectionContainer>
        <SectionContainer
          title={'MOTTAI の活動'}
          detailButton={{ text: 'MOTTAI の活動をもっと見る', href: '#' }}
        >
          <Activity />
        </SectionContainer>
        <SectionContainer title={'メディア掲載'}>
          <Publication />
        </SectionContainer>
        <SectionContainer
          title={'ニュース'}
          detailButton={{ text: 'ニュース一覧', href: '#' }}
        >
          <News />
        </SectionContainer>
        <SectionContainer
          title={'MOTTAI をサポートする'}
          detailButton={{ text: 'MOTTAI をサポートする', href: '#' }}
        >
          <Support />
        </SectionContainer>
        <SectionContainer title={'お問い合わせ'}>
          <Contact />
        </SectionContainer>
      </Box>
    </div>
  )
}

/** コメントを追加する */
export const getStaticProps = () => {
  const newsFiles = fs.readdirSync('news')
  const news = newsFiles.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fileContent = fs.readFileSync(`news/${fileName}`, 'utf-8')
    // const { data, content } = matter(fileContent)
    const { data } = matter(fileContent)
    return { data, slug }
  })
  return { props: { news } }
}
