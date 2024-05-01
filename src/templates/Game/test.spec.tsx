import 'match-media-mock'

import { renderWithTheme } from '@/utils/tests/helpers'

import { Game } from '.'
import { mockGameTemplate } from './mock'

describe('<Game />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Game {...mockGameTemplate} />)
  })
})
