import Image from 'next/image'
import React from 'react'
import NaturalImage from './NaturalImage'

interface DetailToyItem {
  mainImage: string
  heading: string
  data: ToySubItemProps[]
}

type ToySubItemProps = {
  id: number
  image: string
  submain: string
  main: string
  tags: string
}

const DetailToyItem: React.FC<DetailToyItem> = ({
  mainImage,
  heading,
  data,
}) => {
  return (
    <div className="item-container">
      <NaturalImage src={mainImage} alt="img" />
      <div className="info-container">
        <h2 dangerouslySetInnerHTML={{ __html: `${heading}` }} />
        {data.map((item: ToySubItemProps) => (
          <div key={item.id} className="content-wrapper">
            <div className="image-wrapper">
              <Image
                src={item.image}
                alt="img"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="description-wrapper">
              {/* description */}
              <h3 className="sub-main">{item.submain}</h3>
              <h2 className="main">{item.main}</h2>
              <h4 className="tags">{item.tags}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DetailToyItem
