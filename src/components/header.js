import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
  HStack,
  Text,
  Box,
  Container,
  Button,
  MenuDivider,
  ButtonGroup,
  Switch,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
const MENU = [
  { name: 'Anasayfa', url: '/' },
  { name: 'Blog', url: '/blog' },
];

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  const router = useRouter();

  return (
    <Box as="header" py={10}>
      <Container maxW="4xl">
        <Box as="nav" display="flex" justifyContent="space-between" alignItems="flex-end">
          <Box>
            {MENU.map((item) => {
              return (
                <NextLink href={item.url}>
                  <Link mr={3} py={2} w="full" _hover={{ textDecoration: 'none' }}>
                    {item.name}
                  </Link>
                </NextLink>
              );
            })}
            <Link href="https://github.com/sezeresim">Github</Link>
          </Box>
          <Box>
            <Switch onChange={toggleColorMode} display="inline-flex" />
            {colorMode === 'dark' ? <MoonIcon ml="2" /> : <SunIcon ml="2" />}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
