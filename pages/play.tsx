import { motion } from 'framer-motion'
import { GetServerSideProps } from 'next'
import React from 'react'
import Layout from '../components/layout'
import AnimatePlayItem from '../components/play/AnimatePlayItem'
import DetailPlayItem from '../components/play/DetailPlayItem'
import MainPlayItem from '../components/play/MainPlayItem'
import NaturalImage from '../components/play/NaturalImage'
import ImagePlayItem from '../components/play/ImagePlayItem'
import { fetchPopular, ItemResponseProps } from '../src/api/api'
import Image from 'next/image'

const variants = {
  hidden: {
    width: '100vw',
    background: '#fffe99',
  },
  visible: {
    width: '40vw',
    background: '#93ff21',
    transition: {
      duration: 2,
      delay: 1,
    },
  },
}

const columnVariants = {
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
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          style={{ backgroundColor: 'greenyellow' }}
        >
          <div
            style={{
              position: 'sticky',
              top: '80px',
              backgroundColor: 'dodgerblue',
            }}
          >
            <div
              style={{ position: 'relative', backgroundColor: 'dodgerblue' }}
            >
              <NaturalImage src="/img/banner.png" alt="banner" />
              <h1
                dangerouslySetInnerHTML={{
                  __html: '솔직히<br/>케이크크가<br/>제일 편하잖아요~',
                }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 20,
                  backgroundColor: 'white',
                }}
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={columnVariants}
          initial="hidden"
          animate="visible"
          style={{
            backgroundColor: '#ddff00',
          }}
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
          style={{
            overflow: 'hidden',
          }}
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
