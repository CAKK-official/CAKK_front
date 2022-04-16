import React from 'react'
import ItemSwiperContainer from '../../item-container/ItemSwiperContainer'

import * as Styled from './style'

const BestContainer = () => {
  return (
    <Styled.BestContainer>
      <h2>인기 케이크 가게 Top3</h2>
      <ItemSwiperContainer count={3} items={['a', 'b', 'c']} />
    </Styled.BestContainer>
  )
}

export default BestContainer
