import styled from '@emotion/styled'

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 99;
  height: 4.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};

  section {
    display: flex;
    width: 60.25rem;
    justify-content: space-between;
  }
`

export const Footer = styled.footer`
  position: relative;
  bottom: 0;
  background-color: #eaeaea;
  height: 200px;
`
