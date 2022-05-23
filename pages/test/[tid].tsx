import { NextPage } from 'next'
import { useRouter } from 'next/router'

//TODO : itemSwiperContainer에 item src로 넘길 수 있는지 확인하기
const Test: NextPage = () => {
  const Router = useRouter()
  console.log('Routes', Router)
  console.log('Routes', Router.query.tid)
  return <div>test</div>
}

export default Test
