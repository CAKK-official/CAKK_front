import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Layout from '../../components/layout'
import * as Styled from '../../styles/home'
import React from 'react'
import { ShopInfoContainer } from '../../components/detail/shopinfo-container'
import { ItemSwiperContainer } from '../../components/item-container'
import { DetailResponse, fetchDetail } from '../../src/api/api'

// const DUMMYDATA = {
//   id: 1,
//   name: '을지로 앵초 케이크',
//   address: '서울특별시 중구 창경궁로5길 18',
//   tel: '02-402-4590',
//   notice:
//     '직접 구운 촉촉한 시트와 크림치즈크림을 사용합니다. 케이크예약은 카카오톡채널 “을지로앵초” 디엠X',
//   url: 'Dummyurl',
//   menu: 'Dummymenu',
//   beforebuy:
//     '### Vestibulum ante ipsum primis #### in faucibus orci luctus et ultrices  posuere cubilia Curae; Duis faucibus accumsan odio. ',
//   afterbuy:
//     '### Vestibulum ante ipsum primis #### in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curab',
//   whenbuy:
//     '### Vestibulum ante ipsum primis #### in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curab',
//   opened: '화요일 - 일요일 13:00 - 19:00',
//   closed: '매주 월요일 정기 휴무, 화요일 격주 휴무',
//   latlng: [12.323123421, 23.2312412412],
//   pictArray: [
//     'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=f180_180&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20201124_103%2F1606225231770Wlr8j_JPEG%2FuxzK67sNJipTXsK4zF-7WT6p.jpeg.jpg',
//     'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=f180_180&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20201124_103%2F1606225231770Wlr8j_JPEG%2FuxzK67sNJipTXsK4zF-7WT6p.jpeg.jpg',
//     'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=f180_180&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20201124_103%2F1606225231770Wlr8j_JPEG%2FuxzK67sNJipTXsK4zF-7WT6p.jpeg.jpg',
//   ],
//   storeCategory: ['photo', 'lunch', 'tiara', 'letter', 'solid'],
// }

//TODO : itemSwiperContainer에 item src로 넘길 수 있는지 확인하기
const Detail: NextPage<{ data: DetailResponse[] }> = ({ data }) => {
  console.log('DaTA!', data)

  return (
    <Layout>
      <Head>
        <title>케이크크 | 🎂{data[0].name}</title>
        <meta name="description" content="${DUMMYDATA}의 상세 정보" />
        <link rel="icon" href="/favicon.ico" />
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
