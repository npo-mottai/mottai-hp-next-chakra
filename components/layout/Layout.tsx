import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import { ReactNode } from 'react'
import Footer from './Footer'
import HeaderNavigation from './NavigationBar'

/** */
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Box>
      <Head>
        <title>NPO法人 MOTTAI</title>
        <meta
          name="description"
          content="MOTTAIは「当たり前の裏側にアクセスしやすい社会を創る」をビジョンに掲げて活動するNPO法人です。"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderNavigation />
      <main>{children}</main>
      <Footer />
    </Box>
  )
}
