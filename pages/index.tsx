import type { GetServerSideProps, GetStaticProps } from 'next'
import Head from 'next/head'
import BannerContainer from '../components/main/banner'
import Layout from '../components/layout'
import SeacrhContainer from '../components/main/search/SeacrhContainer'
import RankContainer from '../components/main/rank-section/RankContainer'
import AreaContainer from '../components/main/area-section'
import * as Styled from '../styles/home'
import { CategoryProvider, LocationProvider } from '../context'

import { fetchPopular, ItemResponseProps } from '../src/api/api'

const Home = ({ data }: { data: ItemResponseProps[] }) => {
  return (
    <Layout>
      <Head>
        <title>🎂 케이크크</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Styled.Home>
        <LocationProvider>
          <CategoryProvider>
            <BannerContainer />
            <SeacrhContainer />
            <RankContainer data={data} />
            {/* <AreaContainer /> */}
          </CategoryProvider>
        </LocationProvider>
      </Styled.Home>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const data = await fetchPopular()
    return {
      props: { data }, // will be passed to the page component as props
    }
  } catch (err) {
    console.error('Failed to fetch data in /', err)
    return { props: { data: [] } }
  }
}

export default Home
