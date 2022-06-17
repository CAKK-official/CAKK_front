import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { fetchSearch } from '../src/api/api'
import AreaContainer from '../components/main/area-section'
import { CategoryProvider, LocationProvider } from '../context'

const Result: NextPage = () => {
  const router = useRouter()
  const category = router.query.category as string

  useEffect(() => {
    //빈배열일 때 에러 해결되었는지 오빠에게 물어보고 코드 수정하기
    //NOTE: 빈배열일때 아직도 ["null"]을 넣어야하고 (internal server error 500)

    if (category !== undefined) {
      console.log('👻', category)
      fetchSearch(0, { addresses: ['null'], category: category }).then((res) =>
        console.log(res)
      )
    }
  }, [category])

  return (
    <Layout>
      <Head>
        <title>케이크크 | 🎂카테고리페이지</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          defer
          src="https://developers.kakao.com/sdk/js/kakao.min.js"
        ></script>
      </Head>
      <LocationProvider>
        <CategoryProvider>
          <div>hello?</div>
          <div>{category}</div>
          <AreaContainer />
        </CategoryProvider>
      </LocationProvider>
    </Layout>
  )
}

export default Result
