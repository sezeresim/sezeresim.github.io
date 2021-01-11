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
} from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';

const MENU = [{ name: 'Anasayfa', url: '/' }];

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const router = useRouter();
  const activePage = MENU.find((_) => _.url === router.pathname);

  return (
    <Box as="header" py={10}>
      <Container maxW="6xl">
        <Menu as="nav">
          <MenuButton as={Button} ml={-3} px={3} py={2} h="auto" bg="transparent">
            {/* visible */}
            <HStack spacing={2}>
              <Text fontSize="lg">{activePage && activePage.name}</Text>
              <ChevronDownIcon />
            </HStack>
          </MenuButton>

          {/* dropdown */}
          <MenuList>
            {MENU.map((item) => {
              return (
                <MenuItem as="div" p={0} key={item.url}>
                  <NextLink href={item.url}>
                    <Link px={3} py={2} w="full" _hover={{ textDecoration: 'none' }}>
                      {item.name}
                    </Link>
                  </NextLink>
                </MenuItem>
              );
            })}

            <MenuDivider />
            <MenuItem onClick={toggleColorMode}>{isDark ? 'Light Theme' : 'Dark Theme'}</MenuItem>
          </MenuList>
        </Menu>
      </Container>
    </Box>
  );
}

export default Header;
