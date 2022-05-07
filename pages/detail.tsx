import { NextPage } from 'next'
import Head from 'next/head'
import BannerContainer from '../components/main/banner'
import Layout from '../components/layout'
import React from 'react'
import { ShopInfoContainer } from '../components/detail/shopinfo-container'

const DUMMYDATA = {
  id: 1,
  name: '을지로 앵초 케이크',
  address: '서울특별시 중구 창경궁로5길 18',
  tel: '02-402-4590',
  notice:
    '직접 구운 촉촉한 시트와 크림치즈크림을 사용합니다. 케이크예약은 카카오톡채널 “을지로앵초” 디엠X',
  url: 'Dummyurl',
  menu: 'Dummymenu',
  beforebuy:
    '### Vestibulum ante ipsum primis #### in faucibus orci luctus et ultrices  posuere cubilia Curae; Duis faucibus accumsan odio. ',
  afterbuy:
    '### Vestibulum ante ipsum primis #### in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curab',
  whenbuy:
    '### Vestibulum ante ipsum primis #### in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curab',
  opened: '화요일 - 일요일 13:00 - 19:00',
  closed: '매주 월요일 정기 휴무, 화요일 격주 휴무',
  latlng: [12.323123421, 23.2312412412],
  pictArray: [
    'http://dummyimage.com/176x100.png/ff4444/ffffff',
    'http://dummyimage.com/246x100.png/5fa2dd/ffffff',
  ],
  storeCategory: ['photo', 'lunch', 'tiara', 'letter', 'solid'],
}

//TODO : 상의후 BannerContainer에 slidesPerView 인자로 넘겨주기
const Detail: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>🎂</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BannerContainer />
      <ShopInfoContainer
        title={DUMMYDATA.name}
        desc={DUMMYDATA.notice}
        categories={DUMMYDATA.storeCategory}
        tel={DUMMYDATA.tel}
        opened={DUMMYDATA.opened}
        closed={DUMMYDATA.closed}
        url={DUMMYDATA.url}
        latlng={DUMMYDATA.latlng}
      />
    </Layout>
  )
}

export default Detail