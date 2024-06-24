import 'match-media-mock'

import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { css } from 'styled-components'

import { renderWithTheme } from '@/utils/tests/helpers'

import { ExploreSidebar } from '.'
import { mockExploresiderbarFilters } from './mock'
import { Overlay } from './styles'

describe('<ExploreSidebar />', () => {
  it('should render headings', () => {
    renderWithTheme(
      <ExploreSidebar items={mockExploresiderbarFilters} onFilter={jest.fn} />
    )

    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /sort by/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /system/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument()
  })

  it('should render inputs', () => {
    renderWithTheme(
      <ExploreSidebar items={mockExploresiderbarFilters} onFilter={jest.fn} />
    )

    expect(
      screen.getByRole('checkbox', { name: /under \$50/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('radio', { name: /high to low/i })
    ).toBeInTheDocument()
  })

  it('should render a button', () => {
    renderWithTheme(
      <ExploreSidebar items={mockExploresiderbarFilters} onFilter={jest.fn} />
    )

    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument()
  })

  it('should check initial values', () => {
    renderWithTheme(
      <ExploreSidebar
        items={mockExploresiderbarFilters}
        initialValues={{
          windows: true,
          sort_by: 'low-to-high'
        }}
        onFilter={jest.fn}
      />
    )

    expect(screen.getByRole('checkbox', { name: /windows/i })).toBeChecked()
    expect(screen.getByRole('radio', { name: /low to high/i })).toBeChecked()
  })

  it('should return selected items', async () => {
    const onFilter = jest.fn()

    renderWithTheme(
      <ExploreSidebar
        items={mockExploresiderbarFilters}
        initialValues={{
          windows: true,
          sort_by: 'low-to-high'
        }}
        onFilter={onFilter}
      />
    )

    expect(onFilter).toHaveBeenCalledTimes(0)

    await userEvent.click(
      screen.getByRole('button', {
        name: /filter/i
      })
    )

    expect(onFilter).toHaveBeenCalledWith({
      windows: true,
      sort_by: 'low-to-high'
    })
  })

  it('should filter with checked values', async () => {
    const onFilter = jest.fn()

    renderWithTheme(
      <ExploreSidebar items={mockExploresiderbarFilters} onFilter={onFilter} />
    )

    await userEvent.click(screen.getByRole('checkbox', { name: /windows/i }))
    await userEvent.click(screen.getByRole('radio', { name: /low to high/i }))

    await userEvent.click(
      screen.getByRole('button', {
        name: /filter/i
      })
    )

    expect(onFilter).toHaveBeenCalledWith({
      windows: true,
      sort_by: 'low-to-high'
    })
  })

  it('should altern between radio options', async () => {
    const onFilter = jest.fn()

    renderWithTheme(
      <ExploreSidebar items={mockExploresiderbarFilters} onFilter={onFilter} />
    )

    await userEvent.click(screen.getByRole('radio', { name: /low to high/i }))
    await userEvent.click(screen.getByRole('radio', { name: /high to low/i }))

    await userEvent.click(
      screen.getByRole('button', {
        name: /filter/i
      })
    )

    expect(onFilter).toHaveBeenCalledWith({
      sort_by: 'high-to-low'
    })
  })

  it('should open/close sidebar', async () => {
    const { container } = renderWithTheme(
      <ExploreSidebar items={mockExploresiderbarFilters} onFilter={jest.fn} />
    )

    const variant = {
      media: '(max-width:  768px)',
      modifier: css`
        ${Overlay}
      `
        .toString()
        .trim()
        .replaceAll(',', '')
    }

    const Element = container.firstChild

    expect(Element).not.toHaveStyleRule('opacity', '1', variant)

    await userEvent.click(screen.getByLabelText(/open filters/))

    expect(Element).toHaveStyleRule('opacity', '1', variant)

    await userEvent.click(screen.getByLabelText(/close filters/))

    expect(Element).not.toHaveStyleRule('opacity', '1', variant)
  })
})
