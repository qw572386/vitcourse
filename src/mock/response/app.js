import { doCustomTimes } from '@/libs/tools'
import Mock from 'mockjs'
const Random = Mock.Random

export const getCarousel = () => {
  const template = {
    'id|1-9': 5,
    'bgUrl': Random.image('1920x450')
  }
  let arr = []
  doCustomTimes(5, () => {
    arr.push(Mock.mock(template))
  })
  return arr
}
