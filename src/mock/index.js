import Mock from 'mockjs'
import { getCarousel } from './response/app'
const Random = Mock.Random

Mock.mock(/\/getCarousel/, 'get', getCarousel)

Mock.setup({
    timeout: 500
})

export default Mock
