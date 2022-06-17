import { GetServerSideProps } from 'next'
import Script from 'next/script'
import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import { Map, Marker } from '../components/naver-map'
import { NaverMapProvider } from '../context'
import { fetchSearch, ItemResponseProps } from '../src/api/api'

const MapPage = ({ data }: { data: ItemResponseProps[] }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [lat, setLat] = useState<number>(37.4954178)
  const [lng, setLng] = useState<number>(127.0388462)

  // FETCH CURRENT LOCATION
  useEffect(() => {
    const { geolocation } = navigator

    geolocation.getCurrentPosition(
      (position) => {
        // success.
        setLat(position.coords.latitude)
        setLng(position.coords.longitude)
        setIsLoading(false)
      },
      (error) => {
        console.warn('Fail to fetch current location', error)
        setLat(37.4954178)
        setLng(127.0388462)
        setIsLoading(false)
      },
      {
        enableHighAccuracy: false,
        maximumAge: 0,
        timeout: Infinity,
      }
    )
  }, [])

  return (
    <>
      <Script
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_API_KEY}`}
        strategy="beforeInteractive"
      ></Script>

      <NaverMapProvider>
        <Layout>
          {!isLoading && (
            <Map lat={lat} lng={lng}>
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
          )}
        </Layout>
      </NaverMapProvider>
    </>
  )
}

export const getStaticProps: GetServerSideProps = async (context) => {
  // const data = await fetchPopular()
  // const response = await fetch('http://localhost:3000/api/cakestore/popular')
  // const data = await response.json()
  // console.log('data fetch', data)

  // const data = await fetchCategorySearch(
  //   `{addresses: '["광진구"]', category: 'null'}`
  // )

  const { data } = await fetchSearch(1, {
    addresses: ['광진구'],
    category: 'null',
  })

  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default MapPage
