import styled from '@emotion/styled'

export const MissionContainer = styled.div`
  position: relative;
  width: 100%;
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
  }

  .text-section {
    /* position: relative; */
    background: #ffffffcc;
    padding: 1rem;
    border-radius: 8px;
    position: absolute;
    left: 17%;
    z-index: 2;
    margin: auto;

    /* width: ${({ theme }) => theme.screen.main}; */

    .about-logo {
      position: relative;
      width: 320px;
      height: 200px;
    }
    span {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`
