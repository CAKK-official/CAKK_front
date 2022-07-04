// import Image from 'next/image'
import * as Styled from './style'
import categories from '../../../assets/category.json'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

const boxVariant = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: 'easeInOut' },
  },
  hidden: { opacity: 0, x: 100 },
}

const CategoryContainer = () => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start('visible')
      console.log('visible')
    } else {
      control.start('hidden')
      console.log('hidden')
    }
  }, [control, inView])

  return (
    <Styled.CategoryContainer>
      <motion.div
        className="category-wrapper"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <h2>케이크크 카테고리</h2>
        <span>주문제작 케이크를 찾기 어려우셨다면</span>
        <br />
        <span>
          이제는 케이크크를 통해 쉽게 가게를 찾고 케이크 주문을 예약해보세요!
        </span>

        <div className="category-button-wrapper">
          {categories.map(
            (category: { id: number; name: string; title: string }) => (
              <div key={category.id} className="category-item">
                <div className="category-item-wrapper">
                  <div className="category-image"></div>
                  <span className="category-title">{category.title}</span>
                </div>
              </div>
            )
          )}
        </div>
      </motion.div>
    </Styled.CategoryContainer>
  )
}

export default CategoryContainer
