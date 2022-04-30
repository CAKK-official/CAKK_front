import React from 'react'
import {
  useCategoryDispatch,
  useCategoryState,
  useLocationDispatch,
  useLocationState,
} from '../../../context'
import Chip from '../chip'
import * as Styled from './style'

const LocationContainer: React.FC = () => {
  const state = useLocationState()
  const locationDispatch = useLocationDispatch()
  function handleLocationSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    console.log('location selected', e.target.value)

    locationDispatch({ type: 'SET_LOCATION', location: e.target.value })
  }

  return (
    <div className="location-group select-items">
      <div className="item-title">
        <h3>지역</h3>
      </div>
      <div className="select-container">
        <select onChange={handleLocationSelect}>
          <option>강남구</option>
          <option>강동구</option>
          <option>관악구</option>
          <option>광진구</option>
          <option>노원구</option>
        </select>
        <Styled.ChipContainer>
          {state.location.map((location: string) => (
            <li className="chip-item" key={location}>
              <Chip
                primary
                onClick={() => console.log(location)}
                onDelete={() => console.log(location)}
              >
                <span>{location}</span>
              </Chip>
            </li>
          ))}
        </Styled.ChipContainer>
      </div>
    </div>
  )
}

const CategoryContainer: React.FC = () => {
  const categoryList = [
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
                dispatch({ type: 'SET_CATEGORY', category: category.name })
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
