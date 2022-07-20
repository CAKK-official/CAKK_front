import styled from '@emotion/styled'

type ChipProps = {
  primary: boolean
}

export const SearchContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  padding: 1rem;

  span {
    margin-right: 3rem;
  }
  input {
    display: none;
  }

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

      // Location service
      .select-container {
        width: 100%;
      }
    }
  }
`

export const ChipContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  white-space: initial;
  list-style-type: none;

  .chip-item {
    width: 20%;
    display: flex;
    justify-content: center;
  }
`

export const Button = styled.div<ChipProps>`
  margin: 0.4rem;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: none;
  box-shadow: 0px 3px 30px rgba(164, 164, 164, 0.15);
  bacgkround-color: white;
  opacity: 1;

  border: 1px solid ${(props) => (props.primary ? '#e72d3f' : 'white')};
  background-color: ${(props) => (props.primary ? '#FEF6F4' : 'white')};
`

// ---------------------------------------------

export const MarketContainer = styled.div`
  overflow: scroll;

  .empty-store {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    animation: color-change 1.4s infinite;
  }

  @keyframes color-change {
    0% {
      color: ${(props) => props.theme.colors.pink.A50};
    }
    25% {
      color: ${(props) => props.theme.colors.pink.A80};
    }
    50% {
      color: ${(props) => props.theme.colors.red};
    }
    75% {
      color: ${(props) => props.theme.colors.pink.A80};
    }
    100% {
      color: ${(props) => props.theme.colors.pink.A50};
    }
  }
`

export const MarketItem = styled.div`
  padding: 2rem;
  border-bottom: 1px solid #ddd;
  cursor: pointer;

  .image-container {
    .image-list {
      margin: 0;
      padding: 0;
      position: relative;
      display: flex;

      .image-item {
        width: 100%;
        list-style-type: none;
        /* height: 300px; */
        padding: 2px;

        img {
          border-radius: 4px;
        }
      }
    }
  }

  .info-container {
    h2 {
      margin: 12px 0 8px 0;
    }
  }
`
