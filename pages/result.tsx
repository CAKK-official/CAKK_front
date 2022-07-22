import { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { fetchSearch } from '../src/api/api'
import AreaContaier from '../components/result/area-section'
import { CategoryProvider, LocationProvider } from '../context'
import SearchContainer from '../components/result/search/SearchContainer'
import * as Styled from '../styles/home'

const Result: NextPage = () => {
  const router = useRouter()
  const category = router.query.category as string

  return (
    <Layout>
      <Head>
        <title>케이크크 | 🎂{category}</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          defer
          src="https://developers.kakao.com/sdk/js/kakao.min.js"
        ></script>
      </Head>
      <Styled.Home>
        <LocationProvider>
          <CategoryProvider>
            <div className="search-container">
              <SearchContainer />
            </div>

            <div className="result-container">
              <AreaContaier />
            </div>
          </CategoryProvider>
        </LocationProvider>
      </Styled.Home>
    </Layout>
  )
}

export default Result
