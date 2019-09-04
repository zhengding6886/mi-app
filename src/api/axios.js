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
export function getList () {
  return axios.get('list')
}
export function getParameters () {
  return axios.get('parameters')
}
export function getRelate () {
  return axios.get('relate')
}
export function getComment () {
  return axios.get('comments')
}
export function getRecommends () {
  return axios.get('recommend')
}
export function getCartNum () {
  return axios.get('cartNum')
}
export function getLogin () {
  return axios.post('user/login')
}
