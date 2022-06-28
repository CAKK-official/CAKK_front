import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // useEffect(() => {
  //   window.Kakao.init(process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY)
  // }, [])

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
