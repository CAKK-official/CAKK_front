import React from 'react'
import { useNaverMapState, useNaverMapDispatch } from '../../context'
import Icon from '../icon'
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
        <Icon name="icon_direction_right_fill" width={6} height={6} />
      </S.MenuButton>
      <S.MapSearchMenu menu={menu}>{children}</S.MapSearchMenu>
    </>
  )
}

export default MapSearchMenu
