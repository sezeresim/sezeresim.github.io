import Head from 'next/head';
import { Box, Container, Text, Image, Link, Badge, Wrap, Avatar, Stack, Divider } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

export default function Home() {
  const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <>
      <Head>
        <title>Sezer Esim</title>
        <link rel="icon" href={'/favicon.ico'} />
      </Head>
      <Container maxW="4xl">
        <Stack spacing={3}>
          <Text fontSize="2xl" isTruncated color="rebeccapurple">
            Hi,I am Sezer,
          </Text>
          <Text>I am a software engineer.</Text>
        </Stack>
        <Divider my="5" />

        <Text fontSize="2xl" isTruncated color="skyblue" mb="5">
          Tech Stack
        </Text>
        {[
          { name: 'Javascript', icon: <CheckCircleIcon mr="2" color={getRandomColor} /> },
          { name: 'Node.js', icon: <CheckCircleIcon mr="2" color={getRandomColor} /> },
          { name: 'AWS', icon: <CheckCircleIcon mr="2" color={getRandomColor} /> },
          { name: 'React.js', icon: <CheckCircleIcon mr="2" color={getRandomColor} /> },
          { name: 'Next.js', icon: <CheckCircleIcon mr="2" color={getRandomColor} /> },
          { name: 'Serverless', icon: <CheckCircleIcon mr="2" color={getRandomColor} /> },
          { name: 'React Native', icon: <CheckCircleIcon mr="2" color={getRandomColor} /> },
          { name: 'NoSQL', icon: <CheckCircleIcon mr="2" color={getRandomColor} /> },
        ].map((item) => (
          <Text display="inline-flex" alignItems="center" mr="5" mb="5" color={getRandomColor()}>
            {item.icon} {item.name}
          </Text>
        ))}
      </Container>
    </>
  );
}
