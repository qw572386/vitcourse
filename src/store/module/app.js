import {  } from '@/api/app'
export default {
    state: {
      
    },
    getters: {
      
    },
    mutations: {
    },
    actions: {
      getCarousel ({ state, commit }) {
        getCarousel().then(res => {
          return new Promise((resolve, reject) => {
            const data = res.data
            resolve(data)
          }).catch(err => {
            reject(err)
          })
        })
      }
    }
  }
