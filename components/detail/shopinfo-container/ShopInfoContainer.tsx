import React from 'react'
import { css } from '@emotion/react'

interface ShopInfoInterface {
  title: string
  desc: string
}
const ShopInfoContainer: React.FC<ShopInfoInterface> = ({ title, desc }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h3
        css={css`
          color: #707070;
        `}
      >
        {desc}
      </h3>
    </div>
  )
}
export default ShopInfoContainer
