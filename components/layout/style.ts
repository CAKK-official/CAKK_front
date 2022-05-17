import styled from '@emotion/styled'

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 99;
  height: 4.5rem;

  display: flex;
  justify-content: center;
  padding-top: 1rem;
  background-color: white;
  border-bottom: 1px solid ${({ theme }) => theme.colors.pink.A20};

  section {
    display: flex;
    width: ${({ theme }) => theme.screen.main};
    justify-content: space-between;

    a {
      color: ${({ theme }) => theme.colors.pink.A80};
      text-decoration: none;
    }

    svg {
    }
  }

  // LOGO
  .logo {
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  // 케이크크 + my page button
  .button-container {
    display: flex;
    align-items: center;

    a {
      margin-right: 1.25rem;
      padding: 0.75rem 1rem;
      border-radius: 8px;
      box-shadow: 0px 3px 22px rgba(112, 0, 0, 0.08);
    }

    button {
      cursor: pointer;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      box-shadow: 0px 3px 22px rgba(112, 0, 0, 0.08);
      border: none;
      background: none;
    }
  }
`

export const Footer = styled.footer`
  position: relative;
  bottom: 0;
  background-color: #eaeaea;
  height: 200px;
`
