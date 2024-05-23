import { Box, Center, Heading, Text } from '@chakra-ui/react'

type Props = {
  title: string
}

export default function MainVisual(props: Props) {
  return (
    <Box
      bgImage="url('/images/header-background.webp')"
      bgSize="cover"
      px={[4, 8, 12, 20, 28]}
      py={[20, 20, 40]}
      mb={[4, 8, 12]}
      opacity="0.9"
    >
      <Box>
        <Center>
          <Text
            as='b'
            sx={{ fontFamily: "Georgia, serif" }}
            fontSize={['2xl', '3xl', '5xl', '6xl']}
            color="white">
            NPO 法人 MOTTAI
          </Text>
        </Center>
        <Center>
          <Heading
            as="h1"
            sx={{ fontFamily: "system-ui, sans-serif" }}
            fontSize={['md', 'xl', '2xl', '3xl']}
            color="white"
          >
            {props.title}
          </Heading>
        </Center>
      </Box>
    </Box>
  )
}
