import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { ItemResponseProps } from '../../src/api/api'
import DetailPlayItem from './DetailPlayItem'
import ImagePlayItem from './ImagePlayItem'
import NaturalImage from './NaturalImage'
import * as Styled from './style'

const PlayGrid = ({ data }: { data: ItemResponseProps[] }) => {
  console.log(data)

  return (
    <Styled.PlayGrid>
      <div className="grid-container">
        <DetailPlayItem
          mainImage="/img/Rectangle 614.png"
          heading={'힙지로 감성,<br/>이제 금붕어에서 느껴보세요'}
          data={[
            {
              id: 1,
              image: '/img/Rectangle 615.png',
              submain: '홀케이크',
              main: '빈티지 거울 케이크',
              tags: '#중구 #레터링 케이크',
            },
            {
              id: 2,
              image: '/img/Rectangle 616.png',
              submain: '하트케이크',
              main: '하트 포토케이크',
              tags: '#중구 #포토 케이크',
            },
          ]}
        />

        <ImagePlayItem
          mainImage="/img/Rectangle 617.png"
          heading="No 밀가루 Only 국산 쌀가루<br/>베이커리 숲에서 건강한 케이크를 맛보세요"
        />
        <div className="item-container">
          <h1>
            주문제작 케이크
            <br />
            아직도 직접 검색해?
            <br />
            이제 케이크크에서 한번에!
          </h1>
          <Link href="/">케이크 가게 찾으러 가기!</Link>
        </div>
        <DetailPlayItem
          mainImage="/img/Rectangle 618.png"
          heading={'시트부터 크림까지 직접 만드는<br/>데이지 케이크'}
          data={[
            {
              id: 1,
              image: '/img/Rectangle 619.png',
              submain: '홀케이크',
              main: '백설공주 멜팅 케이크',
              tags: '#마포구 #레터링 케이크',
            },
            {
              id: 2,
              image: '/img/Rectangle 620.png',
              submain: '레터링 케이크',
              main: '스퀘어 케이크',
              tags: '#마포구 #레터링 케이크',
            },
          ]}
        />
        <div className="item-container center-container">
          <div className="animation-container">
            <span className="black">주문제작 케이크 정보는?</span>
            <div className="pink pink1">
              <span className="pink-text">케이크크케이크크케이크크</span>
              <span className="pink-text pink-text-2">
                케이크크케이크크케이크크
              </span>
            </div>
            <span className="black">주문제작 케이크 정보는?</span>
            <div className="pink pink2">
              <span className="pink-text">케이크크케이크크케이크크</span>
              <span className="pink-text pink-text-2">
                케이크크케이크크케이크크
              </span>
            </div>
            <span className="black">주문제작 케이크 정보는?</span>
            <div className="pink pink3">
              <span className="pink-text">케이크크케이크크케이크크</span>
              <span className="pink-text pink-text-2">
                케이크크케이크크케이크크
              </span>
            </div>
            <span className="black">주문제작 케이크 정보는?</span>
            <div className="pink pink4">
              <span className="pink-text">케이크크케이크크케이크크</span>
              <span className="pink-text pink-text-2">
                케이크크케이크크케이크크
              </span>
            </div>
          </div>
        </div>
        {/* </div>
      <div className="grid-container"> */}
        <ImagePlayItem
          mainImage="/img/Rectangle 621.png"
          heading="귀여운 입체 케이크를 찾는다면?<br/>
          수이아로 오세요!"
        />
      </div>
    </Styled.PlayGrid>
  )
}

export default PlayGrid
