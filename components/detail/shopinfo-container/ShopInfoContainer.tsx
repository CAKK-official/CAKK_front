import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/react'
import Icon from '../../icon'
import Chip from '../../main/chip'
import InfoBox from '../infoBox/InfoBox'
import MapContainer from '../map/MapContainer'
import MoreInfoContainer from '../more/MoreInfoContainer'
import { categoryList } from '../../../context/CategoryContext'
import ItemGridContainerStories from '../../item-container/ItemGridContainer.stories'
import { fetchKakaoShareCount } from '../../../src/api/api'
import Link from 'next/link'

interface ShopInfoInterface {
  title: string
  desc: string
  address: string
  categories: Array<string>
  tel: string
  opened: string
  closed: string
  url: string
  latlng: Array<number>
  id: number
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
  address,
  id,
}) => {
  const router = useRouter()

  const DUMMYTEXT = `### 레터링 케이크 
  - 사이즈 도시락 _ 12cm 1~2인용 19000원~ 
  - 미니 _ 12cm 1~2인용 30000원~ 
  - 1호 _ 16cm 2~3인용 40000원~ 
  - 2호 _ 19cm 3~5인용 50000원~ 
  - 하트_ 미니,1호 가능 2000원 추가 
  - 큐브,도시락 옆면 장식 불가 
  *디자인별 추가금액 발생 
  
  ### 맛 
  - 바닐라/초코 시트 택1 (초코 +1000원) 
  - 내용물 5가지 중 택 1 
          1. 라즈베리잼 
          2. 블루베리잼 
          3. 오레오 
          4. 생딸기 (사이즈별 추가금 상이) 
          5. 고구마 무스 (사이즈별 추가금 상이) 
          6. 생 바나나(사이즈별 추가금 상이)
          
  ### 포토 케이크 
  쌀,전분으로 만들어진 시트위에 식용색소로 인쇄되어 드실 수 있습니다 
  약간의 달달한 맛이 나지만 얇게 올라가므로 맛은 크게 느껴지지 않아요ㅎㅎ ! 
  <추가금> 
  - 미니 + 5000원 
  - 1호 + 7000원 
  - 2호 + 10000원 
  사진은 최대한 선명하고 깨끗한 사진이 좋고
  (너무 밝거나 어두운 사진 x) 
  프린트 특성상 색감은 달라질 수 있습니당! 
  사진 많이 확인하신 후 주문 주세요!  
  
  ### 티아라 케이크 
  기본형은 화이트+왕관 장식입니다 
  문구 추가시 1000원추가, 색상변경시 1000원 추가됩니다! 
  - 1호 (+투명케이스 기본옵션) 
          기본시트+라즈베리 오레오 블루베리 맛 선택시 - 53000원 
          (초코시트 +1000원 추가/ 딸기 +3000원 추가 / 고구마 +2000원 추가) 
  - 2호 ( 투명케이스 +3000원 추가) 
          기본시트+라즈베리 오레오 블루베리 맛 선택시 - 60000원 
          (초코시트 +1000원 추가/ 딸기 +4000원 추가 / 고구마 +3000원 추가) 
  
  ### 동물 스탠딩 케이크 
  기본 사이즈 가격에서 5000원 추가됩니다! 
  - 미니 기본 - 35000원 
  - 1호 기본 - 45000원 
  - 2호 기본 - 55000원 
  곰,토끼,강아지 제외 동물들은 커스텀비용 1000원씩 추가 
  고깔,모자 등 기본형엔 전혀 안올라가요 꼭꼭 따로 말씀해주세요, 추가금액 있습니다! 
  오셔서 구매하실 수 있는 미니 종이 고깔 있습니다 추가금액도 똑같고 그리는 것보다 그게 훨씬 예뻐용! 
  판 문구는 미니기준 10자 이내만 가능! 
  판 문구 1000원 추가됩니다. 모양은 변경 불가능하시고 기본 반원형태에서 귀나 디테일만 추가 가능합니다! 
  질감은 복슬복슬 디자인과 터치감 있는 디자인 두가지 선택가능하세요!`

  const getCategory = (category: string) => {
    return categoryList.filter((it) => it.name === category)[0].title
  }

  const kakaoShare = async () => {
    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: `케이크크에서 ${title}정보를 알아보세요!`,
        description: `${title}에 관련된 내용이 더 궁금하다면 아래 버튼을 눌러주세요!`,
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
        <div style={{ color: '#707070' }}>
          <h2>{title}</h2>
        </div>
        <IconDiv>
          <a target="_blank" href={url} rel="noopener noreferrer">
            <Icon name="icon_insta_fill" width={24} height={24} />
          </a>
          <div onClick={kakaoShare}>
            <Icon name="icon_share_fill" width={24} height={24} />
          </div>
        </IconDiv>
      </TitleDiv>
      <h3>{desc}</h3>
      <div style={{ display: 'flex' }}>
        {categories.map((category: string) => (
          <Link
            key={category}
            href={{
              pathname: `/result`,
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
          sub={opened}
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
