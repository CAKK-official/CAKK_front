import React from 'react'

import { css } from '@emotion/react'
import * as Styled from './style'

interface ItemGridInterface {
  //TODO: update props, fetched data
  row: number
  column: number
  items: string[]
}

const ItemGridContainer: React.FC<ItemGridInterface> = ({
  row,
  column,
  items,
}) => {
  return (
    <Styled.ItemGridContainer>
      {items.map((item: string, index: number) => (
        <div
          key={index}
          css={css`
            background-color: dodgerblue;
            height: 100%;
          `}
        >
          {item}
        </div>
      ))}
    </Styled.ItemGridContainer>
  )
}

export default ItemGridContainer
