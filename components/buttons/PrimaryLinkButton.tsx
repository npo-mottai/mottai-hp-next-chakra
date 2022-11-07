import NextLink from 'next/link'
import { Button } from '@chakra-ui/react'

type Props = {
  text: string
  href: string
}

export default function PrimaryLinkButton(props: Props) {
  return (
    <NextLink href="#" passHref>
      <Button colorScheme={'orange'} variant="outline">
        {props.text}
      </Button>
    </NextLink>
  )
}
