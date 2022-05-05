import React, { useState } from 'react'
import {
  useCategoryDispatch,
  useCategoryState,
  useLocationDispatch,
  useLocationState,
} from '../../../context'
import Chip from '../chip'
import * as Styled from './style'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

const ITEM_HEIGHT = 24
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 9 + ITEM_PADDING_TOP,
      width: '10rem',
    },
  },
}

const LocationContainer: React.FC = () => {
  const state = useLocationState()
  const locationDispatch = useLocationDispatch()
  const allLocation = [
    { id: 0, name: '강남구' },
    { id: 1, name: '강동구' },
    { id: 2, name: '강북구' },
    { id: 3, name: '강서구' },
    { id: 4, name: '관악구' },
    { id: 5, name: '광진구' },
    { id: 6, name: '구로구' },
    { id: 7, name: '금천구' },
    { id: 8, name: '노원구' },
    { id: 9, name: '도봉구' },
    { id: 10, name: '동대문구' },
    { id: 11, name: '동작구' },
    { id: 12, name: '마포구' },
    { id: 13, name: '서대문구' },
    { id: 14, name: '서초구' },
    { id: 15, name: '성동구' },
    { id: 16, name: '성북구' },
    { id: 17, name: '송파구' },
    { id: 18, name: '양천구' },
    { id: 19, name: '영등포구' },
    { id: 20, name: '용산구' },
    { id: 21, name: '은평구' },
    { id: 22, name: '종로구' },
    { id: 23, name: '중구' },
    { id: 24, name: '중랑구' },
  ]
  const [loc, setLoc] = useState<string>('')

  const handleChange = (event: { target: { value: string } }) => {
    setLoc(event.target.value)
    locationDispatch({ type: 'SET_LOCATION', location: event.target.value })
  }

  const handleDeleteLocation = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    location: string
  ) => {
    console.log(location)
    locationDispatch({ type: 'DELETE_LOCATION', location })
  }

  return (
    <div className="location-group select-items">
      <div className="item-title">
        <h3>지역</h3>
      </div>
      <div className="select-container">
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          label={loc}
          value={loc === '' ? '구를 선택하세요' : loc}
          onChange={handleChange}
          input={<Styled.BootstrapInput />}
          MenuProps={MenuProps}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Placeholder</em>
            }

            return selected
          }}
        >
          <MenuItem disabled value="">
            <em>구를 선택하세요</em>
          </MenuItem>
          {allLocation.map((loc: { id: number; name: string }) => (
            <MenuItem key={loc.id} value={loc.name}>
              {loc.name}
            </MenuItem>
          ))}
        </Select>
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
