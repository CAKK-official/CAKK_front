import styled from '@emotion/styled'

export const MissionContainer = styled.div`
  background-color: greenyellow;
  width: 100%;
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .text-section {
    margin: auto;
    width: ${({ theme }) => theme.screen.main};
  }
`
