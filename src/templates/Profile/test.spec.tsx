import { screen } from '@testing-library/react'
import { PropsWithChildren } from 'react'

import { renderWithTheme } from '@/utils/tests/helpers'

import { Profile } from '.'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/profile/orders')
}))

jest.mock('../Base', () => ({
  Base: ({ children }: PropsWithChildren) => (
    <div data-testid="Mock Base">{children}</div>
  )
}))

jest.mock('@/components/ProfileMenu', () => ({
  ProfileMenu: () => <div data-testid="Mock ProfileMenu" />
}))

jest.mock('@/components/Heading', () => ({
  Heading: ({ children }: PropsWithChildren) => <h1>{children}</h1>
}))

describe('<Profile />', () => {
  it('should render sections', () => {
    renderWithTheme(<Profile>Lorem Ipsum</Profile>)

    expect(screen.getByText('Lorem Ipsum')).toBeInTheDocument()
    expect(screen.getByText('My profile')).toBeInTheDocument()
    expect(screen.getByTestId('Mock ProfileMenu')).toBeInTheDocument()
  })
})
