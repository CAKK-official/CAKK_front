import styled from '@emotion/styled'

type MapSearchMenu = {
  menu: boolean
}

export const MapSearchMenu = styled.div<MapSearchMenu>`
  left: ${(props) => (props.menu ? 0 : '-30vw')};
  z-index: 9;
  position: absolute;
  height: 100%;
  width: 30vw;
  background-color: #fff9;
  border-radius: 0 1rem 1rem 0;
  transition: left 0.3s ease-in-out;
  box-shadow: 0px 3px 22px rgba(0, 0, 0, 0.2);

  * {
    opacity: 1;
  }
`

export const MenuButton = styled.button<MapSearchMenu>`
  position: absolute;
  top: 0;
  z-index: 9;
  margin: 1rem;
  left: ${(props) => (props.menu ? '30vw' : 0)};
  transition: left 0.3s ease-in-out;
  border: none;
  box-shadow: 0px 3px 22px rgba(112, 0, 0, 0.2);
  width: 40px;
  height: 40px;
  border-radius: 20px;
`

export const Map = styled.div`
  width: 100vw;
  height: calc(100vh - var(--total-header-height));
`
