// import Image from 'next/image'
import * as Styled from './style'
import categories from '../../../assets/category.json'

import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import Image from 'next/image'

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
    } else {
      control.start('hidden')
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
        <div className="category-section">
          <h2>케이크크 카테고리</h2>
          <span>
            케이크크는 주문제작 케이크의 디자인을 쉽고 빠르게 찾을 수 있도록{' '}
          </span>
          <span>
            케이크의 디자인을 10개의 카테고리로 구분해 정보를 제공해요!
          </span>
        </div>
        <div className="category-button-wrapper">
          {categories.map(
            (category: { id: number; name: string; title: string }) => (
              <div key={category.id} className="category-item">
                <div className="category-item-wrapper">
                  <div className="category-image">
                    <Image
                      src={`/img/logo/${category.name}.png`}
                      alt={category.name}
                      width={500}
                      height={500}
                    />
                  </div>
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
