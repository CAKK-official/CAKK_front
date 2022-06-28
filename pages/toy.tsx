import { GetServerSideProps } from 'next'
import React from 'react'
import Layout from '../components/layout'
import { ToyBanner, ToyGrid } from '../components/toy'
import { fetchPopular, ItemResponseProps } from '../src/api/api'

const ToyPage = ({ data }: { data: ItemResponseProps[] }) => {
  return (
    <Layout>
      <div style={{ display: 'flex' }}>
        <ToyBanner />
        <ToyGrid data={data} />
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

export default ToyPage
