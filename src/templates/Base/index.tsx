'use client'
import { PropsWithChildren } from 'react'

import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Menu } from '@/components/Menu'

import * as S from './styles'

export type BaseProps = PropsWithChildren

export const Base = ({ children }: BaseProps) => (
  <section>
    <Container>
      <Menu />
    </Container>

    {children}

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)
