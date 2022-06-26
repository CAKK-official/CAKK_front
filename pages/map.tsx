import Script from 'next/script'
import React from 'react'
import Layout from '../components/layout'
import MapView from '../components/map'
import {
  CategoryProvider,
  MapLocationProvider,
  NaverMapProvider,
} from '../context'

const MapPage = () => {
  return (
    <>
      <Script
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_API_KEY}`}
        strategy="beforeInteractive"
      />
      <NaverMapProvider>
        <MapLocationProvider>
          <CategoryProvider>
            <Layout>
              <MapView />
            </Layout>
          </CategoryProvider>
        </MapLocationProvider>
      </NaverMapProvider>
    </>
  )
}

// export const getStaticProps: GetServerSideProps = async (context) => {
//   // const data = await fetchPopular()
//   // const response = await fetch('http://localhost:3000/api/cakestore/popular')
//   // const data = await response.json()
//   // console.log('data fetch', data)

//   // const data = await fetchCategorySearch(
//   //   `{addresses: '["광진구"]', category: 'null'}`
//   // )

//   // const { data } = await fetchSearch(1, {
//   //   addresses: ['광진구'],
//   //   category: 'null',
//   // })

//   const data = [] as ItemResponseProps[]

//   return {
//     props: { data }, // will be passed to the page component as props
//   }
// }

export default MapPage
