import React, { useEffect } from 'react'

interface MapInterface {
  lat: number
  lng: number
}
const MapContainer: React.FC<MapInterface> = ({ lat, lng }) => {
  useEffect(() => {
    const mapScript = document.createElement('script')

    mapScript.async = true
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`

    document.head.appendChild(mapScript)

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map')
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        }
        const map = new window.kakao.maps.Map(container, options)
        const markerPosition = new window.kakao.maps.LatLng(
          33.450701,
          126.570667
        )
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        })
        marker.setMap(map)
      })
    }
    mapScript.addEventListener('load', onLoadKakaoMap)

    return () => mapScript.removeEventListener('load', onLoadKakaoMap)
  }, [lat, lng])

  return (
    <div
      id="map"
      style={{
        aspectRatio: '320/220',
        border: '1px solid black',
        width: '806px',
        height: '187px',
      }}
    ></div>
  )
}
export default MapContainer
