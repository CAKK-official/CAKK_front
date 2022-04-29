import React from 'react'

//TODO : 복사여부추가
interface InfoBoxInterface {
  title: string
  sub: string
}
const InfoBox: React.FC<InfoBoxInterface> = ({ title, sub }) => {
  return (
    <div style={{ border: '1px solid gray', margin: '0px 10px' }}>
      <div>{title}</div>
      <div>{sub}</div>
    </div>
  )
}
export default InfoBox
