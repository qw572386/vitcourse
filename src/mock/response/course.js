import { doCustomTimes } from '@/libs/tools'
import Mock from 'mockjs'
const Random = Mock.Random

export const viewCourseDetail = (id) => {
  const template = {
    'title|10': '@cword',
    'detail|100-500': '@cword'
  }
  return Mock.mock(template)
}
