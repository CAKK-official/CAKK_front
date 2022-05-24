const API_ENDPOINT = 'http://15.165.196.34:8000'

//TODO: picture => picurl
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

export const fetchPopular = async (): Promise<ItemResponseProps[]> => {
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
  const data = {
    addresses:
      body.addresses.length > 0 ? JSON.stringify(body.addresses) : '["null"]',
    category: body.category,
  }

  console.log(data)

  // {"addresses":"[\"송파구\",\"광진구\"]","category":"레터링케이크"}`
  return fetch(`/cakestore/search?page=${page}`, {
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
