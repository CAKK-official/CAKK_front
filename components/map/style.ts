import styled from '@emotion/styled'

type MapSearchMenu = {
  menu: boolean
}

export const MapView = styled.div`
  display: flex;
  position: relative;
`

export const MapSearchMenu = styled.div<MapSearchMenu>`
  left: ${(props) => (props.menu ? 0 : '-460px')};
  z-index: 9;
  position: absolute;
  height: 100%;
  width: 460px;
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  transition: left 0.3s ease-in-out;
  box-shadow: 0px 3px 22px rgba(0, 0, 0, 0.2);
`

export const MenuButton = styled.button<MapSearchMenu>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  top: 0;
  padding: 0;
  z-index: 10;
  /* margin: 1rem; */
  margin-left: 6px;
  margin-top: 20px;

  width: 30px;
  height: 30px;
  border-radius: 15px;

  left: ${(props) => (props.menu ? '460px' : 0)};
  transition: all 0.3s ease-in-out;
  border: none;
  box-shadow: 0px 3px 22px rgba(0, 0, 0, 0.2);
  background-color: #fff;

  cursor: pointer;

  svg {
    transform: ${(props) => (props.menu ? 'rotateZ(180deg)' : 'rotateZ(0)')};
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.red};
  }
`

export const Map = styled.div`
  width: 100vw;
  height: calc(100vh - var(--total-header-height));

  /* Info Window */
  #info-window-container {
    /* padding: 1rem; */
    padding: 8px;
    h1,
    h2,
    h3 {
      padding: 0;
      margin: 0;
      /* margin-bottom: 8px; */
    }
    span {
      margin: 8px 0;
      white-space: nowrap;
    }
  }
`
