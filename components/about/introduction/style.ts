import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const IntroductionContainer = styled(motion.section)`
  padding: 4rem 0;

  .introduction-wrapper {
    margin: auto;
    width: ${({ theme }) => theme.screen.main};

    .introduction-section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`

export const IntroductionItemContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  min-height: 22rem;
  height: 100%;
`

export const IntroductionItem = styled.div`
  position: relative;
  width: calc(100% / 3);
  .item-container {
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;

    .image-wrapper {
      flex: auto;
      position: relative;
    }

    .text-wrapper {
      text-align: center;
    }
  }
`
