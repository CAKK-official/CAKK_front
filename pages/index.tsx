import type { GetStaticProps } from 'next'
import Layout from '../components/layout'

import { ItemResponseProps } from '../src/api/api'
import { PlayBanner } from '../components/play'
import { motion } from 'framer-motion'
import MainPlayItem from '../components/play/item/MainPlayItem'
import ImagePlayItem from '../components/play/item/ImagePlayItem'
import DetailPlayItem from '../components/play/item/DetailPlayItem'
import AnimatePlayItem from '../components/play/item/AnimatePlayItem'
import Head from 'next/head'
import { SubPlayItem1, SubPlayItem2 } from '../components/play/item/SubPlayItem'

const columnVariants1 = {
  hidden: {
    width: '0vw',
    y: '100%',
  },
  visible: {
    width: '25vw',
    y: '0%',
    transition: {
      width: {
        duration: 0,
      },
      y: {
        duration: 1,
      },
    },
  },
}

const columnVariants2 = {
  hidden: {
    width: '0vw',
    y: '-100%',
  },
  visible: {
    width: '25vw',
    y: '0%',
    transition: {
      width: {
        duration: 0,
      },
      y: {
        duration: 1,
      },
    },
  },
}

const Home = ({ data }: { data: ItemResponseProps[] }) => {
  ;<Head>
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
  </Head>
  return (
    <Layout>
      <div style={{ display: 'flex' }}>
        <PlayBanner />

        <motion.div
          variants={columnVariants1}
          initial="hidden"
          animate="visible"
        >
          <MainPlayItem />
          <ImagePlayItem
            mainImage="/img/ad/bakeryforest.png"
            heading="No 밀가루 Only 국산 쌀가루<br/>베이커리 숲에서 건강한 케이크를 맛보세요"
            link={'/detail/6'}
          />
          <ImagePlayItem
            mainImage="/img/ad/suia.png"
            heading="귀여운 입체 케이크를 찾는다면?<br/>
          수이아로 오세요!"
            link={'/detail/40'}
          />
          <SubPlayItem1 />
          <ImagePlayItem
            mainImage="/img/ad/sosweetmacaron.png"
            heading="디저트가 맛있는 카페 :p<br/>
            글루텐프리&로우슈가 디저트를 만드는<br/>
            쌀베이크샵 ‘쏘스윗마카롱’을 소개합니다."
            link={'/detail/5'}
          />
          <ImagePlayItem
            mainImage="/img/ad/lucky.png"
            heading="특별한 날, 행운의 메시지를 전하고 싶다면?<br/>
            럭키 니키 케이키에서!"
            link={'/detail/27'}
          />
        </motion.div>
        <motion.div
          variants={columnVariants2}
          initial="hidden"
          animate="visible"
        >
          <DetailPlayItem
            mainImage="/img/ad/goldfish1.png"
            heading={'힙지로 감성,<br/>이제 금붕어에서 느껴보세요'}
            data={[
              {
                id: 1,
                image: '/img/ad/goldfish2.png',
                submain: '홀케이크',
                main: '빈티지 거울 케이크',
                tags: '#중구 #레터링 케이크',
              },
              {
                id: 2,
                image: '/img/ad/goldfish3.png',
                submain: '하트케이크',
                main: '하트 포토케이크',
                tags: '#중구 #포토 케이크',
              },
            ]}
            link={'/detail/52'}
          />
          <AnimatePlayItem />
          <DetailPlayItem
            mainImage="/img/ad/youngandsweet.png"
            heading={`인공색소가 걱정이신가요?<br/>천연가루만 사용하는 영앤스윗으로!`}
            data={[
              {
                id: 1,
                image: '/img/ad/youngandsweet2.png',
                submain: '홀케이크',
                main: '100% 동물성 생크림 케이크 3종',
                tags: '#용산구 #레터링 케이크',
              },
              {
                id: 2,
                image: '/img/ad/youngandsweet3.png',
                submain: '도시락케이크',
                main: '미니 티아라 케이크',
                tags: '#용산구 #도시락 케이크 #레터링 케이크',
              },
            ]}
            link={'/detail/56'}
          />
          <SubPlayItem2 />
          <DetailPlayItem
            mainImage="/img/ad/daisy1.png"
            heading={`시트부터 크림까지 직접 만드는<br/>데이지 케이크`}
            data={[
              {
                id: 1,
                image: '/img/ad/daisy2.png',
                submain: '홀케이크',
                main: '백설공주 멜팅 케이크',
                tags: '#마포구 #레터링 케이크',
              },
              {
                id: 2,
                image: '/img/ad/daisy3.png',
                submain: '레터링 케이크',
                main: '스퀘어 케이크',
                tags: '#마포구 #레터링 케이크',
              },
            ]}
            link={'/detail/21'}
          />
        </motion.div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  // const data = await fetchPopular()
  // const response = await fetch('http://localhost:3000/api/cakestore/popular')
  // const data = await response.json()
  // console.log('data fetch', data)

  const data = [] as ItemResponseProps[]

  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default Home
