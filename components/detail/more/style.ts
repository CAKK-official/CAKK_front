import styled from '@emotion/styled'

export const MoreInfoContainer = styled.div`
  //TODO: More Info styling goes here.
  .title-wrapper {
    counter-increment: title;

    display: flex;
    align-items: center;

    .bulletpoint {
      position: relative;
      background-color: ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.white};

      width: 96px;
      height: 30px;
      border-radius: 15px;

      &:before {
        content: 'step 0' counter(title);
        position: absolute;
        font-weight: 800;
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
      color: ${({ theme }) => theme.colors.black};
    }
  }

  .content-wrapper {
    display: flex;
    position: relative;
    flex-direction: column;
    padding: 0.6rem 1rem;

    .content {
      margin-left: 96px;
      white-space: pre-line;
      line-height: 1.25rem;
      word-break: keep-all;
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
