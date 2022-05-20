import React from 'react'
import ClipBoard from '../clipBoard/ClipBoard'
import styled from '@emotion/styled'
import { IconInterface } from '../../icon/Icon'

//TODO : 복사여부추가
interface InfoBoxInterface {
  title: string
  sub: string
  canCopy?: boolean
  Icon: React.FC<IconInterface>
}
const InfoBox: React.FC<InfoBoxInterface> = ({ Icon, title, sub, canCopy }) => {
  return (
    <InfoBoxDiv>
      <div>{Icon}</div>
      <div>{title}</div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>{sub}</div>
        {canCopy ? <ClipBoard content={sub} /> : ''}
      </div>
    </InfoBoxDiv>
  )
}
const InfoBoxDiv = styled.div`
  padding-top: 20px;
  padding-left: 24px;
  box-shadow: 0px 3px 22px rgba(112, 0, 0, 0.08);
  width: 287px;
  height: 148px;
  border-radius: 15px;
  border: 1px solid gray;
  margin: 0px 10px;
`
export default InfoBox
