import NextLink from 'next/link'
import { Box, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function TopicPath() {
  const router = useRouter()
  const currentPath = router.asPath
  // const result = currentPath.replace(/\/$/, '').split('/')
  // console.log(`result: ${result}`)
  const result = ['', 'news', '2022-07-27-sustabi']
  const topicPaths = []
  let previousPath = ''
  // topicPaths.push(
  //   <Box as="span" key={'/'}>
  //     <NextLink href={'/'}>
  //       <Text as="span" color={'teal.600'}>
  //         ホーム
  //       </Text>
  //     </NextLink>
  //     <Text as="span" px={1} color={'gray.400'}>
  //       /
  //     </Text>
  //   </Box>
  // )
  for (const e of result) {
    const path = e
    console.log('============')
    console.log(`path: ${path}`)
    console.log('============')
    topicPaths.push(
      <Box as="span" key={path}>
        <NextLink href={`/${path}`}>
          <Text as="span" color={'teal.600'}>
            {labelByPath(`${e}`)}
          </Text>
        </NextLink>
        <Text as="span" px={1} color={'gray.400'}>
          /
        </Text>
      </Box>
    )
    // previousPath = `${path}/`
    previousPath = `${previousPath}${e}/`
  }
  return <Box mb={4}>{topicPaths}</Box>
}

/** path 名からラベルを取得して返す。 */
const labelByPath = (path: string): string => {
  return (pathLabels.find((e) => e.path === path) ?? { path, label: path })
    .label
}

/** 存在するパスとラベルの一覧。 */
const pathLabels = [
  {
    path: '',
    label: 'ホーム',
  },
  {
    path: 'about',
    label: '私たちについて',
  },
  {
    path: 'activities',
    label: 'MOTTAI の活動',
  },
  {
    path: 'news',
    label: 'ニュース',
  },
  {
    path: 'support',
    label: 'MOTTAI をサポートする',
  },
  {
    path: 'donation',
    label: '寄付でサポートする',
  },
  {
    path: 'pro-bono',
    label: 'メンバーとしてサポートする',
  },
  {
    path: 'request',
    label: '講演依頼などでサポートする',
  },
  {
    path: 'privacy',
    label: 'プライバシーポリシー',
  },
]
