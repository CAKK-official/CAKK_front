import React, { useEffect, useRef } from 'react'
import {
  useNaverMapDispatch,
  useNaverMapState,
  useKakaoMapDispatch,
  useKakaoMapState,
} from '../../context'
import * as S from './style'

interface MapProps {
  lat: number
  lng: number
  children: React.ReactNode
}

const Map: React.FC<MapProps> = ({ lat, lng, children }) => {
  // const state = useNaverMapState()
  // const dispatch = useNaverMapDispatch()

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
          // const markerPosition = new window.kakao.maps.LatLng(lat, lng)
          // const marker = new window.kakao.maps.Marker({
          //   position: markerPosition,
          // })
          // marker.setMap(map)
          dispatch({ type: 'SET_MAP', KakaoMap: map })
        }
      })
    }
    mapScript.addEventListener('load', onLoadKakaoMap)

    return () => mapScript.removeEventListener('load', onLoadKakaoMap)
  }, [mapRef])

  console.log(state.KakaoMap)

  return (
    <>
      <S.Map id="map" ref={mapRef}></S.Map>
      {state.KakaoMap && <>{children}</>}
    </>
  )
}

export default Map

/**
 *  useEffect(() => {
    const mapScript = document.createElement('script')

    mapScript.async = true
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`

    document.head.appendChild(mapScript)

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map')
        const options = {
          center: new window.kakao.maps.LatLng(lat, lng),
        }
        const map = new window.kakao.maps.Map(container, options)
        const markerPosition = new window.kakao.maps.LatLng(lat, lng)
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
        width: '760px',
        height: '180px',
        boxShadow: '0px 3px 22px rgba(112, 0, 0, 0.08)',
        borderRadius: '10px',
        marginLeft: '15px',
      }}
    ></div>
  )
 */
