import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

export default function ContentContainer({
  children,
}: {
  children: ReactNode
}) {
  return (
    <Box maxW={'62em'} mx={'auto'} py={'0'} px={'2rem'}>
      {children}
    </Box>
  )
}
