import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from '@/utils/tests/helpers'

import { ExploreSidebar } from '.'
import { mockExploresiderbarFilters } from './mock'

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
})
