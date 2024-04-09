'use client'
import Link from 'next/link'
import { Email, Lock } from 'styled-icons/material-outlined'

import { Button } from '../Button'
import { FormLink, FormWrapper } from '../Form'
import { TextField } from '../TextField'
import * as S from './styles'

export const FormSignIn = () => (
  <FormWrapper>
    <form>
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />

      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />

      <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

      <Button size="large" fullWidth>
        Sign in now
      </Button>

      <FormLink>
        Don’t have an account? <Link href="/sign-up">Sign up</Link>
      </FormLink>
    </form>
  </FormWrapper>
)
