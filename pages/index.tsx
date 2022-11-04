import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MainVisual from '../components/MainVisual'
import Mottai from '../components/top/Mottai'
import ActivitySection from '../components/top/activity/ActivitySection'
import Publication from '../components/top/Publication'
import News from '../components/top/News'
import Support from '../components/top/Support'
import Contact from '../components/top/Contact'
import { Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainVisual />
      <Box maxW="960px" mx="auto" py="0" px="2rem">
        <main>
          <Mottai />
          <ActivitySection />
          <Publication />
          <News />
          <Support />
          <Contact />
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
