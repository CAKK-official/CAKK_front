import React from 'react'
import NaturalImage from './NaturalImage'
import * as Styled from './style'

interface PlayProps {
  mainImage: string
  heading: string
}

const ImagePlayItem: React.FC<PlayProps> = ({ mainImage, heading }) => {
  return (
    <Styled.ImagePlayItem>
      <NaturalImage src={mainImage} alt="img" />
      <h2 dangerouslySetInnerHTML={{ __html: `${heading}` }} />
    </Styled.ImagePlayItem>
  )
}

export default ImagePlayItem
