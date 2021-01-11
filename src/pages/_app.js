import Head from 'next/head';
import theme from '../theme';
import { ChakraProvider } from '@chakra-ui/react';
import Header from '../components/header';

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/*  <Header /> */}
      <main>
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  );
}
