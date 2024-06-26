import { screen } from '@testing-library/react'

import { renderWithTheme } from '@/utils/tests/helpers'

import { FormProfile } from '.'

describe('<FormProfile />', () => {
  it('should render the profile form', () => {
    renderWithTheme(<FormProfile />)

    expect(
      screen.getByRole('heading', { name: /My Profile/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('textbox', { name: /Name/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /Email/i })).toBeInTheDocument()

    expect(
      screen.getByPlaceholderText(/type your password/i)
    ).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/new password/i)).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument()
  })
})
