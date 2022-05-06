import React, { useState } from 'react'
import { useCategoryState } from '../../../context'
import {
  CategoryInterface,
  categoryList,
} from '../../../context/CategoryContext'
import { ItemGridContainer } from '../../item-container'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import * as Styled from './style'

const AreaContainer: React.FC = () => {
  const toyData = [
    {
      id: 1,
      name: '키키네하우스',
      address: '송파구 오금로 130',
      img: 'https://picsum.photos/200/300',
    },
    {
      id: 2,
      name: '케키하우스',
      address: '백제 고분로 41길 35',
      img: 'https://picsum.photos/200/300',
    },
    {
      id: 3,
      name: '희스케이크',
      address: '백제고분로27길 26',
      img: 'https://picsum.photos/200/300',
    },
    {
      id: 4,
      name: '키키네하우스',
      address: '송파구 오금로 130',
      img: 'https://picsum.photos/200/300',
    },
    {
      id: 5,
      name: '케키하우스',
      address: '백제 고분로 41길 35',
      img: 'https://picsum.photos/200/300',
    },
    {
      id: 6,
      name: '희스케이크',
      address: '백제고분로27길 26',
      img: 'https://picsum.photos/200/300',
    },
  ]
  const state = useCategoryState()
  const [page, setPage] = useState<number>(1)

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value)
  }

  return (
    <Styled.AreaContainer>
      <h2>
        우리동네{' '}
        {state.category === ''
          ? '케이크'
          : categoryList.find(
              (category: CategoryInterface) => category.name === state.category
            )?.title}
        가게
      </h2>
      <ItemGridContainer row={3} items={toyData} />
      <div className="pagination-container">
        <Stack className="pagination" spacing={2}>
          <Pagination
            page={page}
            onChange={handlePageChange}
            //TODO: fetch the maximum data count
            count={20}
            color="primary"
          />
        </Stack>
      </div>
    </Styled.AreaContainer>
  )
}

export default AreaContainer
