import styled from '@emotion/styled'

export const SeacrhContainer = styled.div`
  background-color: lightgray;
  margin: 2rem auto;

  width: ${({ theme }) => theme.screen.main};
  height: 3.25rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;

  .search-wrapper {
    display: flex;
    align-items: center;
  }
`
