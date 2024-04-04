import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Header } from 'src/components/Header';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <Box as="main">
        {children}
      </Box>
    </>
  );
}
