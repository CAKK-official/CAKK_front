import React, { useEffect, useRef, useState } from 'react'
import {
  NaverMapProvider,
  useNaverMapDispatch,
  useNaverMapState,
} from '../../context'

interface MapProps {
  lat: number
  lng: number
  children: React.ReactNode
}

const Map: React.FC<MapProps> = ({ lat, lng, children }) => {
  const mapRef = useRef<HTMLDivElement>(null)
  // const [map, setMap] = useState<naver.maps.Map>()
  const state = useNaverMapState()
  const dispatch = useNaverMapDispatch()

  const mapStyle = {
    width: '100vw',
    height: '100vh',
  }

  useEffect(() => {
    const MapContainer = mapRef.current

    if (!MapContainer) {
      return
    }
    const mapOptions = {
      center: new window.naver.maps.LatLng(lat, lng),
      zoom: 10,
    }
    const map = new window.naver.maps.Map('map', mapOptions)

    dispatch({ type: 'SET_MAP', NaverMap: map })
    // new window.naver.maps.Marker({
    //   position: new window.naver.maps.LatLng(37.0, 127.105399),
    //   map: mapRef.current,
    // })
  }, [mapRef])

  return (
    <>
      <div id="map" ref={mapRef} style={mapStyle}></div>
      {state.NaverMap && <>{children}</>}
    </>
  )
}

export default Map
