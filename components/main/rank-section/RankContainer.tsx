import { ItemGridContainer } from '../../item-container'
import { PopularResponse } from '../../../src/api/api'

import * as Styled from './style'

const RankContainer: React.FC<{ data: PopularResponse[] }> = ({ data }) => {
  // const toyData = [
  //   {
  //     id: 1,
  //     name: '키키네하우스',
  //     address: '송파구 오금로 130',
  //     img: 'https://picsum.photos/200/300',
  //   },
  //   {
  //     id: 2,
  //     name: '케키하우스',
  //     address: '백제 고분로 41길 35',
  //     img: 'https://picsum.photos/200/300',
  //   },
  //   {
  //     id: 3,
  //     name: '희스케이크',
  //     address: '백제고분로27길 26',
  //     img: 'https://picsum.photos/200/300',
  //   },
  // ]

  return (
    <Styled.RankContainer>
      <h2>인기 케이크 가게 Top3</h2>
      <ItemGridContainer ranking row={3} items={data} />
    </Styled.RankContainer>
  )
}

export default RankContainer
