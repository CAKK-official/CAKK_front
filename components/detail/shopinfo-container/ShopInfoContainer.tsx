import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/react'
import Icon from '../../icon'
import Chip from '../../main/chip'
import InfoBox from '../infoBox/InfoBox'
import theme from '../../../assets/theme/theme'
import MoreInfoContainer from '../more/MoreInfoContainer'
import { categoryList } from '../../../context/CategoryContext'
import ItemGridContainerStories from '../../item-container/ItemGridContainer.stories'
import { DetailResponse, fetchKakaoShareCount } from '../../../src/api/api'
import Link from 'next/link'

// interface ShopInfoInterface {
//   title: string
//   desc: string
//   address: string
//   categories: Array<string>
//   tel: string
//   opened: string
//   closed: string
//   url: string
//   latlng: Array<number>
//   id: number
// }
const ShopInfoContainer: React.FC<DetailResponse> = ({
  name,
  notice,
  categories,
  tel,
  opend,
  closed,
  url,
  latlng,
  address,
  beforebuy,
  afterbuy,
  whenbuy,
  id,
}) => {
  const router = useRouter()

  console.log(beforebuy)
  console.log(whenbuy)
  console.log(afterbuy)
  const DUMMYTEXT = `### 주문 전 주의사항
  ${beforebuy}

  ### 주문 시 주의사항 
  ${whenbuy}

  ### 주문 후 주의사항
  ${afterbuy}
  `

  const getCategory = (category: string) => {
    console.log(categoryList.filter((it) => it.name === category)[0].title)
    return categoryList.filter((it) => it.name === category)[0].title
  }

  const kakaoShare = async () => {
    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: `케이크크에서 ${name}정보를 알아보세요!`,
        description: `${name}에 관련된 내용이 더 궁금하다면 아래 버튼을 눌러주세요!`,
        imageUrl: 'https://avatars.githubusercontent.com/u/102408030?s=200&v=4',
        link: {
          mobileWebUrl: 'cakk.site',
          webUrl: 'cakk.site',
        },
      },
      buttons: [
        {
          title: '케이크크에서 확인하기',
          link: {
            mobileWebUrl: 'cakk.site',
            webUrl: 'cakk.site',
          },
        },
      ],
    })

    await fetchKakaoShareCount(id).then((res) =>
      res
        ? console.log('공유 서버통신 성공')
        : console.log('공유 서버통신 실패')
    )
  }

  return (
    <div>
      <TitleDiv>
        <div style={{ color: theme.colors.gray.A80 }}>
          <h2>{name}</h2>
        </div>
        <IconDiv>
          <a target="_blank" href={url} rel="noopener noreferrer">
            <Icon
              name="icon_insta_fill"
              width={24}
              height={24}
              color={theme.colors.gray.A80}
            />
          </a>
          <div onClick={kakaoShare}>
            <Icon
              name="icon_share_fill"
              width={24}
              height={24}
              color={theme.colors.gray.A80}
            />
          </div>
        </IconDiv>
      </TitleDiv>
      <h3>{notice}</h3>
      <div style={{ display: 'flex' }}>
        {/* TODO: 왜 Link 안 먹을까 */}
        <Link
          key={'a'}
          href={{ pathname: '/result', query: { category: '티아라케이크' } }}
          passHref
        >
          HI
        </Link>
        {categories!.map((category: string) => (
          <Link
            key={category}
            href={{
              pathname: '/result',
              query: { category: getCategory(category) },
            }}
            passHref
          >
            <Chip primary key={category}>
              #{getCategory(category)}
            </Chip>
          </Link>
        ))}
      </div>
      <InfoBoxContainer>
        <InfoBox
          iconName="icon_location_fill"
          title="주소"
          sub={address}
          canCopy={true}
        />
        <InfoBox
          iconName="icon_phone_fill"
          title="전화번호"
          sub={tel}
          canCopy={true}
        />
        <InfoBox
          iconName="icon_clock_fill"
          title="영업시간"
          sub={opend}
          canCopy={true}
        />
        <InfoBox
          iconName="icon_holiday_fill"
          title="휴무일"
          sub={closed}
          canCopy={true}
        />
      </InfoBoxContainer>
      <h2>가게 상세정보</h2>
      <MoreInfoContainer source={DUMMYTEXT} />
    </div>
  )
}

const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
  align-items: center;
  font-color: #707070;
`

const IconDiv = styled.div`
  display: flex;
  gap: 1rem;
  cursor: pointer;
`

const InfoBoxContainer = styled.div`
  display: flex;
  margin-top: 32px;
  margin-bottom: 123px;
  gap: 10px;
`

export default ShopInfoContainer
