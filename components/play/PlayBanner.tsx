import React from 'react'
import * as Styled from './style'
import NaturalImage from './NaturalImage'

const container = {
  hidden: { width: '100vw' },
  visible: {
    delay: 2,
    width: '100vw',
    // transition: {
    //   delayChildren: 0.3,
    //   staggerChildren: 0.2
    // }
  },
}

const PlayBanner = () => {
  return (
    <Styled.PlayBanner variants={container} initial="hidden" animate="visible">
      <div style={{ position: 'sticky', top: '80px' }}>
        {/* <div style={{ position: 'relative' }}>
          <NaturalImage src="/img/banner.png" alt="banner" />
          <h1
            dangerouslySetInnerHTML={{
              __html: '솔직히<br/>케이크크가<br/>제일 편하잖아요~',
            }}
          />
        </div> */}
      </div>
    </Styled.PlayBanner>
  )
}

export default PlayBanner
