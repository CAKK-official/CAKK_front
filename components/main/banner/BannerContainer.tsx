import React from 'react'

// Import Swiper styles
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import * as Styled from './style'
import { css } from '@emotion/react'

const BannerContainer: React.FC = () => {
  // SwiperCore.use([Autoplay])

  return (
    <Styled.BannerContainer>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="slide">
            <div
              css={css`
                margin: 2rem 4rem;
              `}
            >
              <span>레터링케이크, 주문제작 케이크, 찾기 어려우셨죠?</span>
              <h1>
                이제 케이크크에서 <br /> 쉽게 찾아보세요!
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slide"
            css={css`
              background-color: #aaffdd;
              height: 100%;
              display: flex;
              align-items: center;
            `}
          >
            <div
              css={css`
                margin: 2rem 4rem;
              `}
            >
              <span>레터링케이크, 주문제작 케이크, 찾기 어려우셨죠?</span>
              <h1>
                이제 케이크크에서 <br /> 쉽게 찾아보세요!
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slide"
            css={css`
              background-color: #aaffdd;
              height: 100%;
              display: flex;
              align-items: center;
            `}
          >
            <div
              css={css`
                margin: 2rem 4rem;
              `}
            >
              <span>레터링케이크, 주문제작 케이크, 찾기 어려우셨죠?</span>
              <h1>
                이제 케이크크에서 <br /> 쉽게 찾아보세요!
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slide"
            css={css`
              background-color: #aaffdd;
              height: 100%;
              display: flex;
              align-items: center;
            `}
          >
            <div
              css={css`
                margin: 2rem 4rem;
              `}
            >
              <span>레터링케이크, 주문제작 케이크, 찾기 어려우셨죠?</span>
              <h1>
                이제 케이크크에서 <br /> 쉽게 찾아보세요!
              </h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </Styled.BannerContainer>
  )
}

export default BannerContainer
