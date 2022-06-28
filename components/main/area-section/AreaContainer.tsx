import React, { useEffect, useState } from 'react'
import { useCategoryState, useLocationState } from '../../../context'
import {
  CategoryInterface,
  categoryList,
} from '../../../context/CategoryContext'
import { ItemGridContainer } from '../../item-container'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import * as Styled from './style'
import { fetchSearch, ItemResponseProps } from '../../../src/api/api'

const AreaContainer: React.FC = () => {
  // const toyData = [
  //   {
  //     id: 1,
  //     name: '키키네하우스',
  //     address: '송파구 오금로 130',
  //     img: 'https://picsum.photos/200/300',
  //   },
  //   {
  //     id: 2,
  //     name: '케키하우스',
  //     address: '백제 고분로 41길 35',
  //     img: 'https://picsum.photos/200/300',
  //   },
  //   {
  //     id: 3,
  //     name: '희스케이크',
  //     address: '백제고분로27길 26',
  //     img: 'https://picsum.photos/200/300',
  //   },
  //   {
  //     id: 4,
  //     name: '키키네하우스',
  //     address: '송파구 오금로 130',
  //     img: 'https://picsum.photos/200/300',
  //   },
  //   {
  //     id: 5,
  //     name: '케키하우스',
  //     address: '백제 고분로 41길 35',
  //     img: 'https://picsum.photos/200/300',
  //   },
  //   {
  //     id: 6,
  //     name: '희스케이크',
  //     address: '백제고분로27길 26',
  //     img: 'https://picsum.photos/200/300',
  //   },
  // ]
  const categoryState = useCategoryState()
  const locationState = useLocationState()
  const [page, setPage] = useState<number>(1)
  const [totalPage, setTotalPage] = useState<number>(20)

  const [items, setItems] = useState<ItemResponseProps[]>([]) // Item Grid Container

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value)
  }

  // Fetch API
  useEffect(() => {
    const categoryTitle = categoryList.find(
      (category: CategoryInterface) => category.name === categoryState.category
    )?.title

    fetchSearch(page, {
      addresses: locationState.location,
      category: categoryTitle ? categoryTitle : 'null',
    }).then((res) => {
      // setPage(res.page)
      setTotalPage(res.totalpage)
      setItems(res.data)
    })
  }, [page, categoryState, locationState])

  return (
    <Styled.AreaContainer>
      <h2>
        우리동네{' '}
        {categoryState.category === ''
          ? '케이크'
          : categoryList.find(
              (category: CategoryInterface) =>
                category.name === categoryState.category
            )?.title}
        가게
      </h2>
      <ItemGridContainer row={3} items={items} />
      <div className="pagination-container">
        <Stack className="pagination" spacing={2}>
          <Pagination
            page={page}
            onChange={handlePageChange}
            //TODO: fetch the maximum data count
            count={totalPage}
            color="primary"
          />
        </Stack>
      </div>
    </Styled.AreaContainer>
  )
}

export default AreaContainer
