'use client'
import Link from 'next/link'
import { AccountCircle, Email, Lock } from 'styled-icons/material-outlined'

import { Button } from '../Button'
import { FormLink, FormWrapper } from '../Form'
import { TextField } from '../TextField'

export const FormSignUp = () => (
  <FormWrapper>
    <form>
      <TextField name="name" placeholder="Name" icon={<AccountCircle />} />

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

      <TextField
        name="confirm-password"
        placeholder="Confirm password"
        type="password"
        icon={<Lock />}
      />

      <Button size="large" fullWidth>
        Sign up now
      </Button>

      <FormLink>
        Already have an account? <Link href="/sign-up">Sign in</Link>
      </FormLink>
    </form>
  </FormWrapper>
)
