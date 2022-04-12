import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
