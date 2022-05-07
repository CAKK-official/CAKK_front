import React, { useEffect } from 'react'
import { css, jsx } from '@emotion/react'
import Chip from '../../main/chip'
import InfoBox from '../infoBox/InfoBox'
import MapContainer from '../map/MapContainer'

interface ShopInfoInterface {
  title: string
  desc: string
  categories: Array<string>
  tel: string
  opened: string
  closed: string
  url: string
  latlng: Array<number>
}
const ShopInfoContainer: React.FC<ShopInfoInterface> = ({
  title,
  desc,
  categories,
  tel,
  opened,
  closed,
  url,
  latlng,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <h3
        css={css`
          color: #707070;
        `}
      >
        {desc}
      </h3>
      <div style={{ display: 'flex' }}>
        {categories.map((category: string) => (
          <Chip
            primary
            key={category}
            onClick={() => {
              console.log('HI')
            }}
          >
            #{category}
          </Chip>
        ))}
      </div>
      <MapContainer lat={latlng[0]} lng={latlng[1]} />
      <div style={{ display: 'flex' }}>
        <InfoBox title="전화번호" sub={tel} canCopy={true} />
        <InfoBox title="영업시간" sub={opened} />
        <InfoBox title="휴무일" sub={closed} />
        <InfoBox title="인스타" sub={url} />
      </div>
    </div>
  )
}
export default ShopInfoContainer
