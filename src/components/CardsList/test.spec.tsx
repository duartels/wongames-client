import { screen } from '@testing-library/react'

import { renderWithTheme } from '@/utils/tests/helpers'

import { mockPaymentOptions } from '../PaymentOptions/mock'
import { CardsList } from '.'

describe('<CardsList />', () => {
  it('should render the cards list', () => {
    renderWithTheme(<CardsList cards={mockPaymentOptions.cards} />)

    expect(
      screen.getByRole('heading', { name: /My Cards/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /visa/i })).toHaveAttribute(
      'src',
      '/img/visa.png'
    )
    expect(screen.getByText(/4325/)).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /mastercard/i })).toHaveAttribute(
      'src',
      '/img/master-card.png'
    )
    expect(screen.getByText(/4326/)).toBeInTheDocument()
  })
})
