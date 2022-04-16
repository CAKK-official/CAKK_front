import React from 'react'
import { ItemSwiperContainer } from '../../item-container'
import * as Styled from './style'

const IntroductionContainer: React.FC = () => {
  return (
    <Styled.IntroductionContainer>
      <div className="introduction-wrapper">
        <h2>케이크크를 소개합니다</h2>
        <span>주문제작 케이크를 찾기 어려우셨다면</span>
        <br />
        <span>
          이제는 케이크크를 통해 쉽게 가게를 찾고 케이크 주문을 예약해보세요!
        </span>
        <ItemSwiperContainer count={3} items={['a', 'b', 'c']} />
      </div>
    </Styled.IntroductionContainer>
  )
}

export default IntroductionContainer
