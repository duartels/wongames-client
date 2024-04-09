import { screen } from '@testing-library/react'

import { renderWithTheme } from '@/utils/tests/helpers'

import { FormLink, FormWrapper } from '.'

describe('<Form />', () => {
  it('should render the component', () => {
    renderWithTheme(
      <FormWrapper>
        <FormLink>
          My nice <a href="#">link</a>
        </FormLink>
      </FormWrapper>
    )

    expect(screen.getByRole('link', { name: /link/i })).toBeInTheDocument()
  })
})
