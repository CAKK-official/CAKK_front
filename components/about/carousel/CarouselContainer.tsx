// import Image from 'next/image'
import * as Styled from './style'

import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import Image from 'next/image'

const boxVariant = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: 'easeInOut' },
  },
  hidden: { opacity: 0, x: 100 },
}

const CarouselContainer = () => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start('visible')
      console.log('visible')
    } else {
      control.start('hidden')
      console.log('hidden')
    }
  }, [control, inView])

  return (
    <Styled.CarouselContainer>
      <motion.div
        className="category-wrapper"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        style={{ backgroundColor: 'green' }}
      >
        <Image
          src="/img/about_carousel.png"
          alt="about carousel"
          layout="fill"
          objectFit="contain"
        />
      </motion.div>
    </Styled.CarouselContainer>
  )
}

export default CarouselContainer
