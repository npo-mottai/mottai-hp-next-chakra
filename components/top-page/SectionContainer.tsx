import { Box, Center, Heading } from '@chakra-ui/react'
import { ReactNode } from 'react'
import PrimaryLinkButton from '../buttons/PrimaryLinkButton'

export default function SectionContainer(props: Prop) {
  return (
    <Box mb={12}>
      <Heading mt={6} mb={2} color="orange.500">
        {props.title}
      </Heading>
      <Box>{props.children}</Box>
      {props.detailButton !== undefined && (
        <Center>
          <PrimaryLinkButton
            text={props.detailButton.text}
            href={props.detailButton.href}
          />
        </Center>
      )}
    </Box>
  )
}

type Prop = {
  title: string
  children: ReactNode
  detailButton?: DetailButton
}

type DetailButton = {
  text: string
  href: string
}
