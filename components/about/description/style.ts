import styled from '@emotion/styled'

export const DescriptionContainer = styled.div`
  background-color: skyblue;
  padding: 4rem 0;

  .description-wrapper {
    margin: auto;
    width: ${({ theme }) => theme.screen.main};
    .data-wrapper {
      padding: 1rem 0;
      display: flex;
      .detail-wrapper {
        display: inline-block;
        width: 50%;

        // Big title
        h2 {
          background-color: pink;
        }
      }
    }
  }
`
