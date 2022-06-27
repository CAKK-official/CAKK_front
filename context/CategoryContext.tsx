import React, { createContext, Dispatch, useReducer, useContext } from 'react'

type CategoryState = {
  category: string
}

type CategoryAction =
  | {
      type: 'SET_CATEGORY'
      category: string
    }
  | {
      type: 'TOGGLE_CATEGORY'
      category: string
    }
  | { type: 'RESET_CATEGORY' }

const initState = {
  category: '',
}

function reducer(state: CategoryState, action: CategoryAction): CategoryState {
  switch (action.type) {
    case 'SET_CATEGORY':
      return {
        ...state,
        category: action.category,
      }
    case 'TOGGLE_CATEGORY':
      if (state.category === action.category) {
        return { category: '' }
      } else {
        return {
          ...state,
          category: action.category,
        }
      }

    case 'RESET_CATEGORY':
      return { ...state, category: '' }

    default:
      throw new Error('Unhandled action')
  }
}

type CategoryDispatch = Dispatch<CategoryAction>

// Context
const CategoryStateContext = createContext<CategoryState | null>(null)
const CategoryDispatchContext = createContext<CategoryDispatch | null>(null)

export function CategoryProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initState)

  return (
    <CategoryStateContext.Provider value={state}>
      <CategoryDispatchContext.Provider value={dispatch}>
        {children}
      </CategoryDispatchContext.Provider>
    </CategoryStateContext.Provider>
  )
}

// Context hook
export function useCategoryState() {
  const state = useContext(CategoryStateContext)
  if (!state) throw new Error('Cannot find CategoryProvider')
  return state
}

export function useCategoryDispatch() {
  const dispatch = useContext(CategoryDispatchContext)
  if (!dispatch) throw new Error('Cannot find CategoryProvider') // 유효하지 않을땐 에러를 발생
  return dispatch
}

export interface CategoryInterface {
  name: string
  title: string
}

export const categoryList = [
  { name: 'lunch', title: '도시락케이크' },
  { name: 'tiara', title: '티아라케이크' },
  { name: 'letter', title: '레터링케이크' },
  { name: 'photo', title: '포토케이크' },
  { name: 'solid', title: '입체케이크' },
  { name: 'floor', title: '2단케이크' },
  { name: 'rice', title: '떡케이크' },
  { name: 'flower', title: '플라워케이크' },
  { name: 'bottle', title: '보틀케이크' },
  { name: 'figure', title: '피규어케이크' },
]
