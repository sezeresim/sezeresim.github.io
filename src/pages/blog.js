import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Box, Container, Text, Image, Link, Badge, Wrap, Avatar, Stack } from '@chakra-ui/react';

import axios from 'axios';
const blog = () => {
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
        <title>Sezer Esim's Blog Posts</title>
        <link rel="icon" href={'/favicon.ico'} />
      </Head>
      <Container maxW="4xl">
        {blogPosts &&
          blogPosts.map((post) => (
            <Link key={post.title} href={post.link} target="_blank" mb="10px">
              <Box minW="xs" maxW="5xl" borderRadius={5} overflow="hidden" borderWidth="1px" mb="10px">
                <Box m="3">
                  <Badge borderRadius="full" px="2" colorScheme="teal">
                    Date
                  </Badge>
                  <Text
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                  >
                    {post.pubDate}
                  </Text>
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
      </Container>
    </>
  );
};

export default blog;
