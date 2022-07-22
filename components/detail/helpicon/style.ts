import styled from '@emotion/styled'
import theme from '../../../assets/theme/theme'

export const helpIconBox = styled.div`
  position: fixed;

  right: 4rem;
  top: 50%;
  width: 140px;
  height: 140px;
  background-color: ${theme.colors.pink.A20};
  border-radius: 50%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const redSpan = styled.div`
  color: ${theme.colors.red};
  font-weight: 600;
`
