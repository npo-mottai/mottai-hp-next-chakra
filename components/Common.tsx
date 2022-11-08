import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Heading, Link, Text } from '@chakra-ui/react'

type props = {
  text: string
}

type aProps = {
  href: string
  text: string
}

export const CommonH2 = (props: props) => {
  return (
    <Heading mt={6} mb={4} size={'lg'} color="orange.500">
      {props.text}
    </Heading>
  )
}

export const CommonH3 = (props: props) => {
  return (
    <Heading mt={6} mb={4} size={'lg'} color="orange.500">
      {props.text}
    </Heading>
  )
}

export const CommonH4 = (props: props) => {
  return (
    <Heading mt={6} mb={4} as={'h4'} size={'sm'} color="orange.500">
      {props.text}
    </Heading>
  )
}

export const CommonText = (props: props) => {
  return <Text pb={4}>{props.text}</Text>
}

export const CommonExternalLinkText = (aProps: aProps) => {
  return (
    <Link href={aProps.href} color="teal.500" isExternal>
      <Text pb={4}>
        {aProps.text} <ExternalLinkIcon mx="2px" />
      </Text>
    </Link>
  )
}
