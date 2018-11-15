import Mock from 'mockjs'
import { getCarousel } from './response/app'
import { viewCourseDetail } from './response/course'
const Random = Mock.Random

Mock.mock(/\/getCarousel/, 'get', getCarousel)
Mock.mock(/\/viewCourseDetail/, 'get', viewCourseDetail)

Mock.setup({
    timeout: 500
})

export default Mock
