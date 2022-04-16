import styled from '@emotion/styled'

export const ItemSwiperContainer = styled.div`
  margin-top: 20px;

  height: 300px;

  .swiper {
    width: ${({ theme }) => theme.screen.main};
    height: 100%;
  }

  .swiper-wrapper {
    height: 100%;
  }

  .swiper-slide {
    /* width: 200px;
    height: 200px; */

    .slide {
      border-radius: 1rem;
    }
  }
`

export const ItemGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 15px;
  * {
    height: 150px;
    border-radius: 1rem;
  }
`
