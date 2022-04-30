import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string
      borderColor: string
      backgroundColor: string
      fontColor: string
    }
    screen: {
      main: string
    }
  }
}
