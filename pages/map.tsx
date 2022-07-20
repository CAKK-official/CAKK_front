import Script from 'next/script'
import React from 'react'
import Layout from '../components/layout'
import MapView from '../components/map'
import { CategoryProvider, MapLocationProvider } from '../context'
import { KakaoMapProvider } from '../context/KakaoMapContext'

declare global {
  interface Window {
    kakao: any
  }
}

const MapPage = () => {
  return (
    <KakaoMapProvider>
      <MapLocationProvider>
        <CategoryProvider>
          <Layout>
            <MapView />
          </Layout>
        </CategoryProvider>
      </MapLocationProvider>
    </KakaoMapProvider>
  )
}

export default MapPage
