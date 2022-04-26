import * as Styled from './style'

// interface DescriptionContentInterface {
//   title: string
//   description: { subtitle: string; paragraph: string[] }[]
// }

const DescriptionContainer: React.FC = () => {
  const text = [
    {
      id: 1,
      title: '케이크 주문제작하시고 싶으신 분들 여기 보세요!',
      detail: [
        {
          title: '케이크 가게 정보를 한 눈에!',
          subtitle: [
            '일일히 검색해야 하는 주문 제작 케이크 가게 정보...',
            '케이크크에 다 모아 두었으니 빠르게 확인해 보세요!',
          ],
        },
        {
          title: '필터링으로 검색을 편하게!',
          subtitle: [
            '카테고리 지역 필터링을 활용해',
            '하는 주문제작 케이크 집을 쉽고 빠르게 검색하세요',
          ],
        },
      ],
    },
    {
      id: 2,
      title: '가게 사장님들 여기 보세요!',
      detail: [
        {
          title: '무료 홍보 찬스!',
          subtitle: [
            '케이크 가게 정보를 무료로 올리시고',
            '무료로 가게를 홍보해보세요',
          ],
        },
        {
          title: '필터링으로 검색을 편하게!',
          subtitle: [
            '카테고리 지역 필터링을 활용해',
            '하는 주문제작 케이크 집을 쉽고 빠르게 검색하세요',
          ],
        },
      ],
    },
  ]

  return (
    <Styled.DescriptionContainer>
      <div className="description-wrapper">
        <div className="data-wrapper">
          <div className="detail-wrapper">
            <h2>
              케이크 주문제작하시고
              <br /> 싶으신 분들 여기 보세요!
            </h2>
          </div>
          <div className="detail-wrapper">
            <h3>케이크 가게 정보를 한 눈에!</h3>
            <span>
              일일히 검색해야 하는 주문 제작 케이크 가게 정보...
              <br />
              케이크크에 다 모아 두었으니 빠르게 확인해 보세요!
            </span>
            <h3>필터링으로 검색을 편하게!</h3>
            <span>
              카테고리 지역 필터링을 활용해
              <br />
              원하는 주문제작 케이크 집을 쉽고 빠르게 검색하세요
            </span>
          </div>
        </div>
        <hr />
        <div className="data-wrapper">
          <div className="detail-wrapper">
            <h2>가게 사장님들 여기 보세요!</h2>
          </div>
          <div className="detail-wrapper">
            <div>
              <h3>무료 홍보 찬스!</h3>
              <span>
                케이크 가게 정보를 무료로 올리시고
                <br />
                무료로 가게를 홍보해보세요
              </span>
            </div>
          </div>
        </div>
      </div>
    </Styled.DescriptionContainer>
  )
}

export default DescriptionContainer
