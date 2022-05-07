import React from 'react'
import ClipBoard from '../clipBoard/ClipBoard'
import styled from '@emotion/styled'

//TODO : 복사여부추가
interface InfoBoxInterface {
  title: string
  sub: string
  canCopy?: boolean
}
const InfoBox: React.FC<InfoBoxInterface> = ({ title, sub, canCopy }) => {
  return (
    <InfoBoxDiv>
      <div>{title}</div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>{sub}</div>
        {canCopy ? <ClipBoard content={sub} /> : ''}
      </div>
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
