import React from 'react'
import ClipBoard from '../clipBoard/ClipBoard'
import styled from '@emotion/styled'
import Icon from '../../icon'
import { SVGIconType } from '../../icon/Icon'

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
      <div>
        <Icon name={iconName} width={24} height={24} color="#E72E40" />
      </div>
      <div style={{ fontWeight: '600', fontSize: '14px' }}>{title}</div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>{sub}</div>
        {canCopy ? <ClipBoard content={sub} /> : ''}
      </div>
    </InfoBoxDiv>
  )
}
const InfoBoxDiv = styled.div`
  background: #ffffff;
  padding-top: 20px;
  padding-left: 24px;
  padding-right: 24px;
  box-shadow: 0px 3px 22px rgba(112, 0, 0, 0.08);
  width: 287px;
  height: 148px;
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
