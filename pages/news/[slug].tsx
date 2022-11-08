import {
  Box,
  Heading,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  Image,
  Link,
} from '@chakra-ui/react'
import fs from 'fs'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import {
  CommonExternalLinkText,
  CommonH2,
  CommonH3,
  CommonH4,
  CommonText,
} from '../../components/Common'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function NewsArticle({
  newsArticle,
}: {
  newsArticle: NewsArticle
}) {
  return (
    <Box maxW={'48em'} mx={'auto'} my={12} py={0} px={'2rem'}>
      {/* TODO: ここにパンくずリストを実装する */}
      <Heading fontSize={'md'}>{newsArticle.summary.title}</Heading>
      <Text>投稿日：{newsArticle.summary.createdAt}</Text>
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
    return <UnorderedList pl={[2]}>{props.children}</UnorderedList>
  },
  ol: (props: any) => {
    return <OrderedList pl={[2]}>{props.children}</OrderedList>
  },
  li: (props: any) => {
    return <ListItem>{props.children}</ListItem>
  },
  img: (props: any) => {
    return <Image rounded={'lg'} src={props.src} alt={props.alt} />
  },
}
