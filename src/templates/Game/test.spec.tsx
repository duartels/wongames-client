import { renderWithTheme } from '@/utils/tests/helpers'

import { Game } from '.'

const mockCover =
  'https://images.gog-statics.com/5643a7c831df452d29005caeca24c28cdbfaa6fbea5a9556b147ee26d325fa70_bg_crop_1366x655.jpg'

describe('<Game />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Game cover={mockCover} />)
  })
})
