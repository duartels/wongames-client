import { screen } from '@testing-library/react'
import { PropsWithChildren } from 'react'

import { renderWithTheme } from '@/utils/tests/helpers'

import { OrdersList } from '.'
import { mockOrdersList } from './mock'

jest.mock('../GameItem', () => ({
  GameItem: ({ children }: PropsWithChildren) => (
    <div data-testid="GameItem">{children}</div>
  )
}))

jest.mock('../Empty', () => ({
  Empty: () => <div data-testid="Empty" />
}))

describe('<OrdersList />', () => {
  it('should render the game items', () => {
    renderWithTheme(<OrdersList items={mockOrdersList} />)

    expect(
      screen.getByRole('heading', { name: /My Orders/i })
    ).toBeInTheDocument()

    expect(screen.getAllByTestId('GameItem')).toHaveLength(
      mockOrdersList.length
    )
  })

  it('should render empty state', () => {
    renderWithTheme(<OrdersList />)

    expect(screen.getByTestId('Empty')).toBeInTheDocument()
  })
})
