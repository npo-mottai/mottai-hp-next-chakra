import { Box, Heading, Text } from '@chakra-ui/react'
import fs from 'fs'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'

export default function NewsArticle({
  newsArticle,
}: {
  newsArticle: NewsArticle
}) {
  return (
    <Box maxW={'48em'} mx={'auto'} py={0} px={'2rem'}>
      {/* ここにパンくずリストを実装する
      記事のスタイルに Chakra UI を適用できるようにする */}
      <h1>{newsArticle.summary.title}</h1>
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
export function getStaticProps({ params }: { params: { slug: string } }) {
  const fileContent = fs.readFileSync(
    `news-articles/${params.slug}.md`,
    'utf-8'
  )
  const { data, content } = matter(fileContent)
  const slug = params.slug
  const createdAt = data.createdAt as string
  const title = data.title as string
  const imageUrl = data.imageUrl as string
  const description = data.description as string
  const newsArticle: NewsArticle = {
    summary: { slug, createdAt, title, imageUrl, description },
    content,
  }
  return { props: { newsArticle } }
}

// TODO: コメントを書く
/**  */
export function getStaticPaths() {
  const newsFiles = fs.readdirSync('news-articles')
  const paths = newsFiles.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ''),
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

/** */
const customChakraUIRenderTheme = {
  // TODO: 本当は any はやめたい
  h2: (props: any) => {
    return (
      <Heading mt={6} mb={4} size={'lg'} color="orange.500">
        {props.children}
      </Heading>
    )
  },
  h3: (props: any) => {
    return (
      <Heading mt={6} mb={4} as={'h3'} size={'md'} color="orange.500">
        {props.children}
      </Heading>
    )
  },
  h4: (props: any) => {
    return (
      <Heading mt={6} mb={4} as={'h4'} size={'sm'} color="orange.500">
        {props.children}
      </Heading>
    )
  },
  p: (props: any) => {
    return <Text mb={2}>{props.children}</Text>
  },
}
