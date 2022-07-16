import { Theme } from '@emotion/react'

const colors = {
  // primary: '#EE8288',
  // backgroundColor: '#F9CCC9',

  // borderColor: '#FBF2F4',
  // fontColor: '#707070',

  // Style guide
  red: '#E72E40',
  pink: {
    A80: '#EE8288',
    A50: '#F9CCC9',
    A20: '#FEF6F4',
  },

  black: '#383838',
  deepblack: '#000000',
  gray: {
    A80: '#707070',
    A50: '#EAEAEA',
    A20: '#F6F6F6',
  },

  white: '#FFFFFF',
}

const screen = {
  main: '60.25rem',
}

const theme: Theme = {
  colors,
  screen,
}

export default theme
