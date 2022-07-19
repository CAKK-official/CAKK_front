import React, { useEffect, useMemo } from 'react'
import { useKakaoMapState } from '../../context'
import reactElementToJSXString from 'react-element-to-jsx-string'

interface MarkerProps {
  marker: naver.maps.Marker

  opened: boolean
  lat?: number
  lng?: number
  children?: React.ReactNode
}

const InfoWindow: React.FC<MarkerProps> = ({
  marker,
  opened,
  lat,
  lng,
  children,
}) => {
  const { KakaoMap } = useKakaoMapState()

  const infoWindow = useMemo(() => {
    return new window.kakao.maps.InfoWindow({
      content: reactElementToJSXString(children),
      backgroundColor: '#fff',
      borderWidth: 0,
      anchorSize: new window.kakao.maps.Size(8, 4),
      anchorColor: '#fff',
    })
  }, [])

  useEffect(() => {
    if (opened) {
      infoWindow.open(KakaoMap, marker)
    } else {
      infoWindow.close()
    }
    return () => {
      infoWindow.close()
    }
  }, [KakaoMap, marker, opened])

  return <></>
}

export default InfoWindow
