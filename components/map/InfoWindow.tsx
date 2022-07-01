import React, { useEffect, useMemo } from 'react'
import { useNaverMapState } from '../../context'
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
  const { NaverMap } = useNaverMapState()

  console.log('children', reactElementToJSXString(children))

  const infoWindow = useMemo(() => {
    return new window.naver.maps.InfoWindow({
      content: reactElementToJSXString(children),
      backgroundColor: '#fff',
      borderWidth: 0,
      anchorSize: new window.naver.maps.Size(8, 4),
      anchorColor: '#fff',
    })
  }, [])

  useEffect(() => {
    if (opened) {
      infoWindow.open(NaverMap, marker)
    } else {
      infoWindow.close()
    }
    return () => {
      infoWindow.close()
    }
  }, [NaverMap, marker, opened])

  return <></>
}

export default InfoWindow
