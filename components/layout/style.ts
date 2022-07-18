import styled from '@emotion/styled'

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 99;
  height: var(--header-height);

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
      /* border-radius: 8px; */
      /* box-shadow: 0px 3px 22px rgba(112, 0, 0, 0.08); */
    }

    button {
      cursor: pointer;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      /* box-shadow: 0px 3px 22px rgba(112, 0, 0, 0.08); */
      border: none;
      background: none;
    }
  }
`

export const Footer = styled.footer`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  bottom: 0;
  background-color: #000000;
  height: 180px;
  gap: 15px;
`
export const FooterInnerBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  a {
    cursor: pointer;
    text-decoration: none;
    color: #656565;
  }
`

export const Icon = styled.div`
  position: absolute;
  top: 70px;
  right: 160px;
  cursor: pointer;
`
