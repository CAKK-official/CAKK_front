import React from 'react'
import Image from 'next/image'
import Icon from '../icon'
import * as Styled from './style'
import Link from 'next/link'
import { ItemResponseProps } from '../../src/api/api'

interface ItemGridInterface {
  //TODO: update props, fetched data
  row: number
  ranking?: boolean
  items: ItemResponseProps[]
}

const ItemGridContainer: React.FC<ItemGridInterface> = ({
  row,
  items,
  ranking,
}) => {
  return (
    <Styled.ItemGridContainer rows={row}>
      {items.map((item: ItemResponseProps, index: number) => (
        <div className="item-grid-item" key={index}>
          <Link href={`/detail/${item.id}`} passHref prefetch={false}>
            <div className="item-container">
              <div className="image-container">
                {/* <img src={item.picture} /> */}
                <div className="img">
                  <Image
                    src={item.picurl[0]}
                    alt="Image not found"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="information-container">
                <div className="info-text-container">
                  <h4>{item.name}</h4>
                  <div className="info-address">{item.address}</div>
                </div>
              </div>
              {ranking && <div className="ranking">{index + 1}</div>}
            </div>
          </Link>
        </div>
      ))}
    </Styled.ItemGridContainer>
  )
}

export default ItemGridContainer
