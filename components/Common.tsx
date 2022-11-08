import { Heading, propNames, Text } from '@chakra-ui/react'

type props = {
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
