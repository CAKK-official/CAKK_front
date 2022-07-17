import React from 'react'
import ClipBoard from '../clipBoard/ClipBoard'
import styled from '@emotion/styled'
import Icon from '../../icon'
import { SVGIconType } from '../../icon/Icon'
import theme from '../../../assets/theme/theme'

interface InfoBoxInterface {
  title: string
  sub: string
  canCopy?: boolean
  iconName: SVGIconType
}
const InfoBox: React.FC<InfoBoxInterface> = ({
  iconName,
  title,
  sub,
  canCopy,
}) => {
  return (
    <InfoBoxDiv>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Icon
          name={iconName}
          width={24}
          height={24}
          color={theme.colors.gray.A80}
        />
        <div style={{ fontWeight: '800', fontSize: '14px' }}>{title}</div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '12px',
        }}
      >
        <div>{sub ? sub : '정보가 없습니다'}</div>
      </div>
      {canCopy ? <ClipBoard content={sub} /> : ''}
    </InfoBoxDiv>
  )
}
const InfoBoxDiv = styled.div`
  position: relative;
  background: #ffffff;
  padding-top: 20px;
  padding-left: 24px;
  padding-right: 24px;
  width: 287px;
  height: 200px;
  border-radius: 15px;
  margin: 0px 10px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: #707070;
  &:hover {
    border: 1px solid #000000;
  }
`
export default InfoBox
