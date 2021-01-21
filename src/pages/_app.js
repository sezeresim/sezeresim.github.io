import Head from 'next/head';
import theme from '../../theme';
import { ChakraProvider } from '@chakra-ui/react';
import Header from '../components/header';
import GlobalContext from '../context/Global';
import '../styles/globals.css';
export default function MyApp({ Component, pageProps }) {
  return (
    <GlobalContext>
      <ChakraProvider theme={theme}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
      </ChakraProvider>
    </GlobalContext>
  );
}
