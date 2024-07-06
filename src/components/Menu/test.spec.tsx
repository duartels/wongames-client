import { fireEvent, screen } from '@testing-library/react'

import { renderWithTheme } from '@/utils/tests/helpers'

import { Menu } from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getAllByLabelText(/shopping cart/i)).toHaveLength(2)

    expect(screen.getByLabelText(/won games/i)).toBeInTheDocument()
  })

  it('should render the open/close mobile menu', () => {
    renderWithTheme(<Menu />)

    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    const openMenuButton = screen.getByLabelText(/open menu/i)
    fireEvent.click(openMenuButton)
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    const closeMenuButton = screen.getByLabelText(/close menu/i)
    fireEvent.click(closeMenuButton)
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it('should show register box when logged out', () => {
    renderWithTheme(<Menu />)

    expect(screen.queryByText(/my profile/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/wishlist/i)).not.toBeInTheDocument()
    expect(screen.getByText(/sign up/i)).toBeInTheDocument()
    expect(screen.getAllByText(/sign in/i)).toHaveLength(2)
  })

  it('should not show register box when logged in', () => {
    renderWithTheme(<Menu username="username" />)

    expect(screen.queryByText(/sign in now/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument()
  })

  it('should show my account and wishlist when logged in', () => {
    renderWithTheme(<Menu username="username" />)

    expect(screen.getAllByText(/my profile/i)).toHaveLength(2)
    expect(screen.getAllByText(/wishlist/i)).toHaveLength(2)
  })

  it('should not show my account and wishlist when logged out', () => {
    renderWithTheme(<Menu />)

    expect(screen.queryByText(/my profile/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/wishlist/i)).not.toBeInTheDocument()
  })
})
