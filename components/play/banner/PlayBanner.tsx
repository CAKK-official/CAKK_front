import React from 'react'
import { motion } from 'framer-motion'
import * as Styled from '../style'
import NaturalImage from '../NaturalImage'

const variants = {
  hidden: {
    width: '100vw',
    background: '#f9ccc9',
  },
  visible: {
    width: '40vw',
    background: '#ffffff',
    transition: {
      duration: 2,
      delay: 1,
    },
  },
}

const titleVariants = {
  hidden: {
    rotateX: -90,
  },
  visible: {
    rotateX: 0,
    transition: {
      duration: 0.4,
      delay: 3,
    },
  },
}

const PlayBanner = () => {
  return (
    <Styled.PlayBanner variants={variants} initial="hidden" animate="visible">
      <div className="main-image-container">
        <div className="main-image-wrapper">
          <NaturalImage src="/img/banner3.png" alt="banner" />
          <motion.h1
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            dangerouslySetInnerHTML={{
              __html: '솔직히<br/>케이크크가<br/>제일 편하잖아요~',
            }}
          />
        </div>
      </div>
    </Styled.PlayBanner>
  )
}

export default PlayBanner
