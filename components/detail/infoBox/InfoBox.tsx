import React from 'react'
import styled from '@emotion/styled'

//TODO : 복사여부추가
interface InfoBoxInterface {
  title: string
  sub: string
}
const InfoBox: React.FC<InfoBoxInterface> = ({ title, sub }) => {
  return (
    <InfoBoxDiv>
      <div>{title}</div>
      <div>{sub}</div>
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
