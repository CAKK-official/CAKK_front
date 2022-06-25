import styled from '@emotion/styled'
import React, { useEffect, useMemo } from 'react'
import {
  NaverMapProvider,
  useNaverMapDispatch,
  useNaverMapState,
} from '../../context'

if (typeof window !== 'undefined') {
  const { naver } = window
}

interface MarkerProps {
  marker: naver.maps.Marker

  opened: boolean
  lat?: number
  lng?: number
  children?: React.ReactNode
}

const hello = styled.div`
  background-color: black;
`

const InfoWindow: React.FC<MarkerProps> = ({
  marker,
  opened,
  lat,
  lng,
  children,
}) => {
  const { NaverMap } = useNaverMapState()

  const contentString = [
    '<hello class="iw_inner">',
    '   <h3>서울특별시청</h3>',
    '   <p>서울특별시 중구 태평로1가 31 | 서울특별시 중구 세종대로 110 서울특별시청<br />',
    '       02-120 | 공공,사회기관 &gt; 특별,광역시청<br />',
    '       <a href="http://www.seoul.go.kr" target="_blank">www.seoul.go.kr/</a>',
    '   </p>',
    '</hello>',
  ].join('')

  const infoWindow = useMemo(() => {
    return new naver.maps.InfoWindow({
      content: contentString,
      backgroundColor: '#f00',
      borderWidth: 0,
      anchorSize: new naver.maps.Size(8, 4),
      anchorColor: '#f00',
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [NaverMap, marker, opened])

  // useEffect(() => {
  //   console.log('Naver Map ==> ', NaverMap)
  //   const infowindow = new window.naver.maps.InfoWindow({
  //     content: contentString,
  //   })

  //   console.log('asdf', infowindow)
  // }, [NaverMap])

  return <></>
}

export default InfoWindow
