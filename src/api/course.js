import axios from '@/libs/api.request'

export const viewCourseDetail = (id) => {
  return axios.request({
    url: 'viewCourseDetail',
    method: 'get',
    params: id
  })
}
