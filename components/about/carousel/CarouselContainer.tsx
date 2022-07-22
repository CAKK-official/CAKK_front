// import Image from 'next/image'
import * as Styled from './style'

import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import Image from 'next/image'

const CarouselContainer = () => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  return (
    <Styled.CarouselContainer>
      <div className="slider">
        {new Array(10).fill(1).map((_, index) => {
          return (
            <div className="image-container" key={index}>
              <Image
                src="/img/about_carousel.png"
                alt="about carousel"
                layout="fill"
                objectFit="contain"
              />
            </div>
          )
        })}
      </div>
    </Styled.CarouselContainer>
  )
}

export default CarouselContainer
