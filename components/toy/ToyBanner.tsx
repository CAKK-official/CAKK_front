import { Canvas } from '@react-three/fiber'
import { OrbitControls, OrthographicCamera } from '@react-three/drei'
import React, { Suspense, useRef } from 'react'
import * as Styled from './style'
import Cake from './obj/Scene'
import NaturalImage from './NaturalImage'

const ToyBanner = () => {
  return (
    <div>
      <div style={{ position: 'sticky', top: '80px' }}>
        <div style={{ position: 'relative' }}>
          <NaturalImage src="/img/banner.png" alt="banner" />
          <h1
            dangerouslySetInnerHTML={{
              __html: '솔직히<br/>케이크크가<br/>제일 편하잖아요~',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default ToyBanner
