import Link from 'next/link'
import { Router, useRouter } from 'next/router'
import React, { useEffect, useMemo, useState } from 'react'
import {
  useKakaoMapDispatch,
  useKakaoMapState,
  useNaverMapDispatch,
  useNaverMapState,
} from '../../context'
import InfoWindow from './InfoWindow'

interface MarkerProps {
  id: number
  lat: number
  lng: number
  children: React.ReactNode
}

const Marker: React.FC<MarkerProps> = ({ id, lat, lng, children }) => {
  const [infoWindowOpen, setInfoWindowOpen] = useState<boolean>(false)
  // const { NaverMap } = useNaverMapState()
  // const dispatch = useNaverMapDispatch()
  const { KakaoMap } = useKakaoMapState()
  const dispatch = useKakaoMapDispatch()
  const router = useRouter()

  // Marker Image
  const markerImageSrc = '/img/marker.png'
  const markerImageSize = new window.kakao.maps.Size(26, 40)
  const markerImageOption = {}
  const markerImage = new window.kakao.maps.MarkerImage(
    markerImageSrc,
    markerImageSize,
    markerImageOption
  )

  const marker = useMemo(() => {
    return new window.kakao.maps.Marker({
      position: new window.kakao.maps.LatLng(lat, lng),
      map: KakaoMap,
      image: markerImage,
      //TODO: change Marker Icon
      // icon: {
      //   content:
      //     '<div'+
      //     'style="background-color: pink; margin: 0px; padding: 0px; border: 0px solid transparent; display: block; max-width: none; max-height: none; ' +
      //     '-webkit-user-select: none; position: absolute; width: 22px; height: 35px; left: 0px; top: 0px;">?</div>',
      //   size: new naver.maps.Size(22, 35),
      //   anchor: new naver.maps.Point(11, 35),
      // },
    })
  }, [])

  useEffect(() => {
    dispatch({ type: 'ADD_MARKER', KakaoMarker: marker })
    // TODO: uncomment
    window.kakao.maps.event.addListener(marker, 'mouseover', () =>
      setInfoWindowOpen(true)
    )
    window.kakao.maps.event.addListener(marker, 'mouseout', () =>
      setInfoWindowOpen(false)
    )
    window.kakao.maps.event.addListener(marker, 'click', () =>
      router.push(`/detail/${id}`)
    )

    return () => {
      // naver.maps.Event.removeListener({eventName: 'mouseover',  listener(event) {
      //     setInfoWindowOpen(true);
      // },})
      // naver.maps.Event.removeListener(() => {
      //   setInfoWindowOpen(false)
      // })
    }
  }, [])

  return (
    <>
      {children && !!marker && (
        <InfoWindow opened={infoWindowOpen} marker={marker}>
          {children}
        </InfoWindow>
      )}
    </>
  )
}

export default Marker
