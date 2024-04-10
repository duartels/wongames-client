import 'match-media-mock'

import { screen } from '@testing-library/react'

import { mockBannerSlider } from '@/components/BannerSlider/mock'
import { mockGameCardSlider } from '@/components/GameCardSlider/mock'
import { mockHighlight } from '@/components/Highlight/mock'
import { renderWithTheme } from '@/utils/tests/helpers'

import { Home, HomeTemplateProps } from '.'

const data: HomeTemplateProps = {
  banners: mockBannerSlider,
  newGames: mockGameCardSlider,
  mostPopularHighlight: mockHighlight,
  mostPopularGames: mockGameCardSlider,
  upcomingGames: mockGameCardSlider,
  upcomingHighlight: mockHighlight,
  upcomingMoreGames: mockGameCardSlider,
  freeGames: mockGameCardSlider,
  freeHighlight: mockHighlight
}

jest.mock('@/components/Menu', () => {
  return {
    Menu: () => <div data-testid="Menu" />
  }
})

jest.mock('@/components/Footer', () => {
  return {
    Footer: () => <div data-testid="Footer" />
  }
})

jest.mock('@/components/Showcase', () => {
  return {
    Showcase: () => <div data-testid="Showcase" />
  }
})

jest.mock('@/components/BannerSlider', () => {
  return {
    BannerSlider: () => <div data-testid="BannerSlider" />
  }
})

describe('<Home />', () => {
  it('should render home', () => {
    renderWithTheme(<Home {...data} />)

    expect(screen.getByTestId('Menu')).toBeInTheDocument()
    expect(screen.getByTestId('BannerSlider')).toBeInTheDocument()
    expect(screen.getAllByTestId('Showcase')).toHaveLength(5)
    expect(screen.getByTestId('Footer')).toBeInTheDocument()
  })
})
