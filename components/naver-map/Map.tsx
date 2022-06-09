import React, { useEffect, useRef } from 'react'
import { useNaverMapDispatch, useNaverMapState } from '../../context'

interface MapProps {
  lat: number
  lng: number
  children: React.ReactNode
}

const Map: React.FC<MapProps> = ({ lat, lng, children }) => {
  const mapRef = useRef<HTMLDivElement>(null)

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
      zoom: 18,
    }
    const map = new window.naver.maps.Map('map', mapOptions)

    dispatch({ type: 'SET_MAP', NaverMap: map })
  }, [mapRef])

  // useEffect(() => {
  //   console.log('??????')
  //   if (state.NaverMap !== undefined) {
  //     state.NaverMap.panTo(new naver.maps.LatLng(lat, lng), {
  //       duration: 2,
  //       easing: 'easeOutCubic',
  //     })
  //   }
  // }, [lat, lng])

  return (
    <>
      <div id="map" ref={mapRef} style={mapStyle}></div>
      {state.NaverMap && <>{children}</>}
    </>
  )
}

export default Map
