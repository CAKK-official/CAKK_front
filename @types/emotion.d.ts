import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      // primary: string
      // borderColor: string
      // backgroundColor: string
      // fontColor: string

      // Style guide
      red: string
      pink: {
        A80: string
        A50: string
        A20: string
      }
      black: string
      deepblack: string
      gray: {
        A80: string
        A50: string
        A20: string
      }
      white: string
    }
    screen: {
      main: string
    }
  }
}
