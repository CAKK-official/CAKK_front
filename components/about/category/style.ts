import styled from '@emotion/styled'

export const CategoryContainer = styled.div`
  /* background-color: greenyellow; */
  position: relative;
  width: 100%;
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
  }

  .text-section {
    z-index: 2;
    margin: auto;
    width: ${({ theme }) => theme.screen.main};
  }
`
