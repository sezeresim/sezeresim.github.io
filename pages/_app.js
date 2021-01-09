import Head from 'next/head';
import theme from '../theme';
import { ChakraProvider } from '@chakra-ui/react';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <main>
          <Component {...pageProps} />
        </main>
      </ChakraProvider>
    </>
  );
}
