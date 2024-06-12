'use client'
import { usePathname } from 'next/navigation'

import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { ProfileMenu } from '@/components/ProfileMenu'

import { Base } from '../Base'
import * as S from './styles'

export type ProfileTemplateProps = {
  children: React.ReactNode
}

export const Profile = ({ children }: ProfileTemplateProps) => {
  const pathname = usePathname()

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My profile
        </Heading>

        <S.Main>
          <ProfileMenu activeLink={pathname} />

          <S.Content>{children}</S.Content>
        </S.Main>
      </Container>
    </Base>
  )
}
