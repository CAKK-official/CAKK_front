import { motion } from 'framer-motion'
import { GetServerSideProps } from 'next'
import React from 'react'
import Layout from '../components/layout'
import AnimatePlayItem from '../components/play/item/AnimatePlayItem'
import DetailPlayItem from '../components/play/item/DetailPlayItem'
import MainPlayItem from '../components/play/item/MainPlayItem'
import ImagePlayItem from '../components/play/item/ImagePlayItem'
import { ItemResponseProps } from '../src/api/api'
import { PlayBanner } from '../components/play'

const columnVariants1 = {
  hidden: {
    width: '0vw',
    y: '100%',
  },
  visible: {
    width: '30vw',
    y: '0%',
    transition: {
      delay: 3,
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
    width: '30vw',
    y: '0%',
    transition: {
      delay: 3,
      width: {
        duration: 0,
      },
      y: {
        duration: 1,
      },
    },
  },
}

const PlayPage = ({ data }: { data: ItemResponseProps[] }) => {
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
            mainImage="/img/Rectangle 617.png"
            heading="No 밀가루 Only 국산 쌀가루<br/>베이커리 숲에서 건강한 케이크를 맛보세요"
          />
          <ImagePlayItem
            mainImage="/img/Rectangle 621.png"
            heading="귀여운 입체 케이크를 찾는다면?<br/>
          수이아로 오세요!"
          />
        </motion.div>
        <motion.div
          variants={columnVariants2}
          initial="hidden"
          animate="visible"
        >
          <DetailPlayItem
            mainImage="/img/Rectangle 614.png"
            heading={'힙지로 감성,<br/>이제 금붕어에서 느껴보세요'}
            data={[
              {
                id: 1,
                image: '/img/Rectangle 615.png',
                submain: '홀케이크',
                main: '빈티지 거울 케이크',
                tags: '#중구 #레터링 케이크',
              },
              {
                id: 2,
                image: '/img/Rectangle 616.png',
                submain: '하트케이크',
                main: '하트 포토케이크',
                tags: '#중구 #포토 케이크',
              },
            ]}
          />
          <AnimatePlayItem />
        </motion.div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetServerSideProps = async (context) => {
  // const data = await fetchPopular()
  // const response = await fetch('http://localhost:3000/api/cakestore/popular')
  // const data = await response.json()
  // console.log('data fetch', data)

  const data = []

  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default PlayPage
