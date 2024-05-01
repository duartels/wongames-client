import 'match-media-mock'

import { screen } from '@testing-library/react'

import { renderWithTheme } from '@/utils/tests/helpers'

import { Game } from '.'
import { mockGameTemplate } from './mock'

jest.mock('@/components/Menu', () => {
  return {
    Menu: () => <div data-testid="Menu" />
  }
})

jest.mock('@/components/Showcase', () => {
  return {
    Showcase: () => <div data-testid="Showcase" />
  }
})

jest.mock('@/components/Gallery', () => {
  return {
    Gallery: () => <div data-testid="Gallery" />
  }
})

jest.mock('@/components/GameDetails', () => {
  return {
    GameDetails: () => <div data-testid="GameDetails" />
  }
})

jest.mock('@/components/GameInfo', () => {
  return {
    GameInfo: () => <div data-testid="GameInfo" />
  }
})

describe('<Game />', () => {
  it('should render the template with components', () => {
    renderWithTheme(<Game {...mockGameTemplate} />)

    expect(screen.getByTestId('Menu')).toBeInTheDocument()
    expect(screen.getByTestId('Gallery')).toBeInTheDocument()
    expect(screen.getByTestId('GameDetails')).toBeInTheDocument()
    expect(screen.getByTestId('GameInfo')).toBeInTheDocument()
    expect(screen.getAllByTestId('Showcase')).toHaveLength(2)
    expect(screen.getByText(/Custom HTML/i)).toBeInTheDocument()
  })

  it('should not render Gallery if no images', () => {
    renderWithTheme(<Game {...mockGameTemplate} gallery={undefined} />)

    expect(screen.queryByTestId('Gallery')).not.toBeInTheDocument()
  })

  it('should not render Gallery on mobile', () => {
    renderWithTheme(<Game {...mockGameTemplate} />)

    expect(screen.getByTestId('Gallery').parentElement).toHaveStyle({
      display: 'none'
    })

    expect(screen.getByTestId('Gallery').parentElement).toHaveStyleRule(
      'display',
      'block',
      {
        media: '(min-width:  768px)'
      }
    )
  })

  it('should render cover image', () => {
    renderWithTheme(<Game {...mockGameTemplate} />)

    const cover = screen.getByRole('image', { name: /cover/i })

    expect(cover).toHaveStyle({
      backgroundImage: mockGameTemplate.cover,
      height: '39.5rem'
    })

    expect(cover).toHaveStyleRule('height', '70rem', {
      media: '(min-width:  768px)'
    })

    expect(cover).toHaveStyleRule(
      'clip-path',
      'polygon(0 0, 100% 0, 100% 100%, 0 85%)',
      {
        media: '(min-width:  768px)'
      }
    )
  })
})
