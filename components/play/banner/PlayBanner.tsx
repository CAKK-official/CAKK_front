import React from 'react'
import { motion } from 'framer-motion'
import * as Styled from '../style'
import NaturalImage from '../NaturalImage'

const variants = {
  hidden: {
    y: '-100%',
  },
  visible: {
    width: '50vw',
    y: '0%',
    transition: {
      width: {
        duration: 0,
      },
      y: {
        duration: 1,
      },
    },
  },
}

const PlayBanner = () => {
  return (
    <Styled.PlayBanner variants={variants} initial="hidden" animate="visible">
      <div className="main-image-container">
        <div className="main-image-wrapper">
          <NaturalImage src="/img/banner4.png" alt="banner" />
        </div>
      </div>
    </Styled.PlayBanner>
  )
}

export default PlayBanner
