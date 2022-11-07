import fs from 'fs'
import matter from 'gray-matter'
import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import MainVisual from '../components/MainVisual'
import AboutSection from '../components/top-page/about/AboutSection'
import ActivitySection from '../components/top-page/activity/ActivitySection'
import PublicationSection from '../components/top-page/publication/PublicationSection'
import NewsSectionSection from '../components/top-page/news/NewsSection'
import SupportSection from '../components/top-page/support/SupportSection'
import ContactSection from '../components/top-page/contact/ContactSection'

export default function Home({
  news,
}: {
  news: {
    data: {
      [key: string]: any
    }
    slug: string
  }[]
}) {
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
        <main>
          <AboutSection />
          <ActivitySection />
          <PublicationSection />
          <NewsSectionSection />
          <SupportSection />
          <ContactSection />
        </main>
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
