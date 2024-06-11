'use client'
import { Button } from '../Button'
import { Heading } from '../Heading'
import { TextField } from '../TextField'
import * as S from './styles'

export const FormProfile = () => (
  <>
    <Heading lineBottom color="black" size="small">
      My Profile
    </Heading>

    <S.Form>
      <TextField name="name" placeholder="Name" label="Name" />

      <TextField
        name="email"
        type="email"
        placeholder="Email"
        label="Email"
        initialValue="johndoe@gmail.com"
        disabled
      />

      <TextField
        name="password"
        type="password"
        placeholder="Type your password"
        label="Password"
      />

      <TextField
        name="new_password"
        type="password"
        placeholder="New password"
        label="New Password"
      />

      <Button size="large">Save</Button>
    </S.Form>
  </>
)
