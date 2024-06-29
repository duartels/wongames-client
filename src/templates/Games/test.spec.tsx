import { screen } from '@testing-library/react'

import { mockExploresiderbarFilters } from '@/components/ExploreSidebar/mock'
import { mockGameCardSlider } from '@/components/GameCardSlider/mock'
import { renderWithTheme } from '@/utils/tests/helpers'

import { GamesTemplate } from '.'

jest.mock('@/components/ExploreSidebar', () => {
  return {
    ExploreSidebar: () => <div data-testid="ExploreSidebar" />
  }
})

jest.mock('@/components/GameCard', () => {
  return {
    GameCard: () => <div data-testid="GameCard" />
  }
})

describe('<Games />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <GamesTemplate
        filterItems={mockExploresiderbarFilters}
        games={[mockGameCardSlider[0]]}
      />
    )

    expect(screen.getByTestId('ExploreSidebar')).toBeInTheDocument()
    expect(screen.getByTestId('GameCard')).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })
})
