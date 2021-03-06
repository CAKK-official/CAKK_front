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
      height: 100%;
    }
  }
`

export const ItemGridContainer = styled.div<{ rows: number }>`
  display: flex;
  flex-wrap: wrap;

  .item-grid-item {
    width: ${(props) => 100 / props.rows}%;
    height: 100%;

    &:nth-of-type(3n + 1) {
      .item-container {
        margin-left: 0;
      }
    }
    &:nth-of-type(3n) {
      .item-container {
        margin-right: 0;
      }
    }

    .item-container {
      position: relative;
      margin: 1rem;

      cursor: pointer;

      .image-container {
        width: 100%;
        height: 14rem;
        position: relative;

        .img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      }

      .information-container {
        padding: 1rem 0;
        display: flex;
        justify-content: space-between;

        .info-text-container {
          h4 {
            margin: 0;
            margin-bottom: 8px;
          }

          .info-address {
            height: 3rem;
            width: 100%;
            font-size: 0.9rem;
            word-break: keep-all;
          }
        }

        .button-container {
          display: flex;
          align-items: center;
          justify-content: center;

          button {
            background: none;
            border: none;

            * {
              cursor: pointer;
            }
          }
        }
      }

      .ranking {
        position: absolute;
        top: 0;
        left: 0;
        width: 2.5rem;
        height: 2.5rem;
        background-color: ${({ theme }) => theme.colors.pink.A50};
        color: ${({ theme }) => theme.colors.red};
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
      }
    }
  }
`
