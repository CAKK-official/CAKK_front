import { GetServerSideProps } from 'next'
import Script from 'next/script'
import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import MapView from '../components/map'
import {
  CategoryProvider,
  LocationProvider,
  NaverMapProvider,
} from '../context'
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
        <LocationProvider>
          <CategoryProvider>
            <Layout>
              <MapView isLoading={isLoading} lat={lat} lng={lng} />
            </Layout>
          </CategoryProvider>
        </LocationProvider>
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

  // const { data } = await fetchSearch(1, {
  //   addresses: ['광진구'],
  //   category: 'null',
  // })

  const data = [] as ItemResponseProps[]

  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default MapPage
