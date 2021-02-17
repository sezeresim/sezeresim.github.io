import Head from 'next/head';
import { Box, Container, Text, Image, Link, Badge, Wrap, Avatar, Stack, Divider } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Icon } from '../components';
export default function Home() {
  return (
    <>
      <Head>
        <title>Sezer Esim</title>
        <link rel="icon" href={'/favicon.ico'} />
      </Head>
      <Container maxW="4xl">
        <Stack spacing={3} mb="5">
          <Text fontSize="xl" isTruncated>
            Hi,I am Sezer,
          </Text>
          <Text>I am a software engineer.</Text>
        </Stack>
        <Divider />
        <Text fontSize="2xl" isTruncated mb="5">
          Tech Stack
        </Text>
        {[
          { name: 'Javascript', icon: <Icon.Javascript mr="2" /> },
          { name: 'Node.js', icon: <Icon.Nodejs mr="2" /> },
          { name: 'AWS', icon: <Icon.Aws mr="2" /> },
          { name: 'React.js', icon: <Icon.React mr="2" /> },
          { name: 'Next.js', icon: <Icon.NextjsIcon mr="2" /> },
          { name: 'Serverless', icon: <Icon.Serverless mr="2" /> },
          { name: 'React Native', icon: <Icon.React mr="2" /> },
          { name: 'Sass', icon: <Icon.Sass mr="2" /> },
          { name: 'Css', icon: <Icon.Css3 mr="2" /> },
          { name: 'Html', icon: <Icon.Html5 mr="2" /> },
          { name: 'Git', icon: <Icon.Git mr="2" /> },
        ].map((item) => (
          <Text display="inline-flex" fontSize="5xl" alignItems="center" mr="5" mb="5">
            {item.icon}
          </Text>
        ))}
      </Container>
    </>
  );
}
