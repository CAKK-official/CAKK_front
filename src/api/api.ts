// const OUT_API_ENDPOINT = process.env.NEXT_PUBLIC_APP_URL
// const API_ENDPOINT =
//   process.env.NODE_ENV === 'development'
//     ? 'http://localhost:3000/api'
//     : process.env.NEXT_PUBLIC_APP_URL

const OUT_API_ENDPOINT = '/api'
const API_ENDPOINT = '/api'

export type ItemResponseProps = {
  id: number
  name: string
  picurl: string[]
  address: string
}

export type SearchResponse = {
  page: number
  totalpage: number
  data: ItemResponseProps[]
}

export type DetailResponse = {
  address: string
  afterbuy: string
  beforebuy: string
  closed: string
  id: number
  latlng: [number, number]
  menu: string
  name: string
  notice: string
  opend: string
  pictArray?: string[]
  storeCategory?: string[]
  tel: string
  url: string
  whenbuy: string
  title?: string
  desc?: string
  categories?: string[]
}

export type MapResponse = {
  id: number
  name: string
  address: string
  tel: string
  url: string
  opened: string
  closed: string
  views: number
  shares: number
  latlng: [number, number]
  pictArray: string[]
  distance: number
}

export const fetchPopular = async (): Promise<ItemResponseProps[]> => {
  return fetch(`${OUT_API_ENDPOINT}/cakestore/popular`)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Res.ok Error')
      }

      return res.json()
    })
    .catch((err) => {
      throw new Error('Error', err.message)
    })
}

export const fetchSearch = async (
  page: number,
  body: {
    addresses: string[]
    category: string
  }
): Promise<SearchResponse> => {
  const data = {
    addresses: body.addresses,
    category: body.category,
  }

  // {"addresses":"[\"송파구\",\"광진구\"]","category":"레터링케이크"}`
  return fetch(`/api/cakestore/search?page=${page}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Res.ok Error')
      }
      return res.json()
    })
    .catch((err) => {
      throw new Error('Error', err.message)
    })
}

// DETAIL PAGE
export const fetchDetail = async (
  detail_id: number
): Promise<DetailResponse[]> => {
  return fetch(`${API_ENDPOINT}/cakestore/${detail_id}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Res.ok Error')
      }
      return res.json()
    })
    .catch((err) => {
      console.log(err.message)
      throw new Error('Error', err.message)
    })
}

export const fetchKakaoShareCount = async (storeId: number) => {
  return fetch(`${API_ENDPOINT}/cakestore/share/${storeId}`, { method: 'POST' })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Res.ok Error')
      }
      return res.ok
    })
    .catch((err) => {
      console.log(err.message)
      throw new Error('Error', err.message)
    })
}

export const fetchCategorySearch = async (
  category: string
): Promise<SearchResponse> => {
  const data = {
    addresses: 'null',
    category: category,
  }
  console.log(data)
  // {"addresses":"[\"송파구\",\"광진구\"]","category":"레터링케이크"}`
  return fetch(`${API_ENDPOINT}/cakestore/search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Res.ok Error')
      }
      return res.json()
    })
    .catch((err) => {
      console.log(err.message)
      throw new Error('Error', err.message)
    })
}

export const fetchMapSearch = async (
  category: string,
  lat: number,
  lng: number
): Promise<MapResponse[]> => {
  const data = {
    category,
    latlng: [lng, lat],
  }

  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }

  return fetch(`${API_ENDPOINT}/cakestore/nearby`, config)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Res.ok Error')
      }
      // console.log('😰', res.json());
      return res.json()
    })
    .catch((err) => {
      throw new Error('Error', err.message)
    })
}
