import React from 'react'
import { css, jsx } from '@emotion/react'
import Chip from '../../main/chip'
import InfoBox from '../infoBox/InfoBox'

interface ShopInfoInterface {
  title: string
  desc: string
  categories: Array<string>
  tel: string
  opened: string
  closed: string
  url: string
}
const ShopInfoContainer: React.FC<ShopInfoInterface> = ({
  title,
  desc,
  categories,
  tel,
  opened,
  closed,
  url,
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

      <div style={{ display: 'flex', gap: '17px', alignItems: 'center' }}>
        <InfoBox title="전화번호" sub={tel} />
        <InfoBox title="영업시간" sub={opened} />
        <InfoBox title="휴무일" sub={closed} />
        <InfoBox title="인스타" sub={url} />
      </div>
    </div>
  )
}
export default ShopInfoContainer
