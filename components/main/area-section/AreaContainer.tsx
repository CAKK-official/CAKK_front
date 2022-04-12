import React from 'react'
import { ItemGridContainer } from '../../item-container'
import * as Styled from './style'

const AreaContainer: React.FC = () => {
  return (
    <Styled.AreaContainer>
      <h2>우리동네 케이크 가게</h2>
      <div className="filter-wrapper">
        {/**TODO: 카테고리 context를 만들어서 map을 이용하여 불러온다 */}
        <ul>
          <li>#레터링케이크</li>
          <li>#레터링케이크</li>
          <li>#레터링케이크</li>
          <li>#레터링케이크</li>
        </ul>
      </div>
      <ItemGridContainer
        row={3}
        column={4}
        items={['a', 'b', 'c', 'd', 'e', 'f']}
      />
    </Styled.AreaContainer>
  )
}

export default AreaContainer
