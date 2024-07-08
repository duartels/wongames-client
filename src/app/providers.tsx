'use client'

import { PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'

import { ApolloWrapper } from '@/lib/apollo-wrapper'
import { GlobalStyles } from '@/styles/global'
import theme from '@/styles/theme'

export function Providers({ children }: PropsWithChildren) {
  return (
    <ApolloWrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ApolloWrapper>
  )
}
