import Image from 'next/image'
import { useState } from 'react'

const NaturalImage = ({ src, alt }: { src: string; alt: string }) => {
  const [ratio, setRatio] = useState(1)

  return (
    <Image
      src={src}
      alt={alt}
      width={500}
      height={500 / ratio}
      layout="responsive" // you can use "responsive", "fill" or the default "intrinsic"
      onLoadingComplete={({ naturalWidth, naturalHeight }) =>
        setRatio(naturalWidth / naturalHeight)
      }
    />
  )
}

export default NaturalImage
