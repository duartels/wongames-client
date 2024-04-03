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

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...data} />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /contact/i })
    ).toBeInTheDocument()
  })

  it('should render sections', () => {
    renderWithTheme(<Home {...data} />)

    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /upcoming/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /free games/i })
    ).toBeInTheDocument()
  })

  it('should render section elements', () => {
    renderWithTheme(<Home {...data} />)

    expect(screen.getAllByText(/defy death 2/i)).toHaveLength(1)
    expect(screen.getAllByText(/population zero/i)).toHaveLength(20)
    expect(screen.getAllByText(/read dead is back!/i)).toHaveLength(3)
  })
})
