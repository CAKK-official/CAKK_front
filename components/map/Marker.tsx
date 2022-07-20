import Link from 'next/link'
import { Router, useRouter } from 'next/router'
import React, { useEffect, useMemo, useState } from 'react'
import { useKakaoMapDispatch, useKakaoMapState } from '../../context'
import InfoWindow from './InfoWindow'

interface MarkerProps {
  id: number
  lat: number
  lng: number
  children: React.ReactNode
}

const Marker: React.FC<MarkerProps> = ({ id, lat, lng, children }) => {
  const [infoWindowOpen, setInfoWindowOpen] = useState<boolean>(false)
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
      window.kakao.maps.event.removeListener({
        eventName: 'mouseover',
        listener() {
          setInfoWindowOpen(true)
        },
      })
      window.kakao.maps.event.removeListener(() => {
        setInfoWindowOpen(false)
      })
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
