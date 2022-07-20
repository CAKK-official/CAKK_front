import Link from 'next/link'
import React from 'react'
import * as S from '../style'

export const SubPlayItem1 = () => {
  return (
    <Link href="/result" className="description">
      <S.SubPlayItem1>
        <h2 className="title">
          그동안,
          <br />
          주문제작 케이크 가게 찾기
          <br />
          어려우셨죠?
        </h2>
        <div className="subtitle">케이크크에서 편하게 찾으실 수 있습니다!</div>
      </S.SubPlayItem1>
    </Link>
  )
}

export const SubPlayItem2 = () => {
  return (
    <Link href="/map" className="description">
      <S.SubPlayItem2>
        <h2 className="title">
          내주변에 커스텀케이크
          <br />
          가게가 어디있지?
        </h2>
        <h1 className="wow">와우!</h1>
        <div className="subtitle">이젠, 케이크크에서 :)</div>
      </S.SubPlayItem2>
    </Link>
  )
}
