import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Layout from '../../components/layout'
import * as Styled from '../../styles/home'
import React, { useEffect, useState } from 'react'
import { ShopInfoContainer } from '../../components/detail/shopinfo-container'
import { ItemSwiperContainer } from '../../components/item-container'
import { DetailResponse, fetchDetail } from '../../src/api/api'
import { useRouter } from 'next/router'

const Detail: NextPage = () => {
  const { query } = useRouter()
  const [data, setData] = useState<DetailResponse[]>([])

  // console.log(route);
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
        {/* <title>케이크크 | {data ? `🎂${data[0].name}` : 'Loading...'}</title> */}
        <title>케이크크</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          defer
          src="https://developers.kakao.com/sdk/js/kakao.min.js"
        ></script>
      </Head>
      <div></div>
      {data.length !== 0 ? (
        <Styled.Home>
          <ItemSwiperContainer count={3} items={data[0].pictArray} />
          <ShopInfoContainer
            address={data[0].address}
            id={data[0].id}
            title={data[0].name}
            desc={data[0].notice}
            categories={data[0].storeCategory}
            tel={data[0].tel}
            opened={data[0].opend}
            closed={data[0].closed}
            url={data[0].url}
            latlng={data[0].latlng}
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
