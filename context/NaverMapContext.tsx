import React, { createContext, Dispatch, useReducer, useContext } from 'react'

// const naver = window.naver

type NaverMapState = {
  NaverMap: naver.maps.Map
  NaverMarkers: naver.maps.Marker[]
  menu: boolean
}

type NaverMapAction =
  | {
      type: 'SET_MAP'
      NaverMap: naver.maps.Map
    }
  | { type: 'ADD_MARKER'; NaverMarker: naver.maps.Marker }
  | {
      type: 'TOGGLE_MENU'
    }
  | { type: 'RESET_MARKERS' }

const initState = {
  NaverMap: undefined as unknown as naver.maps.Map,
  NaverMarkers: [] as naver.maps.Marker[],
  menu: true,
}

function reducer(state: NaverMapState, action: NaverMapAction): NaverMapState {
  switch (action.type) {
    case 'SET_MAP':
      return {
        ...state,
        NaverMap: action.NaverMap,
      }
    case 'TOGGLE_MENU':
      return {
        ...state,
        menu: !state.menu,
      }
    case 'ADD_MARKER':
      // console.log('+', 'ADD MARKER', action.NaverMarker)
      return {
        ...state,
        NaverMarkers: [...state.NaverMarkers, action.NaverMarker],
      }
    case 'RESET_MARKERS':
      // console.log('-', 'RESET_MARKER')
      state.NaverMarkers.map((marker: naver.maps.Marker) => {
        marker.setMap(null)
      })
      return {
        ...state,
        NaverMarkers: [],
      }
    default:
      throw new Error('Unhandled action')
  }
}

type NaverMapDispatch = Dispatch<NaverMapAction>

// Context
const NaverMapStateContext = createContext<NaverMapState | null>(null)
const NaverMapDispatchContext = createContext<NaverMapDispatch | null>(null)

export function NaverMapProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initState)

  return (
    <NaverMapStateContext.Provider value={state}>
      <NaverMapDispatchContext.Provider value={dispatch}>
        {children}
      </NaverMapDispatchContext.Provider>
    </NaverMapStateContext.Provider>
  )
}

// Context hook
export function useNaverMapState() {
  const state = useContext(NaverMapStateContext)
  if (!state) throw new Error('Cannot find NaverMapProvider')
  return state
}

export function useNaverMapDispatch() {
  const dispatch = useContext(NaverMapDispatchContext)
  if (!dispatch) throw new Error('Cannot find NaverMapProvider') // 유효하지 않을땐 에러를 발생
  return dispatch
}
