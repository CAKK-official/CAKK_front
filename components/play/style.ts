import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const PlayBanner = styled(motion.div)`
  border: 1px solid #000;
`

export const DetailPlayItem = styled.div`
  padding: 1.2rem;
  border: 1px solid #000;
  margin: 0;
  display: grid;
  /* grid-template-rows: 1fr auto; */
  break-inside: avoid;

  .info-container {
    .content-wrapper {
      display: flex;
      align-items: center;

      .image-wrapper {
        background-color: greenyellow;
        width: 120px;
        height: 120px;
        position: relative;
      }

      .description-wrapper {
        background-color: aliceblue;
        * {
          margin: 0;
          padding: 0;
        }

        .tags {
          margin: 0;
          margin-top: 1rem;
        }
      }
    }
  }
`

export const ImagePlayItem = styled.div`
  padding: 1.2rem;
  border: 1px solid #000;
  margin: 0;
`

export const AnimatePlayItem = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid #000;
  padding: 1.2rem;
  .animation-container {
    flex-direction: column;
    font-size: 1.9rem;
    font-weight: 700;
    width: 320px;
    .black {
      overflow: hidden;
      color: #000;
    }
    .pink {
      display: flex;
      overflow: hidden;
      height: 2.4rem;
      color: ${({ theme }) => theme.colors.pink.A80};

      position: relative;

      .pink-text {
        margin: 0;
        top: 0;
        left: 100%;
        width: 100%;
        /* overflow: hidden; */
        position: absolute;
        white-space: nowrap;
        animation: cakktext 10s linear infinite;
      }

      .pink-text-2 {
        animation-delay: 5s;
      }

      @keyframes cakktext {
        0% {
          left: 100%;
        }
        100% {
          left: -100%;
        }
      }
    }
  }
`

export const MainPlayItem = styled.div`
  justify-content: center;
  border: 1px solid #000;
  padding: 1.2rem;

  h1 {
    margin-bottom: 4rem;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
  }
`

export const PlayGrid = styled.div`
  /* background-color: dodgerblue; */
  width: 60%;
  height: 100%;
  position: relative;
  padding: 0;
  column-count: 2;
  column-gap: 0;

  .grid-container {
    .item-container {
      padding: 1.2rem;
      border: 1px solid ${({ theme }) => theme.colors.gray.A50};
      margin: 0;
      display: grid;
      /* grid-template-rows: 1fr auto; */
      break-inside: avoid;

      .info-container {
        .content-wrapper {
          display: flex;
          align-items: center;

          .image-wrapper {
            background-color: greenyellow;
            width: 120px;
            height: 120px;
            position: relative;
          }

          .description-wrapper {
            background-color: aliceblue;
            * {
              margin: 0;
              padding: 0;
            }

            .tags {
              margin: 0;
              margin-top: 1rem;
            }
          }
        }
      }

      .animation-container {
        display: flex;
        flex-direction: column;
        font-size: 1.9rem;
        font-weight: 700;
        width: 320px;
        .black {
          overflow: hidden;
          color: #000;
        }
        .pink {
          display: flex;
          overflow: hidden;
          height: 2.4rem;
          color: ${({ theme }) => theme.colors.pink.A80};

          position: relative;

          .pink-text {
            margin: 0;
            top: 0;
            left: 100%;
            width: 100%;
            /* overflow: hidden; */
            position: absolute;
            white-space: nowrap;
            animation: cakktext 10s linear infinite;
          }

          .pink-text-2 {
            animation-delay: 5s;
          }

          @keyframes cakktext {
            0% {
              left: 100%;
            }
            100% {
              left: -100%;
            }
          }
        }
      }
    }

    .center-container {
      display: flex;
      justify-content: center;
    }
  }
`
