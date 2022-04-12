import { css } from '@emotion/react'
import React from 'react'
import * as Styled from './style'
const Footer = () => {
  return (
    <Styled.Footer
      css={css`
        background-color: #eaeaea;
        height: 200px;
      `}
    >
      Footer goes here
    </Styled.Footer>
  )
}

export default Footer
