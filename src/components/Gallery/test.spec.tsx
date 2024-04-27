import 'match-media-mock'

import { fireEvent, screen } from '@testing-library/react'

import { renderWithTheme } from '@/utils/tests/helpers'

import { Gallery } from '.'
import { mockGallery } from './mock'

describe('<Gallery />', () => {
  it('should render thumbnails as buttons', () => {
    renderWithTheme(<Gallery items={mockGallery.slice(0, 2)} />)

    expect(
      screen.getByRole('button', { name: /thumb - gallery image 1/i })
    ).toHaveAttribute('src', mockGallery[0].src)
    expect(
      screen.getByRole('button', { name: /thumb - gallery image 2/i })
    ).toHaveAttribute('src', mockGallery[1].src)
  })

  it('should handle open modal', () => {
    renderWithTheme(<Gallery items={mockGallery.slice(0, 2)} />)

    const modal = screen.getByLabelText('modal')

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' })

    const thumb = screen.getByRole('button', {
      name: /thumb - gallery image 1/i
    })

    fireEvent.click(thumb)
    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toHaveStyle({ opacity: 1 })
  })

  it('should handle close modal when overlay or button clicked', () => {
    renderWithTheme(<Gallery items={mockGallery.slice(0, 2)} />)

    const modal = screen.getByLabelText('modal')
    const thumb = screen.getByRole('button', {
      name: /thumb - gallery image 1/i
    })
    fireEvent.click(thumb)

    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toHaveStyle({ opacity: 1 })

    const buttonCloseModal = screen.getByRole('button', {
      name: /close modal/i
    })
    fireEvent.click(buttonCloseModal)

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })
})
