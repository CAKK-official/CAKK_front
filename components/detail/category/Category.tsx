import React from 'react'
import { css, jsx } from '@emotion/react'

interface CategoryInterface {
  category: string
}
const Category: React.FC<CategoryInterface> = ({ category }) => {
  return (
    <div
      css={css`
        color: #e72d3f;
        background-color: #fef6f4;
        border-radius: 10%;
        border: 1px solid #e72d3f;
        padding: 5px;
        margin: 0 10px;
      `}
      onClick={() => {
        console.log(`${category} 페이지로 이동`)
      }}
    >
      #{category}
    </div>
  )
}

export default Category
