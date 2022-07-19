import React, { useEffect, useRef } from 'react'
import { useKakaoMapDispatch, useKakaoMapState } from '../../context'
import * as S from './style'

interface MapProps {
  lat: number
  lng: number
  children: React.ReactNode
}

const Map: React.FC<MapProps> = ({ lat, lng, children }) => {
  const state = useKakaoMapState()
  const dispatch = useKakaoMapDispatch()

  const mapRef = useRef<HTMLDivElement>(null)
  // ADD APIKEY
  useEffect(() => {
    const mapScript = document.createElement('script')

    mapScript.async = true
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`

    document.head.appendChild(mapScript)

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        if (mapRef) {
          const container = mapRef.current
          const options = {
            center: new window.kakao.maps.LatLng(lat, lng),
          }
          const map = new window.kakao.maps.Map(container, options)

          dispatch({ type: 'SET_MAP', KakaoMap: map })
        }
      })
    }
    mapScript.addEventListener('load', onLoadKakaoMap)

    return () => mapScript.removeEventListener('load', onLoadKakaoMap)
  }, [mapRef])

  return (
    <>
      <S.Map id="map" ref={mapRef}></S.Map>
      {state.KakaoMap && <>{children}</>}
    </>
  )
}

export default Map
