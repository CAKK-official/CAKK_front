import Link from 'next/link'
import React from 'react'
import * as Styled from './style'

const Header: React.FC = () => {
  return (
    <Styled.Header>
      {/*TODO: Mobile view goes here */}
      <section>
        <div className="logo">
          <Link href="/">케이크크</Link>
        </div>
        {/* <div className="search-bar">Text area goes here</div> */}
        <div className="button-container">
          <Link href="/about">케이크크 스토리</Link>
          <button className="toggle-button my-page">M</button>
        </div>
      </section>
    </Styled.Header>
  )
}

export default Header
