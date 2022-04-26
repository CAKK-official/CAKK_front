import { ItemGridContainer } from '../../item-container'

import * as Styled from './style'

const RankContainer = () => {
  const toyData = [
    {
      name: '키키네하우스',
      address: '송파구 오금로 130',
      img: 'https://picsum.photos/200/300',
    },
    {
      name: '케키하우스',
      address: '백제 고분로 41길 35',
      img: 'https://picsum.photos/200/300',
    },
    {
      name: '희스케이크',
      address: '백제고분로27길 26',
      img: 'https://picsum.photos/200/300',
    },
  ]

  return (
    <Styled.RankContainer>
      <h2>인기 케이크 가게 Top3</h2>
      <ItemGridContainer ranking row={3} items={toyData} />
    </Styled.RankContainer>
  )
}

export default RankContainer
