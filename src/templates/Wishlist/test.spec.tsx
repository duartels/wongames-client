import { screen } from '@testing-library/react'

import { mockGameCardSlider } from '@/components/GameCardSlider/mock'
import { mockHighlight } from '@/components/Highlight/mock'
import { renderWithTheme } from '@/utils/tests/helpers'

import { Wishlist } from '.'

jest.mock('@/components/Showcase', () => {
  return {
    Showcase: () => <div data-testid="Showcase" />
  }
})

const props = {
  games: mockGameCardSlider,
  recommendedHighlight: mockHighlight,
  recommendedGames: [...mockGameCardSlider]
}

describe('<Wishlist />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Wishlist {...props} />)

    expect(
      screen.getByRole('heading', { name: /wishlist/i })
    ).toBeInTheDocument()

    expect(screen.getAllByText(/population zero/i)).toHaveLength(5)
    expect(screen.getByTestId('Showcase')).toBeInTheDocument()
  })
})
