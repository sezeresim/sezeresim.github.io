import Head from 'next/head';
import NextLink from 'next/link';
import { Container, Link, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sezer Esim</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW="2xl">
        <Text fontSize="2xl">Hi,I am Sezer</Text>
      </Container>
    </>
  );
}
