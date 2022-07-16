import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Layout from '../../components/layout'
import * as Styled from '../../styles/home'
import React, { useEffect, useState } from 'react'
import { ShopInfoContainer } from '../../components/detail/shopinfo-container'
import { ItemSwiperContainer } from '../../components/item-container'
import { DetailResponse, fetchDetail } from '../../src/api/api'
import { useRouter } from 'next/router'
import HelpIcon from '../../components/detail/helpicon/helpicon'

const Detail: NextPage = () => {
  const { query } = useRouter()
  const [data, setData] = useState<DetailResponse[]>([])

  console.log(data[0])
  useEffect(() => {
    const fetchDetailData = async () => {
      try {
        const fetchedData = await fetchDetail(
          parseInt(query.detail_id as string)
        )
        setData(fetchedData)
        console.log(data)
      } catch (err) {
        console.error('Failed to fetch data in /detail/<detail id>', err)
      }
    }
    // console.log(query.detail_id)
    if (query.detail_id !== undefined) {
      fetchDetailData()
    }
  }, [query.detail_id])

  return (
    <Layout>
      <Head>
        <meta property="og:title" content="케이크크" />
        <meta property="og:url" content="cakk.site" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/102408030?s=200&v=4"
        />
        <meta property="og:site_name" content="케이크크" />
        <meta
          property="og:description"
          content="흩어져 있는 주문제작 케이크 가게의 정보를 모아서 보여주는 케이크크! 🍰 원하는 케이크 가게의 정보를 쉽고 빠르게 찾게 하기 위해 카테고리, 지역, 위치 기반으로 검색이 가능하며, 가게 상세 정보들을 보기 쉽게 정리 해 제공하고 있습니다"
        />
        <title>케이크크</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          defer
          src="https://developers.kakao.com/sdk/js/kakao.min.js"
        ></script>
      </Head>
      {data.length !== 0 ? (
        <Styled.Home>
          <HelpIcon />
          <ItemSwiperContainer count={3} items={data[0].pictArray} />
          <ShopInfoContainer
            address={data[0].address}
            id={data[0].id}
            name={data[0].name}
            notice={data[0].notice}
            categories={data[0].storeCategory}
            tel={data[0].tel}
            opend={data[0].opend}
            closed={data[0].closed}
            url={data[0].url}
            latlng={data[0].latlng}
            beforebuy={data[0].beforebuy}
            afterbuy={data[0].afterbuy}
            menu={data[0].menu}
            whenbuy={data[0].whenbuy}
          />
        </Styled.Home>
      ) : (
        <div>Loading</div>
      )}
    </Layout>
  )
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: ['/detail/1', '/detail/2', '/detail/3'],
//     fallback: 'blocking',
//   }
// }

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   // Fetch Detail before render
//   let data = [] as DetailResponse[]

//   try {
//     data = await fetchDetail(parseInt(params?.detail_id as string))
//   } catch (err) {
//     console.error('Failed to fetch data in /detail/<detail id>', err)
//   }

//   return {
//     props: { data }, // will be passed to the page component as props
//   }
// }

export default Detail
