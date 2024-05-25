import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from '@/utils/tests/helpers'

import { PaymentOptions } from '.'
import { mockPaymentOptions } from './mock'

describe('<PaymentOptions />', () => {
  it('should render the saved card options and the add new card button', () => {
    renderWithTheme(
      <PaymentOptions {...mockPaymentOptions} handlePayment={jest.fn} />
    )

    expect(screen.getByText(/4326/)).toBeInTheDocument()
    expect(screen.getByText(/4325/)).toBeInTheDocument()
    expect(screen.getByText(/Add a new credit card/i)).toBeInTheDocument()
  })

  it('should handle select card when clicking on the label', async () => {
    renderWithTheme(
      <PaymentOptions {...mockPaymentOptions} handlePayment={jest.fn} />
    )

    userEvent.click(screen.getByLabelText(/4326/))
    await waitFor(() => {
      expect(screen.getByRole('radio', { name: /4326/ })).toBeChecked()
    })
  })

  it('should not call handlePayment when button is disabled', async () => {
    const handlePayment = jest.fn()

    renderWithTheme(
      <PaymentOptions {...mockPaymentOptions} handlePayment={handlePayment} />
    )

    userEvent.click(screen.getByRole('button', { name: /buy now/i }))

    expect(handlePayment).not.toHaveBeenCalled()
  })

  it('should call handlePayment when button is enabled', async () => {
    const handlePayment = jest.fn()

    renderWithTheme(
      <PaymentOptions {...mockPaymentOptions} handlePayment={handlePayment} />
    )

    userEvent.click(screen.getByLabelText(/4326/))
    userEvent.click(screen.getByRole('button', { name: /buy now/i }))

    await waitFor(() => {
      expect(handlePayment).toHaveBeenCalled()
    })
  })
})
