import Link from 'next/link'
import React from 'react'
import Icon from '../icon'
import * as Styled from './style'

const Header: React.FC = () => {
  return (
    <Styled.Header>
      {/*TODO: Mobile view goes here */}
      <section>
        <div className="logo">
          <Link href="/" passHref>
            <div>
              <Icon color="#000000" name="logo" width={120} height={50} />
            </div>
          </Link>
        </div>
        <div className="button-container">
          <Link href="/result">지역&카테고리 검색</Link>
          <Link href="/map">지도 검색</Link>
          <Link href="/about">케이크크 스토리</Link>
          {/* <button className="toggle-button my-page">
            <Icon name="icon_user_fill" width={20} height={20} />
          </button> */}
        </div>
      </section>
    </Styled.Header>
  )
}

export default Header
