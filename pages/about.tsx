import Head from 'next/head'
import CarouselContainer from '../components/about/carousel'
import CategoryContainer from '../components/about/category'
import DescriptionContainer from '../components/about/description'
import IntroductionContainer from '../components/about/introduction'
import MissionContainer from '../components/about/mission'
import Layout from '../components/layout'
import * as Styled from '../styles/about'

const about = () => {
  return (
    <Layout>
      <Head>
        <title>π μΌμ΄ν¬ν¬</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Styled.About>
        <MissionContainer />
        <CarouselContainer />
        <IntroductionContainer />
        <CategoryContainer />
        <DescriptionContainer />
      </Styled.About>
    </Layout>
  )
}

export default about
