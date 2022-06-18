import React, { useEffect, useState } from 'react'
import {
  useCategoryState,
  useNaverMapDispatch,
  useMapLocationState,
  useMapLocationDispatch,
} from '../../context'
import { CategoryContainer, LocationContainer } from './search/Container'

import Map from './Map'
import MapSearchMenu from './MapSearchMenu'
import Marker from './Marker'

import * as S from './style'

import axios from 'axios'

import { fetchMapSearch, MapResponse } from '../../src/api/api'

interface MapViewInterface {
  isLoading: boolean
  lat: number
  lng: number
}

const MapView: React.FC = () => {
  const state = useCategoryState()
  const locationState = useMapLocationState()

  const dispatch = useMapLocationDispatch()

  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [lat, setLat] = useState<number>(37.4954178)
  const [lng, setLng] = useState<number>(127.0388462)

  const [markerData, setMarkerData] = useState<MapResponse[]>([])

  // FETCH CURRENT LOCATION
  useEffect(() => {
    const { geolocation } = navigator

    geolocation.getCurrentPosition(
      (position) => {
        // success.
        setLat(position.coords.latitude)
        setLng(position.coords.longitude)
        dispatch({
          type: 'SET_LAT_LNG',
          position: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
        })

        setIsLoading(false)
      },
      (error) => {
        console.warn('Fail to fetch current location', error)
        setLat(37.4954178)
        setLng(127.0388462)
        dispatch({
          type: 'SET_LAT_LNG',
          position: {
            lat: 37.4954178,
            lng: 127.0388462,
          },
        })
        setIsLoading(false)
      },
      {
        enableHighAccuracy: false,
        maximumAge: 0,
        timeout: Infinity,
      }
    )
  }, [])

  useEffect(() => {
    if (locationState.lat !== 0 || locationState.lng !== 0) {
      const fetchData = async () => {
        const data = await fetchMapSearch('letter', 127.1091949, 37.5112439)

        setMarkerData(data)
      }

      fetchData()
    }
  }, [locationState])

  console.log('📊', state, locationState, markerData)

  return (
    <>
      {!isLoading && (
        <S.MapView>
          <MapSearchMenu>
            <LocationContainer />
            <CategoryContainer />
          </MapSearchMenu>
          <Map lat={lat} lng={lng}>
            {markerData.map((marker: MapResponse) => (
              <Marker
                key={marker.id}
                lat={marker.latlng[0]}
                lng={marker.latlng[1]}
              >
                hello
              </Marker>
            ))}
          </Map>
        </S.MapView>
      )}
    </>
  )
}

export default MapView
