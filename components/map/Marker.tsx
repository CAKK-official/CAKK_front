import React, { useEffect, useMemo, useState } from 'react'
import {
  NaverMapProvider,
  useNaverMapDispatch,
  useNaverMapState,
} from '../../context'
import InfoWindow from './InfoWindow'

interface MarkerProps {
  lat: number
  lng: number
  children: React.ReactNode
}

const Marker: React.FC<MarkerProps> = ({ lat, lng, children }) => {
  const [infoWindowOpen, setInfoWindowOpen] = useState<boolean>(false)

  const { NaverMap } = useNaverMapState()

  const marker = useMemo(() => {
    return new naver.maps.Marker({
      position: new naver.maps.LatLng(lat, lng),
      map: NaverMap,
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
    naver.maps.Event.addListener(marker, 'mouseover', () =>
      setInfoWindowOpen(true)
    )
    naver.maps.Event.addListener(marker, 'mouseout', () =>
      setInfoWindowOpen(false)
    )

    // return () => {
    //   naver.maps.Event.removeListener(() => setInfoWindowOpen(true))
    //   naver.maps.Event.removeListener(() => setInfoWindowOpen(false))
    // }
  }, [])

  useEffect(() => {
    console.log('infoWindowOpen', infoWindowOpen)
  }, [infoWindowOpen])

  return (
    <>{children && <InfoWindow opened={infoWindowOpen} marker={marker} />}</>
  )
}

export default Marker
