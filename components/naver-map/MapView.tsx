import React from 'react'
import { useNaverMapDispatch } from '../../context'
import {
  CategoryContainer,
  LocationContainer,
} from '../main/search/SeacrhContainer'

import Map from './Map'
import MapSearchMenu from './MapSearchMenu'
import Marker from './Marker'

interface MapViewInterface {
  isLoading: boolean
  lat: number
  lng: number
}

const MapView: React.FC<MapViewInterface> = ({ isLoading, lat, lng }) => {
  const dispatch = useNaverMapDispatch()

  return (
    <>
      {!isLoading && (
        <div style={{ display: 'flex', position: 'relative' }}>
          <MapSearchMenu>
            <CategoryContainer />
            <LocationContainer />
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
        </div>
      )}
    </>
  )
}

export default MapView
