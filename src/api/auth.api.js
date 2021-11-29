import http from '../utils/http'

const URL = 'users'

const authApi = {
  register(data) {
    return http.post('user', data)
  },
  fetchUser(userId) {
    return http.get(URL + `?id=${userId}`)
  }
}

export default authApi
