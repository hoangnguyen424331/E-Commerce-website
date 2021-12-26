import http from '../utils/http'

const authApi = {
  register(data) {
    return http.post('users', data)
  },
  login(userId) {
    return http.get('users', `?id=${userId}`)
  }
}

export default authApi
