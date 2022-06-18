import React, { useState } from 'react'
import {
  useCategoryDispatch,
  useCategoryState,
  useLocationDispatch,
  useLocationState,
} from '../../../context'
import Chip from '../chip'
import * as Styled from './style'
import Select from '../select'
import { categoryList } from '../../../context/CategoryContext'

const LocationContainer: React.FC = () => {
  const state = useLocationState()
  const locationDispatch = useLocationDispatch()

  const [loc, setLoc] = useState<string>('')

  const handleChange = (event: { target: { value: string } }) => {
    setLoc(event.target.value)
    locationDispatch({ type: 'SET_LOCATION', location: event.target.value })
  }

  const handleDeleteLocation = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    location: string
  ) => {
    locationDispatch({ type: 'DELETE_LOCATION', location })
  }

  return (
    <div className="location-group select-items">
      <div className="item-title">
        <h3>지역</h3>
      </div>
      <div className="select-container">
        <Select handleChange={handleChange} loc={loc} />
        <Styled.ChipContainer>
          {state.location.map((location: string) => (
            <li className="chip-item" key={location}>
              <Chip primary onDelete={(e) => handleDeleteLocation(e, location)}>
                <span>{location}</span>
              </Chip>
            </li>
          ))}
        </Styled.ChipContainer>
      </div>
    </div>
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
    <div className="category-group select-items">
      <div className="item-title">
        <h3>카테고리</h3>
      </div>
      <Styled.ChipContainer>
        {categoryList.map((category) => (
          <li className="chip-item" key={category.name}>
            <Chip
              primary={category.name === state.category}
              onClick={() =>
                dispatch({ type: 'TOGGLE_CATEGORY', category: category.name })
              }
            >
              <span>{category.title}</span>
            </Chip>
          </li>
        ))}
      </Styled.ChipContainer>
    </div>
  )
}

const SeacrhContainer: React.FC = () => {
  return (
    <Styled.SeacrhContainer>
      <div className="select-wrapper">
        <LocationContainer />
        <hr />

        <CategoryContainer />
      </div>
    </Styled.SeacrhContainer>
  )
}

export default SeacrhContainer
