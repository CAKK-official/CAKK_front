import React from 'react'
import * as S from './style'
import { LoadingComponent } from '.'

const LoadingView: React.FC<{ text: string }> = ({ text }) => {
  return (
    <S.LoadingView>
      <LoadingComponent text={text} />
    </S.LoadingView>
  )
}

export default LoadingView
