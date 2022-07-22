import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import Icon from '../../icon'
import Chip from '../../result/chip'
import InfoBox from '../infoBox/InfoBox'
import theme from '../../../assets/theme/theme'
import MoreInfoContainer from '../more/MoreInfoContainer'
import { categoryList } from '../../../context/CategoryContext'
import { DetailResponse, fetchKakaoShareCount } from '../../../src/api/api'
import Link from 'next/link'

const getPureHTML = (text: string) => {
  const reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#\=\(\'\"]/gi
  text = text.replace(reg, '')
  return text
}

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

  const DUMMYTEXT = `### 주문 전 주의사항
  ${getPureHTML(beforebuy)}

  ### 주문 시 주의사항 
  ${getPureHTML(whenbuy)}

  ### 주문 후 주의사항
  ${getPureHTML(afterbuy)}
  `

  const getCategory = (category: string) => {
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
          mobileWebUrl: 'https://cakk.site',
          webUrl: 'https://cakk.site',
        },
      },
      buttons: [
        {
          title: '케이크크에서 확인하기',
          link: {
            mobileWebUrl: `https://cakk.site/detail/${id}`,
            webUrl: `https://cakk.site/detail/${id}`,
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
        <div>
          <h1 className="title">{name}</h1>
        </div>
        <IconDiv>
          <a
            className="link-button"
            target="_blank"
            href={url}
            rel="noopener noreferrer"
          >
            <Icon
              name="icon_insta_fill"
              width={20}
              height={20}
              color={theme.colors.black}
            />
          </a>
          <div className="link-button" onClick={kakaoShare}>
            <Icon
              name="icon_share_fill"
              width={20}
              height={20}
              color={theme.colors.black}
            />
          </div>
        </IconDiv>
      </TitleDiv>
      <SubtitleDiv>{notice}</SubtitleDiv>
      <CategoryDiv>
        {categories!.map((category: string) => (
          <Link
            key={category}
            href={{
              pathname: '/result',
              query: { category: getCategory(category) },
            }}
            passHref
          >
            <div>
              <Chip primary key={category}>
                #{getCategory(category)}
              </Chip>
            </div>
          </Link>
        ))}
      </CategoryDiv>
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
      <br />
      <h2>가게 상세정보</h2>
      <MoreInfoContainer source={DUMMYTEXT} />
      <br />
      <br />
      <br />
    </div>
  )
}

const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0 1rem 0;
  align-items: center;

  .title {
    margin: 0;
  }
`

const SubtitleDiv = styled.div`
  width: 70%;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  word-break: keep-all;
`

const IconDiv = styled.div`
  display: flex;
  gap: 1rem;
  cursor: pointer;

  .link-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 38px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.black};

    &:hover {
      background-color: ${({ theme }) => theme.colors.gray.A20};
    }
  }
`

const CategoryDiv = styled.div`
  display: flex;
  margin: 1rem 0;
`

const InfoBoxContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 180px;
  margin: 2rem 0;
  gap: 10px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray.A20};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.A20};
`

export default ShopInfoContainer
