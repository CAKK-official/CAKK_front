import styled from '@emotion/styled'

export const SeacrhContainer = styled.div`
  margin: 2rem 0;
  width: ${({ theme }) => theme.screen.main};
  /* height: 3.25rem; */

  display: flex;
  align-items: center;
  justify-content: center;

  .select-wrapper {
    background-color: #f6f6f6;
    border-radius: 10px;
    margin: 3rem 0;
    padding: 2rem 2rem;
    width: 100%;

    .select-items {
      display: flex;
      min-height: 100px;
      margin: 1rem 0;

      .item-title {
        min-width: 200px;

        h3 {
          margin: 8px 12px;
        }
        /* 
        & > * {
          flex: 1 1 auto;
        } */
      }

      // Location service
      .select-container {
        width: 100%;
      }
    }
  }
`

export const ChipContainer = styled.div`
  /* background-color: green; */
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  white-space: initial;
  list-style-type: none;

  .chip-item {
    width: 20%;
  }
`
