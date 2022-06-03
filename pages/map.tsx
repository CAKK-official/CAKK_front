import React, { useEffect, useRef } from 'react'

const MapPage = () => {
  const mapRef = useRef<HTMLElement | null | any>(null)

  const mapStyle = {
    width: '80%',
    height: '600px',
  }

  useEffect(() => {
    const mapOptions = {
      center: new window.naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10,
    }
    mapRef.current = new window.naver.maps.Map('map', mapOptions)
  }, [mapRef])

  return (
    <div id="map" ref={mapRef} style={mapStyle}>
      map
    </div>
  )
}

export default MapPage
