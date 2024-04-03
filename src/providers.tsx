import React from "react"
import { ChakraProvider } from '@chakra-ui/react'

import { MainPage } from '@pages:MainPage';

export const Providers = () => {
  return (
    <React.Suspense>
      <ChakraProvider>
        <MainPage />
      </ChakraProvider>
    </React.Suspense>
  )
}
