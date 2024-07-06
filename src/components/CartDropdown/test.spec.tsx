import { screen } from '@testing-library/react'

import { renderWithTheme } from '@/utils/tests/helpers'

import { mockCartList } from '../CartList/mock'
import { CartDropdown } from '.'

describe('<CartDropdown />', () => {
  it('should render <CartIcon /> and its badge', () => {
    renderWithTheme(<CartDropdown items={mockCartList} total="$300.00" />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(`${mockCartList.length}`)).toBeInTheDocument()
  })

  it('should render Dropdown content with cart items and total', () => {
    renderWithTheme(<CartDropdown items={mockCartList} total="$300.00" />)

    expect(screen.getByText('$300.00')).toBeInTheDocument()
    expect(screen.getByText(/buy it now/i)).toBeInTheDocument()
    expect(screen.getByText(mockCartList[0].title)).toBeInTheDocument()
    expect(screen.getByText(mockCartList[1].title)).toBeInTheDocument()
  })
})
