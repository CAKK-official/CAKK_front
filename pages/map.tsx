import { GetServerSideProps } from 'next'
import Script from 'next/script'
import React, { useEffect, useRef } from 'react'
import { Map, Marker } from '../components/naver-map'
import { NaverMapProvider } from '../context'
import { fetchPopular, ItemResponseProps } from '../src/api/api'

const MapPage = ({ data }: { data: ItemResponseProps[] }) => {
  console.log(data)
  return (
    <>
      <Script
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_API_KEY}`}
        strategy="beforeInteractive"
      ></Script>
      <NaverMapProvider>
        <Map lat={37.3595704} lng={127.105399}>
          <Marker lat={37.3595704} lng={127.2}>
            ellldji
          </Marker>
          <Marker lat={37.3595704} lng={127.3}>
            ellldji
          </Marker>
          <Marker lat={37.3595704} lng={127.4}>
            ellldji
          </Marker>

          <Marker lat={37.3595704} lng={127.105399}>
            ellldji
          </Marker>
        </Map>
      </NaverMapProvider>
    </>
  )
}

export const getStaticProps: GetServerSideProps = async (context) => {
  // const data = await fetchPopular()
  // const response = await fetch('http://localhost:3000/api/cakestore/popular')
  // const data = await response.json()
  // console.log('data fetch', data)

  const data = await fetchPopular()

  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default MapPage
