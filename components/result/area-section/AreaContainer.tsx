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
import {
  fetchPopular,
  fetchSearch,
  ItemResponseProps,
} from '../../../src/api/api'

const AreaContainer: React.FC = () => {
  const categoryState = useCategoryState()
  const locationState = useLocationState()
  const [page, setPage] = useState<number>(1)
  const [totalPage, setTotalPage] = useState<number>(20)

  const [items, setItems] = useState<ItemResponseProps[]>([]) // Item Grid Container
  const [isPopular, setIsPopular] = useState<boolean>(true)

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value)
  }

  // Fetch API
  useEffect(() => {
    if (categoryState.category !== '' || locationState.location.length !== 0) {
      setIsPopular(false)
      fetchSearch(page, {
        addresses: locationState.location,
        category: categoryState.category,
      }).then((res) => {
        setPage(res.page)
        setTotalPage(res.totalpage)
        setItems(res.data)
      })
    } else {
      setIsPopular(true)
      fetchPopular().then((res) => {
        setItems(res)
      })
    }
  }, [page, categoryState, locationState])

  return (
    <Styled.AreaContainer>
      {isPopular ? (
        <>
          <div className="popular-container">
            <h2>인기 케이크</h2>
            <div className="subtitle">
              아직 어떤 케이크를 살지 못 정하셨나요?
              <br />
              인기있는 케이크집들을 둘러보시는 것은 어떠신가요?
            </div>
          </div>
          <ItemGridContainer row={3} items={items} />
        </>
      ) : (
        <>
          <h2>검색 결과</h2>
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
        </>
      )}
    </Styled.AreaContainer>
  )
}

export default AreaContainer
