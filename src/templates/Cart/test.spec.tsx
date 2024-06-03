import 'match-media-mock'

import { screen } from '@testing-library/react'

import { mockCartList } from '@/components/CartList/mock'
import { mockGameCardSlider } from '@/components/GameCardSlider/mock'
import { mockHighlight } from '@/components/Highlight/mock'
import { mockPaymentOptions } from '@/components/PaymentOptions/mock'
import { renderWithTheme } from '@/utils/tests/helpers'

import { Cart } from '.'

const props = {
  items: mockCartList,
  total: '$ 430,00',
  cards: mockPaymentOptions.cards,
  recommendedHighlight: mockHighlight,
  recommendedGames: mockGameCardSlider
}

jest.mock('@/components/CartList', () => ({
  CartList: () => <div data-testid="Mock Cart" />
}))

jest.mock('@/components/PaymentOptions', () => ({
  PaymentOptions: () => <div data-testid="Mock PaymentOptions" />
}))

jest.mock('@/components/Showcase', () => ({
  Showcase: () => <div data-testid="Mock Showcase" />
}))

jest.mock('@/components/Empty', () => ({
  Empty: () => <div data-testid="Mock Empty" />
}))

jest.mock('../Base', () => ({
  Base: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="Mock Base">{children}</div>
  )
}))

describe('<Cart />', () => {
  it('should render sections', () => {
    renderWithTheme(<Cart {...props} />)

    expect(
      screen.getByRole('heading', { name: /my cart/i })
    ).toBeInTheDocument()
    expect(screen.getByTestId('Mock Cart')).toBeInTheDocument()
    expect(screen.getByTestId('Mock PaymentOptions')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
    expect(screen.queryByTestId('Mock Empty')).not.toBeInTheDocument()
  })

  it('should render empty section if there are no items', () => {
    renderWithTheme(<Cart {...props} items={[]} />)

    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument()
  })
})
