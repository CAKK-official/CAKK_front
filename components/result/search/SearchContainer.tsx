import React, { useEffect, useState } from 'react'
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
import { useRouter } from 'next/router'

export const LocationContainer: React.FC = () => {
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
              <Chip
                primary
                handleDelete={(e) => handleDeleteLocation(e, location)}
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

export const CategoryContainer: React.FC = () => {
  const router = useRouter()
  const state = useCategoryState()
  const dispatch = useCategoryDispatch()

  useEffect(() => {
    const routerCategory = router.query.category
    if (routerCategory !== undefined) {
      const currentCategory = categoryList.find(
        (category) => category.title === routerCategory
      ) as {
        name: string
        title: string
      }
      dispatch({ type: 'SET_CATEGORY', category: currentCategory.name })
    }
  }, [router])

  return (
    <div className="category-group select-items">
      <div className="item-title">
        <h3 className="category-title">카테고리</h3>
      </div>
      <Styled.ChipContainer>
        {categoryList.map((category) => (
          <li className="chip-item" key={category.name}>
            <Chip
              primary={category.name === state.category}
              handleClick={() =>
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

const SearchContainer: React.FC = () => {
  return (
    <Styled.SeacrhContainer>
      <h2>지역 & 카테고리 검색</h2>
      <div className="select-wrapper">
        <LocationContainer />
        <CategoryContainer />
      </div>
    </Styled.SeacrhContainer>
  )
}

export default SearchContainer
