import styled from 'styled-components'

import * as GameItemStyles from '../GameItem/styles'

export const Wrapper = styled.main`
  ${GameItemStyles.Wrapper} {
    &:last-child {
      border-bottom: 0;
    }
  }
`
