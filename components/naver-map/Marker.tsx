import React, { useEffect, useMemo, useState } from 'react'
import {
  NaverMapProvider,
  useNaverMapDispatch,
  useNaverMapState,
} from '../../context'
import InfoWindow from './InfoWindow'

interface MarkerProps {
  lat: number
  lng: number
  children: React.ReactNode
}

const Marker: React.FC<MarkerProps> = ({ lat, lng, children }) => {
  const [infoWindowOpen, setInfoWindowOpen] = useState<boolean>(false)

  const { NaverMap } = useNaverMapState()

  const marker = useMemo(() => {
    return new naver.maps.Marker({
      position: new naver.maps.LatLng(lat, lng),
      map: NaverMap,
    })
  }, [])

  useEffect(() => {
    naver.maps.Event.addListener(marker, 'mouseover', () =>
      setInfoWindowOpen(true)
    )
    naver.maps.Event.addListener(marker, 'mouseout', () =>
      setInfoWindowOpen(false)
    )

    // return () => {
    //   naver.maps.Event.removeListener(() => setInfoWindowOpen(true))
    //   naver.maps.Event.removeListener(() => setInfoWindowOpen(false))
    // }
  }, [])

  useEffect(() => {
    console.log('infoWindowOpen', infoWindowOpen)
  }, [infoWindowOpen])

  return (
    <>{children && <InfoWindow opened={infoWindowOpen} marker={marker} />}</>
  )
}

export default Marker
