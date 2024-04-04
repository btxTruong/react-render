import { ReactNode } from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

interface Props {
  children: ReactNode;
  href: string;
  target?: string;
}

export const NavLink = (props: Props) => {
  const { children, href, target } = props
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={href}
      target={target ?? '_blank'}
    >
      {children}
    </Box>
  )
}
