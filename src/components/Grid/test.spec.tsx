import { screen } from '@testing-library/react'

import { renderWithTheme } from '@/utils/tests/helpers'

import { Grid } from '.'

describe('<Grid />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Grid>Children</Grid>)

    expect(screen.getByText(/children/i)).toBeInTheDocument()
  })
})
