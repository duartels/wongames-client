import { screen } from '@testing-library/react'

import { renderWithTheme } from '@/utils/tests/helpers'

import { TextContent } from '.'
import { mockTextContent } from './mock'

describe('<TextContent />', () => {
  it('should render the heading', () => {
    renderWithTheme(<TextContent {...mockTextContent} />)

    expect(
      screen.getByRole('heading', { name: /description/i })
    ).toBeInTheDocument()
  })
})
