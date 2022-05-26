import React from 'react'
import NaturalImage from './NaturalImage'

interface ToyProps {
  mainImage: string
  heading: string
}

const ImageToyItem: React.FC<ToyProps> = ({ mainImage, heading }) => {
  return (
    <div className="item-container">
      <NaturalImage src={mainImage} alt="img" />
      <h2 dangerouslySetInnerHTML={{ __html: `${heading}` }} />
    </div>
  )
}

export default ImageToyItem
