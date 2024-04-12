import { screen } from '@testing-library/react'

import { renderWithTheme } from '@/utils/tests/helpers'

import { Base } from '.'

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

describe('<Base />', () => {
  it('should render menu, footer and children', () => {
    renderWithTheme(
      <Base>
        <h1>Heading</h1>
      </Base>
    )

    expect(screen.getByTestId('Menu')).toBeInTheDocument()
    expect(screen.getByTestId('Footer')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /heading/i })
    ).toBeInTheDocument()
  })
})
