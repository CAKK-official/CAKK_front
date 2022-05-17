import styled from '@emotion/styled'

export const BannerContainer = styled.div`
  margin-top: 20px;

  height: 350px;
  width: ${({ theme }) => theme.screen.main};


  .swiper {
    height: 100%;
  }
  .swiper-wrapper {
  }

  .swiper-slide {

  .slide {
    height: 100%;
    background-color: ${({ theme }) => theme.colors.pink.A50};
    display: flex;
    align-items: center;
    border-radius: 1rem;

    .slide-content {
      margin: 2rem 4rem;
    }
  }
`
