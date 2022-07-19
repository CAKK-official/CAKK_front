import Image from 'next/image'
import React from 'react'
import * as S from './style'

const LoadingComponent: React.FC = () => {
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
      <span>지도를 불러오고 있습니다...</span>
      <div className="progresser__bar">
        <div className="progresser__bar-item"></div>
      </div>
    </S.LoadingComponent>
  )
}

export default LoadingComponent
