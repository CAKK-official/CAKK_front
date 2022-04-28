import React from 'react'
import { css, jsx } from '@emotion/react'
import Category from '../category/Category'

const FONT_COLOR = 'E72D3F'
interface ShopInfoInterface {
  title: string
  desc: string
  categories: Array<string>
}
const ShopInfoContainer: React.FC<ShopInfoInterface> = ({
  title,
  desc,
  categories,
}) => {
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
      <div style={{ display: 'flex' }}>
        {categories.map((category: string) => (
          <Category key={category} category={category} />
        ))}
      </div>
    </div>
  )
}
export default ShopInfoContainer
