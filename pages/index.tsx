import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import MainVisual from '../components/MainVisual'
import AboutSection from '../components/top/about/AboutSection'
import ActivitySection from '../components/top/activity/ActivitySection'
import PublicationSection from '../components/top/publication/PublicationSection'
import NewsSectionSection from '../components/top/news/NewsSection'
import SupportSection from '../components/top/support/SupportSection'
import ContactSection from '../components/top/contact/ContactSection'
import WithSubNavigation from '../components/NavigationBar'

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
      <WithSubNavigation />
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
      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
