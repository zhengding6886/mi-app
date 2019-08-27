import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:3000/api/'

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})
export function getTelephone () {
  return axios.get('telephone')
}
