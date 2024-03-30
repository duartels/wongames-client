import 'match-media-mock'

import { screen } from '@testing-library/react'

import { renderWithTheme } from '@/utils/tests/helpers'

import { BannerSlider } from '.'

const items = [
  {
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: 'Bestselling'
  },
  {
    title: 'Defy death 3',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
]

describe('<BannerSlider />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-vertical')).toBeInTheDocument()
  })

  it('should render with 1 active item', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(2)
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)

    expect(
      screen.getByRole('heading', { name: /defy death/i, hidden: false })
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { name: /defy death 3/i, hidden: true })
    ).toBeInTheDocument()
  })

  it('should render with the dots', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-dots')).toBeInTheDocument()
  })
})
