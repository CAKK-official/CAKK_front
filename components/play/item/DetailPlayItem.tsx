import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NaturalImage from '../NaturalImage'
import * as Styled from '../style'

interface DetailPlayItem {
  mainImage: string
  heading: string
  data: PlaySubItemProps[]
  link?: string
}

type PlaySubItemProps = {
  id: number
  image: string
  submain: string
  main: string
  tags: string
}

const DetailPlayItem: React.FC<DetailPlayItem> = ({
  mainImage,
  heading,
  data,
  link,
}) => {
  return (
    <>
      {link ? (
        <Link href={link}>
          <Styled.DetailPlayItem link={true}>
            <NaturalImage src={mainImage} alt="img" />
            <div className="info-container">
              <h2 dangerouslySetInnerHTML={{ __html: `${heading}` }} />
              {data.map((item: PlaySubItemProps) => (
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
          </Styled.DetailPlayItem>
        </Link>
      ) : (
        <Styled.DetailPlayItem>
          <NaturalImage src={mainImage} alt="img" />
          <div className="info-container">
            <h2 dangerouslySetInnerHTML={{ __html: `${heading}` }} />
            {data.map((item: PlaySubItemProps) => (
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
        </Styled.DetailPlayItem>
      )}
    </>
  )
}

export default DetailPlayItem
