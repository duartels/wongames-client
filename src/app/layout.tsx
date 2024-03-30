import type { Metadata } from 'next'
import localFont from 'next/font/local'

import StyledComponentsRegistry from '@/lib/registry'

import { Providers } from './providers'

const poppins = localFont({
  src: [
    {
      path: '../../public/fonts/poppins-v20-latin-300.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../public/fonts/poppins-v20-latin-regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/poppins-v20-latin-600.woff2',
      weight: '600',
      style: 'normal'
    }
  ]
})

export const metadata: Metadata = {
  title: 'Won Games',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
