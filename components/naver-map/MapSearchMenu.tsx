import React from 'react'
import { useNaverMapState, useNaverMapDispatch } from '../../context'
import * as S from './style'

const MapSearchMenu: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { menu } = useNaverMapState()
  const dispatch = useNaverMapDispatch()
  return (
    <>
      <S.MenuButton
        menu={menu}
        onClick={() => dispatch({ type: 'TOGGLE_MENU' })}
      >
        +
      </S.MenuButton>
      <S.MapSearchMenu menu={menu}>{children}</S.MapSearchMenu>
    </>
  )
}

export default MapSearchMenu
