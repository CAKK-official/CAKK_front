import React from './node_modules/react'

interface MapInterface {
  latlng: Array<number>
}
const MapContainer: React.FC<MapInterface> = ({ latlng }) => {
  //TODO: 구글지도 추가
  return <div>지도입니당</div>
}
export default MapContainer
