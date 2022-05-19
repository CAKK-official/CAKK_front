const API_ENDPOINT = 'http://15.165.196.34:8000'

export type PopularResponse = {
  id: number
  name: string
  picture: string
  address: string
  score: string
}

export type SearchResponse = {
  page: number
  totalpage: number
  data: {
    id: number
    name: string
    picurl: string[]
    address: string
  }[]
}

export const fetchPopular = async (): Promise<PopularResponse[]> => {
  return fetch(`${API_ENDPOINT}/cakestore/popular`)
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
  console.log({
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    mode: 'no-cors',
    body: JSON.stringify({ ...body, addresses: body.addresses }),
  })
  // {"addresses":"[\"송파구\",\"광진구\"]","category":"레터링케이크"}`
  return fetch(`${API_ENDPOINT}/cakestore/search?page=${page}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    mode: 'no-cors',
    // body: JSON.stringify({"addresses": JSON.stringify(body.addresses), "category": "null" }),
    body: JSON.stringify({
      addresses: '["송파구","광진구"]',
      category: 'null',
    }),
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
