import React, { createContext, Dispatch, useReducer, useContext } from 'react'

type LocationState = {
  location: string[]
}

type LocationAction =
  | {
      type: 'SET_LOCATION'
      location: string
    }
  | { type: 'DELETE_LOCATION'; location: string }
  | { type: 'RESET_LOCATION' }

const initState = {
  location: [],
}

type LocationDispatch = Dispatch<LocationAction>

// Context

const LocationStateContext = createContext<LocationState | null>(null)
const LocationDispatchContext = createContext<LocationDispatch | null>(null)

function LocationReducer(state: LocationState, action: LocationAction) {
  switch (action.type) {
    case 'SET_LOCATION':
      return {
        ...state,
        location: Array.from(new Set([...state.location, action.location])),
      }
    case 'DELETE_LOCATION':
      return {
        ...state,
        location: state.location.filter(
          (loc: string) => loc !== action.location
        ),
      }
    case 'RESET_LOCATION':
      return { ...state, location: [] }

    default:
      throw new Error('Unhandled action')
  }
}

export default function LocationProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [state, dispatch] = useReducer(LocationReducer, initState)

  return (
    <LocationStateContext.Provider value={state}>
      <LocationDispatchContext.Provider value={dispatch}>
        {children}
      </LocationDispatchContext.Provider>
    </LocationStateContext.Provider>
  )
}

// Context hook
export function useLocationState() {
  const state = useContext(LocationStateContext)
  if (!state) throw new Error('Cannot find LocationProvider')
  return state
}

export function useLocationDispatch() {
  const dispatch = useContext(LocationDispatchContext)
  if (!dispatch) throw new Error('Cannot find LocationProvider') // 유효하지 않을땐 에러를 발생
  return dispatch
}
