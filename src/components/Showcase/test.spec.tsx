import 'match-media-mock'

import { screen } from '@testing-library/react'

import { renderWithTheme } from '@/utils/tests/helpers'

import { mockGameCardSlider } from '../GameCardSlider/mock'
import { mockHighlight } from '../Highlight/mock'
import { Showcase } from '.'

describe('<Showcase />', () => {
  it('should render all components', () => {
    renderWithTheme(
      <Showcase
        title="Heading"
        highlight={mockHighlight}
        games={mockGameCardSlider}
      />
    )

    expect(
      screen.getByRole('heading', { name: /heading/i })
    ).toBeInTheDocument()
    expect(screen.getAllByText(/population zero/i)).toHaveLength(4)
    expect(screen.getAllByText(/read dead is back!/i)).toHaveLength(1)
  })

  it('should render without title', () => {
    renderWithTheme(
      <Showcase highlight={mockHighlight} games={mockGameCardSlider} />
    )

    expect(
      screen.queryByRole('heading', { name: /heading/i })
    ).not.toBeInTheDocument()
    expect(screen.getAllByText(/population zero/i)).toHaveLength(4)
    expect(screen.getAllByText(/read dead is back!/i)).toHaveLength(1)
  })

  it('should render without highlight', () => {
    renderWithTheme(<Showcase title="Heading" games={mockGameCardSlider} />)

    expect(
      screen.getByRole('heading', { name: /heading/i })
    ).toBeInTheDocument()
    expect(screen.getAllByText(/population zero/i)).toHaveLength(4)
    expect(screen.queryByText(/read dead is back!/i)).not.toBeInTheDocument()
  })

  it('should render without games', () => {
    renderWithTheme(<Showcase title="Heading" highlight={mockHighlight} />)

    expect(
      screen.getByRole('heading', { name: /heading/i })
    ).toBeInTheDocument()
    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/read dead is back!/i)).toBeInTheDocument()
  })
})
