import styled from '@emotion/styled'
import { styled as MuiStyled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'

export const SeacrhContainer = styled.div`
  margin: 2rem 0;
  width: ${({ theme }) => theme.screen.main};
  /* height: 3.25rem; */

  display: flex;
  align-items: center;
  justify-content: center;

  .select-wrapper {
    background-color: #f6f6f6;
    border-radius: 10px;
    margin: 3rem 0;
    padding: 2rem 2rem;
    width: 100%;

    .select-items {
      display: flex;
      min-height: 100px;
      margin: 1rem 0;

      .item-title {
        min-width: 200px;

        h3 {
          margin: 8px 12px;
        }
      }

      // Location service
      .select-container {
        width: 100%;

        select {
          border: none;
          border-radius: 12px;
          padding: 0.75rem 1rem;
          box-shadow: 0px 3px 30px rgba(164, 164, 164, 0.15);
          font-size: 1rem;

          option {
            background: black;
          }
        }
        select::after {
          content: '▾';
          display: block;
          margin: 0 0 0 8px;
        }
      }
    }
  }
`

export const ChipContainer = styled.div`
  /* background-color: green; */
  margin-top: 1rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  white-space: initial;
  list-style-type: none;

  .chip-item {
    width: 20%;
  }
`

export const BootstrapInput = MuiStyled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    width: '10rem',
    borderRadius: 8,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    marginLeft: '1rem',
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    boxShadow: '0px 3px 22px rgba(112, 0, 0, 0.08)',

    '&:focus': {
      borderRadius: 4,
      borderColor: theme.palette.primary.main,
      // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))
