import styled from '@emotion/styled'

export const MoreInfoContainer = styled.div`
  //TODO: More Info styling goes here.
  .title-wrapper {
    counter-increment: title;

    display: flex;
    align-items: center;

    .bulletpoint {
      position: relative;
      background-color: ${({ theme }) => theme.colors.borderColor};
      color: ${({ theme }) => theme.colors.primary};

      width: 40px;
      height: 40px;
      border-radius: 50%;

      &:before {
        content: '0' counter(title);
        position: absolute;
        font-weight: 700;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    h1,
    h2,
    h3 {
      margin: 0;
      margin-left: 1rem;
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  .content-wrapper {
    display: flex;
    position: relative;
    padding: 0.6rem 1rem;

    .timeline {
      position: absolute;
      transform: translateX(-50%);
      top: 0;
      left: 20px;
      height: 100%;
      background-color: ${({ theme }) => theme.colors.borderColor};
      width: 4px;
    }
    .content {
      margin-left: 2.4rem;
    }
    p {
      margin: 0;
    }

    ul {
      margin: 0;
      padding: 0 1.2rem;
    }
  }
`
