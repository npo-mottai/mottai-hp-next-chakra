import { Box, Flex, Spacer, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { ReactNode } from 'react'
import Footer from './Footer'
import HeaderNavigation from './HeaderNavigation'

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
      <Flex minH={'100vh'} flexDirection={'column'}>
        <HeaderNavigation />
        <Box flexGrow={1}>
          <main>{children}</main>
        </Box>
        <Footer />
      </Flex>
    </Box>
  )
}
