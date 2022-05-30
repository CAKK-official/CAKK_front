import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { fetchSearch } from '../src/api/api'

const Result: NextPage = () => {
  const router = useRouter()
  const { category } = router.query

  useEffect(() => {
    //TODO : 빈배열일 때 에러 해결되었는지 오빠에게 물어보고 코드 수정하기
    if (typeof category === 'string') {
      fetchSearch(0, { addresses: [], category: category }).then((res) =>
        console.log(res)
      )
    }
  }, [])
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
      <div>result페이지</div>
      <div>{category}</div>
    </Layout>
  )
}
export default Result
