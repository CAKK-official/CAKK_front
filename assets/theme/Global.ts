import { css } from '@emotion/react'

export const global = css`
  // Font Face
  @font-face {
    font-family: 'Inter-Bold';
    src: url('/fonts/Inter-Bold.ttf');
  }
  @font-face {
    font-family: 'Inter-SemiBold';
    src: url('/fonts/Inter-SemiBold.ttf');
  }
  @font-face {
    font-family: 'Inter-Medium';
    src: url('/fonts/Inter-Medium.ttf');
  }
  @font-face {
    font-family: 'Inter-Regular';
    src: url('/fonts/Inter-Regular.ttf');
  }
  @font-face {
    font-family: 'Sofia Pro Bold';
    src: url('/fonts/Sofia Pro Bold Az.otf');
  }
  @font-face {
    font-family: 'Sofia Pro Semi Bold';
    src: url('/fonts/Sofia Pro Semi Bold Az.otf');
  }
  /* @font-face {
    font-family: 'Calfine demo';
    src: url('/fonts/Calfine demo.otf');
  } */

  :root {
    --black: #383838;
    --gray80: #707070;
    --gray50: #eaeaea;
    --gray20: #f6f6f6;
    --white: #ffffff;

    --red: #e72e40;
    --pink80: #ee8288;
    --pink50: #f9ccc9;
    --pink20: #fef6f4;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Inter-Regular', -apple-system, BlinkMacSystemFont, Segoe UI,
      Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;

    color: var(--gray80);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--black);
  }

  h1,
  h3 {
    font-family: 'Inter-Bold', 'Sofia Pro Bold', sans-serif;
  }

  h2 {
    font-family: 'Sofia Pro Bold', sans-serif;
  }

  h4,
  h6 {
    font-family: 'Inter-SemiBold', 'Sofia Pro Semi Bold', sans-serif;
  }

  h5 {
    font-family: 'Sofia Pro Semi Bold', sans-serif;
  }
`
