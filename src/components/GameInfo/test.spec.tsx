import { screen } from '@testing-library/react'

import { renderWithTheme } from '@/utils/tests/helpers'

import { GameInfo } from '.'
import { mockGameInfo } from './mock'

describe('<GameInfo />', () => {
  it('should render game informations', () => {
    renderWithTheme(<GameInfo {...mockGameInfo} />)

    expect(
      screen.getByRole('heading', { name: mockGameInfo.title })
    ).toBeInTheDocument()
    expect(screen.getByText(mockGameInfo.description)).toBeInTheDocument()
    expect(screen.getByText(`$${mockGameInfo.price}`)).toBeInTheDocument()
  })

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...mockGameInfo} />)

    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument()
  })
})
