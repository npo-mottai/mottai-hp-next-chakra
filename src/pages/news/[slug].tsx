import { Box, Divider, Heading, Text } from '@chakra-ui/react'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import ReactMarkdown from 'react-markdown'

import {
  CommonExternalLinkText,
  CommonH2,
  CommonH3,
  CommonH4,
  CommonImage,
  CommonListItem,
  CommonOrderedList,
  CommonText,
  CommonUnorderedList,
} from '../../components/Common'
import TopicPath from '../../components/TopicPath'
import { getNotionNewsArr, getNotionNewsArticle,  } from '../../utils/notion'

import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'

export default function NewsArticle({ newsArticle }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Box maxW={'48em'} mx={'auto'} my={12} py={0} px={'2rem'}>
      <TopicPath />
      <Heading fontSize={'md'}>{newsArticle.summary.title}</Heading>
      <Text>投稿日：{newsArticle.summary.date}</Text>
      <ReactMarkdown
        components={ChakraUIRenderer(customChakraUIRenderTheme)}
        skipHtml
      >
        {newsArticle.content}
      </ReactMarkdown>
    </Box>
  )
}

// TODO: コメントを書く
/**  */
export const getStaticProps: GetStaticProps<{
  newsArticle: NewsArticle
}> = (async ({ params }: any) => {
  let newsArticle = {} as NewsArticle
  if (params !== undefined) {
    newsArticle = await getNotionNewsArticle(params.slug)
  }

  return { props: { newsArticle } }
})

// TODO: コメントを書く
/**  */
export const getStaticPaths:GetStaticPaths = (async () => {
    const news = await getNotionNewsArr()
    const paths = news.map((newsObj) => ({
      params: {
        slug: newsObj.url,
      },
    }))
    return {
      paths,
      fallback: false,
    }
})

/** */
const customChakraUIRenderTheme = {
  // TODO: 本当は any はやめたい
  h2: (props: any) => {
    return <CommonH2 text={props.children} />
  },
  h3: (props: any) => {
    return <CommonH3 text={props.children} />
  },
  h4: (props: any) => {
    return <CommonH4 text={props.children} />
  },
  p: (props: any) => {
    return <CommonText text={props.children} />
  },
  a: (props: any) => {
    return <CommonExternalLinkText href={props.href} text={props.children} />
  },
  ul: (props: any) => {
    return <CommonUnorderedList>{props.children}</CommonUnorderedList>
  },
  ol: (props: any) => {
    return <CommonOrderedList>{props.children}</CommonOrderedList>
  },
  li: (props: any) => {
    return <CommonListItem>{props.children}</CommonListItem>
  },
  img: (props: any) => {
    return <CommonImage src={props.src} alt={props.alt}></CommonImage>
  },
  hr: (_: any) => {
    return <Divider my={8} />
  },
}
