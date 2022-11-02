// import '../styles/globals.css'
// import { ChakraProvider } from '@chakra-ui/react'
// import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps): JSX.Element {
//   return (
//     <ChakraProvider>
//       <Component {...pageProps} />
//     </ChakraProvider>
//   )
// }
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
