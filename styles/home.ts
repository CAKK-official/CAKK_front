import styled from '@emotion/styled'

export const Home = styled.main`
  position: relative;
  margin: auto;
  font-size: 0.875rem;

  .search-container {
    background-color: ${({ theme }) => theme.colors.gray.A20};
  }

  .result-container {
    width: ${({ theme }) => theme.screen.main};
    margin: auto;
  }
`
