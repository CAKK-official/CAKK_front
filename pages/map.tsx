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

export default MapPage
