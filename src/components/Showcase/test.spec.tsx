import 'match-media-mock'

import { screen } from '@testing-library/react'

import { renderWithTheme } from '@/utils/tests/helpers'

import { mockGameCardSlider } from '../GameCardSlider/mock'
import { mockHighlight } from '../Highlight/mock'
import { Showcase } from '.'

const props = {
  title: 'Heading',
  highlight: mockHighlight,
  games: mockGameCardSlider.slice(0, 1)
}

describe('<Showcase />', () => {
  it('should render all components', () => {
    renderWithTheme(<Showcase {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(screen.getAllByText(props.games[0].title)).toHaveLength(1)
    expect(screen.getAllByText(props.highlight.title)).toHaveLength(1)
  })

  it('should render without title', () => {
    renderWithTheme(
      <Showcase highlight={props.highlight} games={props.games} />
    )

    expect(
      screen.queryByRole('heading', { name: props.title })
    ).not.toBeInTheDocument()
    expect(screen.getAllByText(props.games[0].title)).toHaveLength(1)
    expect(screen.getAllByText(props.highlight.title)).toHaveLength(1)
  })

  it('should render without highlight', () => {
    renderWithTheme(<Showcase title={props.title} games={props.games} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(screen.getAllByText(props.games[0].title)).toHaveLength(1)
    expect(screen.queryByText(props.highlight.title)).not.toBeInTheDocument()
  })

  it('should render without games', () => {
    renderWithTheme(
      <Showcase title={props.title} highlight={props.highlight} />
    )

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(screen.queryByText(props.games[0].title)).not.toBeInTheDocument()
    expect(screen.queryByText(props.highlight.title)).toBeInTheDocument()
  })
})
