import Image from 'next/image'
import React from 'react'
import { useNaverMapState } from '../../../context'
import { MapResponse } from '../../../src/api/api'
import * as S from './style'

interface MarketContainerInterface {
  data: MapResponse[]
}

const MarketItem: React.FC<{ market: MapResponse }> = ({ market }) => {
  const { NaverMap } = useNaverMapState()

  function handleMarketItemClick(latlng: [number, number]) {
    NaverMap.setZoom(14)
    const location = new naver.maps.LatLng(latlng[0], latlng[1] - 0.01)
    NaverMap.panTo(location, {})
  }

  return (
    <S.MarketItem onClick={() => handleMarketItemClick(market.latlng)}>
      <div className="image-container">
        <ul className="image-list">
          {market.pictArray.length < 3 ? (
            <li className="image-item">
              <Image
                src={market.pictArray[0]}
                alt={market.pictArray[0]}
                width={500}
                height={240}
                objectFit="cover"
              />
            </li>
          ) : (
            <>
              {market.pictArray.slice(0, 3).map((img, idx) => (
                <li className="image-item" key={idx}>
                  <Image
                    src={img}
                    alt={img}
                    width={500}
                    height={500}
                    objectFit="cover"
                  />
                </li>
              ))}
            </>
          )}
        </ul>
      </div>
      <div className="info-container">
        <h2>{market.name}</h2>
        <span>{market.address}</span>
      </div>
    </S.MarketItem>
  )
}

const MarketContainer: React.FC<MarketContainerInterface> = ({ data }) => {
  return (
    <S.MarketContainer>
      <div>
        {data.map((market: MapResponse) => (
          <MarketItem key={market.id} market={market} />
        ))}
      </div>
    </S.MarketContainer>
  )
}

export default MarketContainer
