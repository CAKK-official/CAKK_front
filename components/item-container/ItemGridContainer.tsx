import React from 'react'
import Icon from '../icon'
import * as Styled from './style'

interface ItemGridInterface {
  //TODO: update props, fetched data
  row: number
  ranking?: boolean
  items: {
    id?: number
    img: string
    name: string
    address: string
    views?: number
  }[]
}

const ItemGridContainer: React.FC<ItemGridInterface> = ({
  row,
  items,
  ranking,
}) => {
  return (
    <Styled.ItemGridContainer rows={row}>
      {items.map(
        (
          item: {
            id?: number
            name: string
            address: string
            img: string
            views?: number
          },
          index: number
        ) => (
          <div className="item-grid-item" key={index}>
            <div className="item-container">
              <div className="image-container">
                <img src={item.img} />
              </div>
              <div className="information-container">
                <div className="info-text-container">
                  <h4>{item.name}</h4>
                  <span>{item.address}</span>
                </div>
                <div className="button-container">
                  <button>
                    <Icon name="icon_fork_fill" width={24} height={24} />
                  </button>
                </div>
              </div>
              {ranking && <div className="ranking">{index + 1}</div>}
            </div>
          </div>
        )
      )}
    </Styled.ItemGridContainer>
  )
}

export default ItemGridContainer
