import styled from '@emotion/styled'

export const CarouselContainer = styled.section`
  position: relative;
  display: flex;
  background-color: green;
  height: 40px;
  overflow: hidden;

  .slider {
    display: flex;
    width: calc(300px * 10);
    animation: scroll 18s linear infinite;

    .image-container {
      background-color: ${({ theme }) => theme.colors.deepblack};
      position: relative;
      width: 300px;
      height: 40px;
    }
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-300px * 5));
    }
  }
`
