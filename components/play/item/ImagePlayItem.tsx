import Link from 'next/link'
import React from 'react'
import NaturalImage from '../NaturalImage'
import * as Styled from '../style'

interface PlayProps {
  mainImage: string
  heading: string
  link?: string
}

const ImagePlayItem: React.FC<PlayProps> = ({ mainImage, heading, link }) => {
  return (
    <>
      {link ? (
        <Link href={link}>
          <Styled.ImagePlayItem link={true}>
            <NaturalImage src={mainImage} alt="img" />
            <h2 dangerouslySetInnerHTML={{ __html: `${heading}` }} />
          </Styled.ImagePlayItem>
        </Link>
      ) : (
        <Styled.ImagePlayItem>
          <NaturalImage src={mainImage} alt="img" />
          <h2 dangerouslySetInnerHTML={{ __html: `${heading}` }} />
        </Styled.ImagePlayItem>
      )}
    </>
  )
}

export default ImagePlayItem
