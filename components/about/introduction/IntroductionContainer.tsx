import React, { useEffect } from 'react'
import * as Styled from './style'
import introductionItems from './introduction.json'
import Image from 'next/image'

// Animation
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

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
  const stringData = subtitle.replace(/\\n/g, '<br />')
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

const boxVariant = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: 'easeInOut' },
  },
  hidden: { opacity: 0, x: 100 },
}

const IntroductionContainer: React.FC = () => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start('visible')
    } else {
      control.start('hidden')
    }
  }, [control, inView])

  return (
    <Styled.IntroductionContainer
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <div className="introduction-wrapper">
        <div className="introduction-section">
          <h2>케이크크를 소개합니다</h2>
          <span>주문제작 케이크를 찾기 어려우셨다면</span>
          <span>이제는 케이크크를 통해 쉽게 가게를 찾아보세요!</span>
        </div>
        <IntroductionItemContainer items={introductionItems} />
      </div>
    </Styled.IntroductionContainer>
  )
}

export default IntroductionContainer
