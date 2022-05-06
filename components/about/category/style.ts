import styled from '@emotion/styled'

export const CategoryContainer = styled.section`
  /* background-color: greenyellow; */
  background-color: #fef6f4;
  position: relative;
  width: 100%;
  min-height: 30rem;

  display: flex;
  justify-content: center;
  align-items: center;

  .category-wrapper {
    padding: 4rem 1rem;
    width: 60.25rem;

    .category-button-wrapper {
      margin: 1rem;
      display: flex;
      flex-wrap: wrap;

      .category-item {
        width: calc(100% / 5);

        .category-item-wrapper {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          .category-image {
            background-color: pink;
            width: 6rem;
            height: 6rem;
            border-radius: 3rem;
          }

          .category-title {
            margin: 1rem;
          }
        }
      }
    }
  }
`
