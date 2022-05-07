import React from 'react'
import * as Styled from './style'
import introductionItems from './introduction.json'
import Image from 'next/image'

interface IntroductionItemInterface {
  id: number
  img: string
  title: string
  subtitle: string
}

const IntroductionItemContainer: React.FC<{
  items: IntroductionItemInterface[]
}> = ({ items }) => {
  return (
    <Styled.IntroductionItemContainer>
      {items.map((item: IntroductionItemInterface) => (
        <IntroductionItem
          key={item.id}
          id={item.id}
          img={`/img/${item.img}`}
          title={item.title}
          subtitle={item.subtitle}
        />
      ))}
    </Styled.IntroductionItemContainer>
  )
}

const IntroductionItem: React.FC<IntroductionItemInterface> = ({
  id,
  img,
  title,
  subtitle,
}) => {
  console.log(subtitle)
  const stringData = subtitle.replace(/\\n/g, '<br />')
  console.log(stringData)
  return (
    <Styled.IntroductionItem>
      <div className="item-container">
        <div className="image-wrapper">
          <Image src={img} alt={img} layout="fill" objectFit="contain" />
        </div>
        <div className="text-wrapper">
          <h3>{title}</h3>
          <span dangerouslySetInnerHTML={{ __html: stringData }} />
        </div>
      </div>
    </Styled.IntroductionItem>
  )
}

const IntroductionContainer: React.FC = () => {
  return (
    <Styled.IntroductionContainer>
      <div className="introduction-wrapper">
        <h2>케이크크를 소개합니다</h2>
        <span>주문제작 케이크를 찾기 어려우셨다면</span>
        <br />
        <span>
          이제는 케이크크를 통해 쉽게 가게를 찾고 케이크 주문을 예약해보세요!
        </span>
        <IntroductionItemContainer items={introductionItems} />
      </div>
    </Styled.IntroductionContainer>
  )
}

export default IntroductionContainer
