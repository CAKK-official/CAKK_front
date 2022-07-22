import styled from '@emotion/styled'

export const LoadingComponent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .image-container {
    width: 12rem;
    height: 200px;
  }

  span {
    margin: 0.4rem 0;
  }

  // Loading Bar
  .progresser__bar {
    width: 12rem;
    height: 0.7rem;
    border-radius: 1rem;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.black};

    .progresser__bar-item {
      width: 6rem;
      height: 0.7rem;
      margin: 0 0 0 -4rem;
      border-radius: 1rem;
      background-image: linear-gradient(to right, hotpink, pink);
      animation: progresser 2s infinite cubic-bezier(0.76, 0, 0.24, 1);
    }
  }
  @keyframes progresser {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(14rem);
    }
    100% {
      transform: translateX(0);
    }
  }
`

export const LoadingView = styled.div`
  position: relative;
  /* background-color: pink; */
  width: 100%;
  height: calc(100vh - var(--total-header-height));
`
