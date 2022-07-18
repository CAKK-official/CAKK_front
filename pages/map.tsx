import Script from 'next/script'
import React from 'react'
import Layout from '../components/layout'
import MapView from '../components/map'
import {
  CategoryProvider,
  MapLocationProvider,
  NaverMapProvider,
} from '../context'
import { KakaoMapProvider } from '../context/KakaoMapContext'

const MapPage = () => {
  return (
    <>
      {/* <Script
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`}
        // src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_API_KEY}`}
        strategy="beforeInteractive"
      /> */}
      <NaverMapProvider>
        <KakaoMapProvider>
          <MapLocationProvider>
            <CategoryProvider>
              <Layout>
                <MapView />
              </Layout>
            </CategoryProvider>
          </MapLocationProvider>
        </KakaoMapProvider>
      </NaverMapProvider>
    </>
  )
}

export default MapPage
