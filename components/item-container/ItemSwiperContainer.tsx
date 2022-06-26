//DEPRECATED
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import * as Styled from './style'

export interface ItemInterface {
  //TODO: update props, fetched data
  count: number
  items: string[]
}

const ItemSwiperContainer: React.FC<ItemInterface> = ({ count, items }) => {
  return (
    <Styled.ItemSwiperContainer>
      <Swiper
        spaceBetween={50}
        slidesPerView={count}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {items.map((item: string, index: number) => (
          <SwiperSlide key={index}>
            <div className="slide">
              <Image src={item} alt="img" layout="fill" objectFit="cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Styled.ItemSwiperContainer>
  )
}

export default ItemSwiperContainer
