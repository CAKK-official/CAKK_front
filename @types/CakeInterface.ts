//NOTE: 케이크 정보 인터페이스
export interface CakeInterface {
  id: number
  name: string
  address: string
  tel: string
  notice: string
  url: string
  tag: string[]
  menu: string
  beforebuy: string
  whenbuy: string
  afterbuy: string
  others: string
  opened: string
  closed: string
  picture: string
  latlng: number[]
  category: string[]
  views: number
}

export type PopularResponse = {
  id: number
  name: string
  picture: string
  address: string
  score: string
}[]
