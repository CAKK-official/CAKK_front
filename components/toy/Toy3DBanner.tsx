import { Canvas } from '@react-three/fiber'
import { OrbitControls, OrthographicCamera } from '@react-three/drei'
import React, { Suspense, useRef } from 'react'
import * as Styled from './style'
import Cake from './obj/Scene'

const Toy3DBanner = () => {
  const cakeRef = useRef()
  return <></>
}

export default Toy3DBanner

// <Styled.ToyBanner>
//     //   <Canvas shadows style={{ width: '100%' }}>
//     //     <OrthographicCamera
//       makeDefault
//       position={[0, 3, 0]}
//       rotation={[0, 0, 0]}
//       zoom={1}
//       near={-100}
//       far={100}
//     />
//     <Cake
//       ref={cakeRef}
//       // ref={headphoneRef}
//       // {...{
//       //   position: [0, 0, 0],
//       //   rotation: rotation,
//       //   castShadow: true,
//       //   color: color,
//       // }}
//     />
//     <group>
//       <ambientLight intensity={0.4} />
//       <directionalLight
//         castShadow
//         position={[2.5, 8, 5]}
//         intensity={1.5}
//         shadow-mapSize-width={1024}
//         shadow-mapSize-height={1024}
//         shadow-camera-far={50}
//         shadow-camera-left={-10}
//         shadow-camera-right={10}
//         shadow-camera-top={10}
//         shadow-camera-bottom={-10}
//       />
//     </group>
//     <OrbitControls/>
//   </Canvas>
// </Styled.ToyBanner>
