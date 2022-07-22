import Link from 'next/link'
import React from 'react'
import * as Styled from '../style'

const MainPlayItem = () => {
  return (
    <Styled.MainPlayItem>
      <Link href="/result">
        <div>
          <h1>
            주문제작 케이크
            <br />
            아직도 직접 검색해?
            <br />
            이제 케이크크에서
            <br /> 한번에!
          </h1>
          <div className="description">케이크 가게 찾으러 가기!</div>
        </div>
      </Link>
    </Styled.MainPlayItem>
  )
}

export default MainPlayItem
