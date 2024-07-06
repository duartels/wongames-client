import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from '@/utils/tests/helpers'

import { UserDropdown } from '.'

describe('<UserDropdown />', () => {
  it('should render the user name', () => {
    renderWithTheme(<UserDropdown username="Luan" />)

    expect(screen.getByText(/luan/i)).toBeInTheDocument()
  })

  it('should render the menu', async () => {
    renderWithTheme(<UserDropdown username="Luan" />)

    await userEvent.click(screen.getByText(/luan/i))

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument()
  })
})
