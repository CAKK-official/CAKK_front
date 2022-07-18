import React, { createContext, Dispatch, useReducer, useContext } from 'react'

// const kakao = window.kakao

type KakaoMapState = {
  isLoading: boolean
  KakaoMap: kakao.maps.Map
  KakaoMarkers: kakao.maps.Marker[]
  menu: boolean
}

type KakaoMapAction =
  | {
      type: 'SET_MAP_LOADING'
      isLoading: boolean
    }
  | {
      type: 'SET_MAP'
      KakaoMap: kakao.maps.Map
    }
  | { type: 'ADD_MARKER'; KakaoMarker: kakao.maps.Marker }
  | {
      type: 'TOGGLE_MENU'
    }
  | { type: 'RESET_MARKERS' }

const initState = {
  isLoading: false,
  KakaoMap: undefined as unknown as kakao.maps.Map,
  KakaoMarkers: [] as kakao.maps.Marker[],
  menu: true,
}

function reducer(state: KakaoMapState, action: KakaoMapAction): KakaoMapState {
  switch (action.type) {
    case 'SET_MAP_LOADING':
      return {
        ...state,
        isLoading: action.isLoading,
      }
    case 'SET_MAP':
      return {
        ...state,
        KakaoMap: action.KakaoMap,
      }
    case 'TOGGLE_MENU':
      return {
        ...state,
        menu: !state.menu,
      }
    case 'ADD_MARKER':
      // console.log('+', 'ADD MARKER', action.KakaoMarker)
      return {
        ...state,
        KakaoMarkers: [...state.KakaoMarkers, action.KakaoMarker],
      }
    case 'RESET_MARKERS':
      console.log('-', state.KakaoMarkers)
      state.KakaoMarkers.map((marker: kakao.maps.Marker) => {
        marker.setMap(null)
      })
      return {
        ...state,
        KakaoMarkers: [],
      }
    default:
      throw new Error('Unhandled action')
  }
}

type KakaoMapDispatch = Dispatch<KakaoMapAction>

// Context
const KakaoMapStateContext = createContext<KakaoMapState | null>(null)
const KakaoMapDispatchContext = createContext<KakaoMapDispatch | null>(null)

export function KakaoMapProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initState)

  return (
    <KakaoMapStateContext.Provider value={state}>
      <KakaoMapDispatchContext.Provider value={dispatch}>
        {children}
      </KakaoMapDispatchContext.Provider>
    </KakaoMapStateContext.Provider>
  )
}

// Context hook
export function useKakaoMapState() {
  const state = useContext(KakaoMapStateContext)
  if (!state) throw new Error('Cannot find KakaoMapProvider')
  return state
}

export function useKakaoMapDispatch() {
  const dispatch = useContext(KakaoMapDispatchContext)
  if (!dispatch) throw new Error('Cannot find KakaoMapProvider') // 유효하지 않을땐 에러를 발생
  return dispatch
}
