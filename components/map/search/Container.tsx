import { useState } from 'react'
import {
  useCategoryDispatch,
  useCategoryState,
  useLocationDispatch,
  useLocationState,
} from '../../../context'
import { categoryList } from '../../../context/CategoryContext'
import Chip from '../../main/chip'
import Select from '../../main/select'

import * as S from './style'

export const LocationContainer: React.FC = () => {
  const state = useLocationState()
  const locationDispatch = useLocationDispatch()

  const [loc, setLoc] = useState<string>('')

  const handleChange = (event: { target: { value: string } }) => {
    setLoc(event.target.value)
    locationDispatch({ type: 'SET_LOCATION', location: event.target.value })
  }

  return (
    <S.SearchContainer>
      <span>지역 검색</span>
      <Select handleChange={handleChange} loc={loc} />
    </S.SearchContainer>
  )
}

export const CategoryContainer: React.FC = () => {
  // const categoryList = [
  //   { id: 0, name: 'lunch', title: '도시락케이크' },
  //   { id: 1, name: 'tiara', title: '티아라케이크' },
  //   { id: 2, name: 'letter', title: '레터링케이크' },
  //   { id: 3, name: 'photo', title: '포토케이크' },
  //   { id: 4, name: 'solid', title: '입체케이크' },
  //   { id: 5, name: 'floor', title: '2단케이크' },
  //   { id: 6, name: 'rice', title: '떡케이크' },
  //   { id: 7, name: 'flower', title: '플라워케이크' },
  //   { id: 8, name: 'bottle', title: '보틀케이크' },
  //   { id: 9, name: 'figure', title: '피규어케이크' },
  // ]

  const state = useCategoryState()
  const dispatch = useCategoryDispatch()

  return (
    <S.ChipContainer>
      {categoryList.map((category) => (
        <li className="chip-item" key={category.name}>
          <S.Button
            primary={category.name === state.category}
            onClick={() =>
              dispatch({ type: 'TOGGLE_CATEGORY', category: category.name })
            }
          >
            {/* <span>{category.title}</span> */}
          </S.Button>
        </li>
      ))}
    </S.ChipContainer>
  )
}
