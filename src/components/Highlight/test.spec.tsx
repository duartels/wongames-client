import { screen } from '@testing-library/react'

import { renderWithTheme } from '@/utils/tests/helpers'

import { Highlight } from '.'

const props = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  buttonLabel: 'Buy now',
  buttonLink: '/link',
  backgroundImage: '/img/red-dead-img.jpg'
}

describe('<Highlight />', () => {
  it('should render the headings and button', () => {
    renderWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /Heading 1/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Heading 2/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /Buy now/i })).toBeInTheDocument()
  })

  it('should render the background image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    })
  })

  it('should render the float image', () => {
    renderWithTheme(<Highlight {...props} floatImage="/float-image.png" />)

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      '/float-image.png'
    )
  })
})
