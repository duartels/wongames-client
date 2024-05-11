import { screen } from '@testing-library/react'

import { renderWithTheme } from '@/utils/tests/helpers'

import { GameItem } from '.'
import { mockGameItem, mockGameItemWithPayment } from './mock'

describe('<GameItem />', () => {
  it('should render the heading', () => {
    renderWithTheme(<GameItem {...mockGameItem} />)

    expect(
      screen.getByRole('heading', { name: mockGameItem.title })
    ).toBeInTheDocument()
    expect(screen.getByText(mockGameItem.price)).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: /Red Dead Redemption 2/i })
    ).toHaveAttribute('src', mockGameItem.img)
  })

  it('should render the download link', () => {
    const downloadLink = 'https://link'
    renderWithTheme(<GameItem {...mockGameItem} downloadLink={downloadLink} />)

    expect(
      screen.getByRole('link', { name: `Get ${mockGameItem.title} here` })
    ).toHaveAttribute('href', downloadLink)
  })

  it('should render the payment info', () => {
    renderWithTheme(<GameItem {...mockGameItemWithPayment} />)

    expect(
      screen.getByRole('img', {
        name: mockGameItemWithPayment.paymentInfo?.flag
      })
    ).toHaveAttribute('src', mockGameItemWithPayment.paymentInfo?.img)

    expect(
      screen.getByText(mockGameItemWithPayment.paymentInfo!.number)
    ).toBeInTheDocument()
    expect(
      screen.getByText(mockGameItemWithPayment.paymentInfo!.purchaseDate)
    ).toBeInTheDocument()
  })
})
