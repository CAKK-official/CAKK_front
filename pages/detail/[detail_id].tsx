import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Layout from '../../components/layout'
import * as Styled from '../../styles/home'
import React, { useEffect } from 'react'
import { ShopInfoContainer } from '../../components/detail/shopinfo-container'
import { ItemSwiperContainer } from '../../components/item-container'
import { DetailResponse, fetchDetail } from '../../src/api/api'

const Detail: NextPage<{ data: DetailResponse[] }> = ({ data }) => {
  console.log('DaTA!', data)

  return (
    <Layout>
      <Head>
        <title>케이크크 | 🎂{data[0].name}</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          defer
          src="https://developers.kakao.com/sdk/js/kakao.min.js"
        ></script>
      </Head>
      <Styled.Home>
        <ItemSwiperContainer count={3} items={data[0].pictArray} />
        <ShopInfoContainer
          title={data[0].name}
          desc={data[0].notice}
          categories={data[0].storeCategory}
          tel={data[0].tel}
          opened={data[0].opened}
          closed={data[0].closed}
          url={data[0].url}
          latlng={data[0].latlng}
        />
      </Styled.Home>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ['/detail/1', '/detail/2', '/detail/3'],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Fetch Detail before render
  const data = await fetchDetail(parseInt(params?.detail_id as string))
  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default Detail
