import React from 'react'
import { useCategoryState, useNaverMapDispatch } from '../../context'
import { CategoryContainer, LocationContainer } from './search/Container'

import Map from './Map'
import MapSearchMenu from './MapSearchMenu'
import Marker from './Marker'

import * as S from './style'

interface MapViewInterface {
  isLoading: boolean
  lat: number
  lng: number
}

const MapView: React.FC<MapViewInterface> = ({ isLoading, lat, lng }) => {
  const state = useCategoryState()
  console.log('📊', state)

  return (
    <>
      {!isLoading && (
        <S.MapView>
          <MapSearchMenu>
            <LocationContainer />
            <CategoryContainer />
          </MapSearchMenu>
          <Map lat={lat} lng={lng}>
            <Marker lat={37.3595704} lng={127.2}>
              ellldji
            </Marker>
            <Marker lat={37.3595704} lng={127.3}>
              ellldji
            </Marker>
            <Marker lat={37.3595704} lng={127.4}>
              ellldji
            </Marker>
            <Marker lat={37.3595704} lng={127.105399}>
              ellldji
            </Marker>
          </Map>
        </S.MapView>
      )}
    </>
  )
}

export default MapView
