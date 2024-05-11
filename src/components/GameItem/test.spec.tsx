import { screen } from '@testing-library/react'

import { renderWithTheme } from '@/utils/tests/helpers'

import { GameItem } from '.'
import { mockGameItem } from './mock'

describe('<GameItem />', () => {
  it('should render the heading', () => {
    renderWithTheme(<GameItem {...mockGameItem} />)

    expect(
      screen.getByRole('heading', { name: mockGameItem.title })
    ).toBeInTheDocument()
    expect(screen.getByText(mockGameItem.price)).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: /Red Dead Redemption 2/i })
    ).toHaveAttribute('src', mockGameItem.img)
  })
})
