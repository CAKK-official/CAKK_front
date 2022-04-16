import React from 'react'

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import * as Styled from './style'
import { css } from '@emotion/react'
const BannerContainer: React.FC = () => {
  return (
    <Styled.BannerContainer>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div
            className="slide"
            css={css`
              background-color: #aadddd;
              height: 100%;
            `}
          >
            Swiper Section
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slide"
            css={css`
              background-color: #aaafdd;
              height: 100%;
            `}
          >
            <span>레터링케이크, 주문제작 케이크, 찾기 어려우셨죠?</span>
            <h1>이제 케이크크에서, 쉽게 찾아보세요</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slide"
            css={css`
              background-color: #dd99dd;
              height: 100%;
            `}
          >
            Swiper Section
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slide"
            css={css`
              background-color: #99ddaa;
              height: 100%;
            `}
          >
            Swiper Section
          </div>
        </SwiperSlide>
      </Swiper>
    </Styled.BannerContainer>
  )
}

export default BannerContainer
