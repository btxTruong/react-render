import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading, Text, useColorMode } from '@chakra-ui/react';
import { NavLink } from '@components:NavLink';

export function Header() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box
      as="header"
      sx={{
        position: 'fixed',
        width: '100%',
        zIndex: 1000,
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        top: 0,
        left: 0,
        right: 0
      }}
    >
      <Flex
        h={16}
        alignItems={'center'}
        justifyContent={'space-between'}
        maxW="90rem"
        sx={{
          marginInlineStart: 'auto',
          marginInlineEnd: 'auto',
        }}
      >
        <Heading as="h4" size="md">React Render</Heading>
        <Flex alignItems={'center'}>
          <NavLink href="https://github.com/btxTruong/react-render">
            <Text fontSize="md">
              GitHub
            </Text>
          </NavLink>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}