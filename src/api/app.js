import axios from '@/libs/api.request'

export const getCarousel = () => {
  return axios.request({
    url: 'getCarousel',
    method: 'get'
  })
}
