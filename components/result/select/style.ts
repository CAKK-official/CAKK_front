import { styled as MuiStyled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'

export const BootstrapInput = MuiStyled(InputBase)(({ theme }) => ({
  color: '#707070',
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
    boxShadow: '0px 3px 22px rgba(180, 0, 0, 0.08)',

    '&:focus': {
      borderRadius: 4,
      borderColor: theme.palette.primary.main,
      color: '#707070',
      // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))
