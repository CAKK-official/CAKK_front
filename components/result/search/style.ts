import styled from '@emotion/styled'

export const SeacrhContainer = styled.div`
  /* margin: 2rem 0; */
  margin: auto;
  width: ${({ theme }) => theme.screen.main};

  /* height: 3.25rem; */

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    width: ${({ theme }) => theme.screen.main};
    padding: 2rem 0 1rem 0;
  }

  .select-wrapper {
    background-color: #f6f6f6;
    /* margin: 3rem 0; */
    padding: 0rem 1rem;
    width: 100%;

    .select-items {
      display: flex;
      min-height: 100px;
      margin: 1rem 0;

      .item-title {
        min-width: 140px;

        h3 {
          margin: 8px 0;

          &.category-title {
            margin: 1rem 0;
          }
        }
      }

      // Location service
      .select-container {
        width: 100%;

        select {
          border: none;
          border-radius: 12px;
          padding: 0.75rem 1rem;
          box-shadow: 0px 3px 30px rgba(164, 164, 164, 0.15);
          font-size: 1rem;

          option {
            background: black;
          }
        }
        select::after {
          content: '▾';
          display: block;
          margin: 0 0 0 8px;
        }
      }
    }
  }
`

export const ChipContainer = styled.div`
  /* margin-top: 1rem; */
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  white-space: initial;
  list-style-type: none;

  .chip-item {
    width: 20%;
  }
`
