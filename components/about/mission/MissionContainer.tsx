import Image from 'next/image'
import * as Styled from './style'

const MissionContainer = () => {
  return (
    <Styled.MissionContainer>
      <Image
        src="/img/about_banner.png"
        alt="about banner"
        layout="fill"
        objectFit="cover"
      />
      <div className="text-section">
        <div className="about-logo">
          <Image
            src="/img/about_logo.png"
            alt="about banner"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <span>
          케이크크는 원하는 주문제작 케이크 가게를 쉽게 찾고,
          <br />
          가게정보를 한눈에 확인할 수 있는 서비스입니다.
        </span>
      </div>
      {/*       
      <Image
        src="/img/about_carosel.png"
        alt="about banner"
        layout="fill"
        objectFit="cover"
      /> */}
    </Styled.MissionContainer>
  )
}

export default MissionContainer
