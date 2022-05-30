import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const Result: NextPage = () => {
  const router = useRouter()
  console.log(router.query.category)

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
      <div>{router.query.category}</div>
    </Layout>
  )
}
export default Result
