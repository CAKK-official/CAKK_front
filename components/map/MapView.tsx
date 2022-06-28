import React, { useEffect, useState } from 'react'
import {
  useCategoryState,
  useNaverMapDispatch,
  useMapLocationState,
  useMapLocationDispatch,
  useNaverMapState,
} from '../../context'
import { CategoryContainer, LocationContainer } from './search/Container'

import Map from './Map'
import MapSearchMenu from './MapSearchMenu'
import Marker from './Marker'

import * as S from './style'

import { fetchMapSearch, MapResponse } from '../../src/api/api'

interface MapViewInterface {
  isLoading: boolean
  lat: number
  lng: number
}

const MapView: React.FC = () => {
  const categoryState = useCategoryState()
  const locationState = useMapLocationState()

  const { NaverMarkers } = useNaverMapState()
  const naverMapDispatch = useNaverMapDispatch()
  const dispatch = useMapLocationDispatch()

  const [isMapLoading, setIsMapLoading] = useState<boolean>(true)
  const [isDataLoading, setIsDataLoading] = useState<boolean>(false)

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

        setIsMapLoading(false)
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
        setIsMapLoading(false)
      },
      {
        enableHighAccuracy: false,
        maximumAge: 0,
        timeout: Infinity,
      }
    )
  }, [])

  // Search Places based on Search Side menu
  useEffect(() => {
    if (locationState.lat !== 0 || locationState.lng !== 0) {
      const resetMarkerData = () => {
        setIsDataLoading(true)
        setMarkerData([])

        naverMapDispatch({ type: 'RESET_MARKERS' })
      }

      const fetchData = async () => {
        const data = await fetchMapSearch(
          categoryState.category,
          locationState.lat,
          locationState.lng
        )
        setMarkerData(data)
      }

      resetMarkerData()
      fetchData().then(() => {
        setIsDataLoading((loading) => !loading)
      })
    }
  }, [locationState, categoryState])

  return (
    <>
      {!isMapLoading && (
        <S.MapView>
          <MapSearchMenu>
            <LocationContainer />
            <CategoryContainer />
          </MapSearchMenu>
          <Map lat={lat} lng={lng}>
            {!isDataLoading && (
              <>
                {markerData.map((marker: MapResponse) => (
                  <Marker
                    key={marker.id}
                    lat={marker.latlng[0]}
                    lng={marker.latlng[1]}
                  >
                    hello
                  </Marker>
                ))}
              </>
            )}
          </Map>
        </S.MapView>
      )}
    </>
  )
}

export default MapView
