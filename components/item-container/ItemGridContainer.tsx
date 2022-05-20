import React from 'react'
import Image from 'next/image'
import { PopularResponse } from '../../src/api/api'
import Icon from '../icon'
import * as Styled from './style'
import Link from 'next/link'

interface ItemGridInterface {
  //TODO: update props, fetched data
  row: number
  ranking?: boolean
  items: PopularResponse[]
}

const ItemGridContainer: React.FC<ItemGridInterface> = ({
  row,
  items,
  ranking,
}) => {
  return (
    <Styled.ItemGridContainer rows={row}>
      {items.map((item: PopularResponse, index: number) => (
        <div className="item-grid-item" key={index}>
          <Link href={`/detail/${item.id}`} passHref prefetch={false}>
            <div className="item-container">
              <div className="image-container">
                <img src={item.picture} />
                {/* <Image
                src={item.picture}
                alt="Image not found"
                layout="fill"
                objectFit="cover"
              /> */}
              </div>
              <div className="information-container">
                <div className="info-text-container">
                  <h4>{item.name}</h4>
                  <span>{item.address}</span>
                </div>
                <div className="button-container">
                  <button
                    onClick={() => {
                      console.log('fork clicked')
                    }}
                  >
                    <Icon name="icon_fork_fill" width={24} height={24} />
                  </button>
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
