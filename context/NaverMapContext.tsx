import React, { createContext, Dispatch, useReducer, useContext } from 'react'

type NaverMapState = {
  NaverMap: naver.maps.Map
  menu: boolean
}

type NaverMapAction =
  | {
      type: 'SET_MAP'
      NaverMap: naver.maps.Map
    }
  | {
      type: 'TOGGLE_MENU'
    }

const initState = {
  NaverMap: undefined as unknown as naver.maps.Map,
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
