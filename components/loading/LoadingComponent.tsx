import Image from 'next/image'
import React from 'react'
import * as S from './style'

const LoadingComponent: React.FC<{ text: string }> = ({ text }) => {
  return (
    <S.LoadingComponent>
      <div className="image-container">
        <Image
          src="/img/loading.png"
          alt="loading..."
          layout="fill"
          objectFit="contain"
        />
      </div>
      <span>{text}</span>
      <div className="progresser__bar">
        <div className="progresser__bar-item"></div>
      </div>
    </S.LoadingComponent>
  )
}

export default LoadingComponent
