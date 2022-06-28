import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const ToyBanner = styled(motion.div)`
  background-color: #e45b31;
  /* height: 100%; */
  width: 40vw;
  img {
    position: absolute;
  }
  h1 {
    position: absolute;
    top: 0;
    background-color: white;
  }
`

export const ToyGrid = styled.div`
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
