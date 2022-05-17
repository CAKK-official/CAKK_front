import React from 'react'
import MuiSelect from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import * as Styled from './style'

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

export interface SelectInterface {
  handleChange: (event: {
    target: {
      value: string
    }
  }) => void
  loc: string
}

const Select: React.FC<SelectInterface> = ({ handleChange, loc }) => {
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
  return (
    <MuiSelect
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
    </MuiSelect>
  )
}

export default Select
