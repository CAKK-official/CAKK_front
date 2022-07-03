import { useState } from 'react'
import {
  useCategoryDispatch,
  useCategoryState,
  useMapLocationDispatch,
  useNaverMapDispatch,
} from '../../../context'
import { categoryList } from '../../../context/CategoryContext'
import { LocationProps } from '../../../context/MapLocationContext'
import Select from '../../main/select'

import * as S from './style'

export const LocationContainer: React.FC = () => {
  const dispatch = useMapLocationDispatch()

  const [loc, setLoc] = useState<string>('')

  const handleChange = (event: { target: { value: string } }) => {
    setLoc(event.target.value)
    dispatch({
      type: 'SET_LAT_LNG_BY_LOCATION',
      location: event.target.value as LocationProps,
    })

    console.log('hello world')
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

  const handleChange = (categoryName: string) => {
    dispatch({ type: 'TOGGLE_CATEGORY', category: categoryName })
  }

  return (
    <S.ChipContainer>
      {categoryList.map((category) => (
        <li className="chip-item" key={category.name}>
          <S.Button
            primary={category.name === state.category}
            onClick={() => handleChange(category.name)}
          >
            {/* TODO: ICON GOES HERE */}
          </S.Button>
        </li>
      ))}
    </S.ChipContainer>
  )
}
