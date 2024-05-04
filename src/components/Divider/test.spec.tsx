import { screen } from '@testing-library/react'

import { renderWithTheme } from '@/utils/tests/helpers'

import { Divider } from '.'

describe('<Divider />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Divider />)

    expect(screen.getByRole('separator')).toHaveStyle({
      background: 'rgba(181, 181, 181, 0.3)',
      height: '0.1rem',
      margin: '5.6rem auto 3.2rem'
    })

    expect(screen.getByRole('separator')).toHaveStyleRule(
      'margin',
      'calc(5.6rem * 2.5) auto 5.6rem',
      {
        media: '(min-width:  768px)'
      }
    )
  })
})
