import React, { useEffect } from 'react'
import {
  NaverMapProvider,
  useNaverMapDispatch,
  useNaverMapState,
} from '../../context'

interface MarkerProps {
  lat: number
  lng: number
  children: React.ReactNode
}

const Marker: React.FC<MarkerProps> = ({ lat, lng, children }) => {
  const { NaverMap } = useNaverMapState()
  console.log('marker')

  useEffect(() => {
    console.log('Naver Map ==> ', NaverMap)
    new window.naver.maps.Marker({
      position: new window.naver.maps.LatLng(lat, lng),
      map: NaverMap,
    })
  }, [NaverMap])

  return <div>{children}</div>
}

export default Marker
