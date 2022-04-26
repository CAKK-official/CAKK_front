import styled from '@emotion/styled'

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 99;
  height: 4.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};

  section {
    display: flex;
    width: ${({ theme }) => theme.screen.main};
    justify-content: space-between;

    a {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;
    }
  }
`

export const Footer = styled.footer`
  position: relative;
  bottom: 0;
  background-color: #eaeaea;
  height: 200px;
`
