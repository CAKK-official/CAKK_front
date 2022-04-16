import styled from '@emotion/styled'

export const BannerContainer = styled.div`
  margin-top: 20px;

  height: 350px;

  .swiper {
    width: ${({ theme }) => theme.screen.main};
    height: 100%;
  }

  .swiper-wrapper {
    height: 100%;
  }

  .swiper-slide {
    height: 100%;

    .slide {
      border-radius: 1rem;
    }
  }
`
