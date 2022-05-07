import React from 'react'
import ClipBoard from '../clipBoard/ClipBoard'

//TODO : 복사여부추가
interface InfoBoxInterface {
  title: string
  sub: string
  canCopy?: boolean
}
const InfoBox: React.FC<InfoBoxInterface> = ({ title, sub, canCopy }) => {
  return (
    <div style={{ border: '1px solid gray', margin: '0px 10px' }}>
      <div>{title}</div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>{sub}</div>
        {canCopy ? <ClipBoard content={sub} /> : ''}
      </div>
    </div>
  )
}
export default InfoBox
