import { Button } from '@chakra-ui/react'

type Props = {
  text: string
}

export default function SecondaryButton(props: Props) {
  return (
    <Button colorScheme="gray" variant="outline">
      {props.text}
    </Button>
  )
}
