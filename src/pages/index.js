import Head from 'next/head';
import { Box, Container, Text, Image, Link, Badge, Wrap, Avatar, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function Home() {
  const [blogPosts, setBlogPosts] = useState(null);
  useEffect(() => {
    axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sezeresim').then((res) => {
      console.log(res.data);
      setBlogPosts(res.data.items);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Sezer Esim | Software Engineer </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW="5xl" mt="10">
        <Stack spacing={3}>
          <Text fontSize="2xl" isTruncated>
            Hi,I am Sezer :)
          </Text>
          <Text>I am a software engineer.</Text>
        </Stack>

        <Wrap mt="10">
          {blogPosts &&
            blogPosts.map((post) => (
              <Link href={post.link} target="_blank" mb="10px">
                <Box maxWidth="sm" borderRadius={5} overflow="hidden" borderWidth="1px">
                  <Image src={post.thumbnail} alt={post.title} height="200px" width="100%" />
                  <Box m="3">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      Date
                    </Badge>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      textTransform="uppercase"
                      ml="2"
                    >
                      {post.pubDate}
                    </Box>
                  </Box>
                  <Box m="3">{post.title}</Box>
                  <Box m="3">
                    {post.categories.map((category) => (
                      <Badge borderRadius="full" px="2" colorScheme="blue" mr="3">
                        {category}
                      </Badge>
                    ))}
                  </Box>
                </Box>
              </Link>
            ))}
        </Wrap>
      </Container>
    </>
  );
}
