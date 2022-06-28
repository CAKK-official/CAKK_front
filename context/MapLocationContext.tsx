import React, { createContext, Dispatch, useReducer, useContext } from 'react'

const allLocation = [
  { id: 0, name: '강남구' }, // ⭐️
  { id: 1, name: '강동구' }, // ⭐️
  // { id: 2, name: '강북구' },
  // { id: 3, name: '강서구' },
  // { id: 4, name: '관악구' },
  { id: 5, name: '광진구' }, // ⭐️
  // { id: 6, name: '구로구' },
  // { id: 7, name: '금천구' },
  { id: 8, name: '노원구' }, // ⭐️
  { id: 9, name: '도봉구' }, // ⭐️
  // { id: 10, name: '동대문구' },
  // { id: 11, name: '동작구' },
  { id: 12, name: '마포구' }, // ⭐️
  { id: 13, name: '서대문구' }, // ⭐️
  { id: 14, name: '서초구' }, // ⭐️
  { id: 15, name: '성동구' }, // ⭐️
  // { id: 16, name: '성북구' },
  { id: 17, name: '송파구' }, // ⭐️
  // { id: 18, name: '양천구' },
  // { id: 19, name: '영등포구' },
  { id: 20, name: '용산구' }, // ⭐️
  // { id: 21, name: '은평구' },
  { id: 22, name: '종로구' }, // ⭐️
  { id: 23, name: '중구' }, // ⭐️
  // { id: 24, name: '중랑구' },
]

const locationLatLngData = {
  강남구: { lat: 37.5172363, lng: 127.0473248 },
  강동구: { lat: 37.5301251, lng: 127.123762 },
  광진구: { lat: 37.5384843, lng: 127.0822938 },
  노원구: { lat: 37.6541917, lng: 127.056793 },
  도봉구: { lat: 37.6687738, lng: 127.0470706 },
  마포구: { lat: 37.5637561, lng: 126.9084211 },
  서대문구: { lat: 37.5791158, lng: 126.9367789 },
  서초구: { lat: 37.4837121, lng: 127.0324112 },
  성동구: { lat: 37.5633415, lng: 127.0371025 },
  송파구: { lat: 37.5145437, lng: 127.1065971 },
  용산구: { lat: 37.5384272, lng: 126.9654442 },
  종로구: { lat: 37.5729503, lng: 126.9793579 },
  중구: { lat: 37.5640907, lng: 126.9979403 },
}

export type LocationProps =
  | '강남구'
  | '강동구'
  | '광진구'
  | '노원구'
  | '도봉구'
  | '마포구'
  | '서대문구'
  | '서초구'
  | '성동구'
  | '송파구'
  | '용산구'
  | '종로구'
  | '중구'
  | ''

type MapLocationState = {
  location: LocationProps
  lat: number
  lng: number
}

type MapLocationAction =
  | {
      type: 'SET_LOCATION'
      location: LocationProps
    }
  | {
      type: 'SET_LAT_LNG'
      position: { lat: number; lng: number }
    }
  | {
      type: 'SET_LAT_LNG_BY_LOCATION'
      location: LocationProps
    }
  | { type: 'RESET_LOCATION' }

const initState = {
  location: '' as LocationProps,
  lat: 0,
  lng: 0,
}

type MapLocationDispatch = Dispatch<MapLocationAction>

// Context

const MapLocationStateContext = createContext<MapLocationState | null>(null)
const MapLocationDispatchContext = createContext<MapLocationDispatch | null>(
  null
)

function MapLocationReducer(
  state: MapLocationState,
  action: MapLocationAction
) {
  switch (action.type) {
    case 'SET_LOCATION':
      return {
        ...state,
        location: action.location as LocationProps,
      }

    case 'RESET_LOCATION':
      return { ...state, location: '' as LocationProps }

    case 'SET_LAT_LNG_BY_LOCATION':
      if (action.location !== '') {
        const currentPosition = locationLatLngData[action.location]

        return {
          ...state,
          location: action.location,
          lat: currentPosition.lat,
          lng: currentPosition.lng,
        }
      } else {
        return {
          ...state,
          location: action.location,
        }
      }
    case 'SET_LAT_LNG':
      return {
        ...state,
        lat: action.position.lat,
        lng: action.position.lng,
      }
    default:
      throw new Error('Unhandled action')
  }
}

export default function MapLocationProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [state, dispatch] = useReducer(MapLocationReducer, initState)

  return (
    <MapLocationStateContext.Provider value={state}>
      <MapLocationDispatchContext.Provider value={dispatch}>
        {children}
      </MapLocationDispatchContext.Provider>
    </MapLocationStateContext.Provider>
  )
}

// Context hook
export function useMapLocationState() {
  const state = useContext(MapLocationStateContext)
  if (!state) throw new Error('Cannot find MapLocationProvider')
  return state
}

export function useMapLocationDispatch() {
  const dispatch = useContext(MapLocationDispatchContext)
  if (!dispatch) throw new Error('Cannot find MapLocationProvider') // 유효하지 않을땐 에러를 발생
  return dispatch
}
