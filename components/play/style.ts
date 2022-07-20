import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const PlayBanner = styled(motion.div)`
  width: 50vw;
  border: 1px solid ${({ theme }) => theme.colors.black};
  background-color: #fffcec;
  .main-image-container {
    margin: 0 4vw;
    position: sticky;
    top: 80px;

    .main-image-wrapper {
      position: relative;

      h1 {
        position: absolute;
        top: 0;
        left: 20px;
      }
    }
  }
`

export const DetailPlayItem = styled.div<{ link?: boolean }>`
  padding: 1.2rem;
  border: 1px solid ${({ theme }) => theme.colors.black};
  margin: 0;
  display: grid;
  /* grid-template-rows: 1fr auto; */
  break-inside: avoid;
  font-size: 0.875rem;

  cursor: ${({ link }) => link && 'pointer'};

  .info-container {
    .content-wrapper {
      display: flex;
      align-items: center;
      margin: 20px 0;
      font-size: 0.875rem;

      .image-wrapper {
        background-color: greenyellow;
        width: 100px;
        min-width: 100px;
        height: 100px;
        position: relative;
        border-radius: ;
      }

      .description-wrapper {
        margin-left: 20px;
        * {
          margin: 0;
          padding: 0;
        }

        .tags {
          margin: 0;
          margin-top: 0.5rem;
        }
      }
    }
  }
`

export const ImagePlayItem = styled.div<{ link?: boolean }>`
  padding: 1.2rem;
  border: 1px solid ${({ theme }) => theme.colors.black};
  margin: 0;
  cursor: ${({ link }) => link && 'pointer'};
  font-size: 0.7rem;
`

export const AnimatePlayItem = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.black};
  padding: 1.2rem;
  overflow: hidden;

  .animation-container {
    flex-direction: column;
    font-size: 28px;
    font-weight: 900;
    width: 320px;
    .black {
      overflow: hidden;
      color: #000;
      white-space: nowrap;
    }
    .pink {
      display: flex;
      overflow: hidden;
      height: 2.4rem;
      color: ${({ theme }) => theme.colors.red};
      position: relative;

      .pink-text {
        margin: 0;
        top: 0;
        left: 100%;
        width: 100%;
        position: absolute;
        white-space: nowrap;
        animation: cakktext 5s linear infinite;
      }

      .pink-text-2 {
        animation-delay: 2.5s;
      }

      @keyframes cakktext {
        0% {
          left: 310px;
        }
        100% {
          left: -310px;
        }
      }
    }
  }
`

export const MainPlayItem = styled.div`
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.black};
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

export const SubPlayItem1 = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.black};
  position: relative;
  padding: 1rem;
  cursor: pointer;

  .title {
    margin: 0;
    padding: 0;
  }

  .subtitle {
    margin: 2rem 0 1rem 0;
    position: relative;
    width: 100%;

    text-align: right;
    font-size: 0.875rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.black};
  }
`
export const SubPlayItem2 = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.black};
  position: relative;
  padding: 1rem;
  cursor: pointer;

  .title {
    margin: 0;
    padding: 0;
  }

  .wow {
    width: 100%;
    text-align: right;
    animation: wow 3s infinite;
  }

  .subtitle {
    margin: 2rem 0 1rem 0;
    position: relative;
    width: 100%;

    text-align: center;
    font-size: 1.25rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.black};
  }

  &:hover {
    .wow {
      animation: wowow 0.2s infinite;
    }
  }

  @keyframes wow {
    0% {
      color: ${(props) => props.theme.colors.pink.A50};
    }
    25% {
      color: ${(props) => props.theme.colors.pink.A80};
    }
    50% {
      color: ${(props) => props.theme.colors.red};
    }
    75% {
      color: ${(props) => props.theme.colors.pink.A80};
    }
    100% {
      color: ${(props) => props.theme.colors.pink.A50};
    }
  }
  @keyframes wowow {
    0% {
      color: green;
    }
    25% {
      color: blue;
    }
    50% {
      color: ${(props) => props.theme.colors.red};
    }
    75% {
      color: yellow;
    }
    100% {
      color: orange;
    }
  }
`
