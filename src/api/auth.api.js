import http from '../utils/http'

const authApi = {
  register(data) {
    return http.post('user', data)
  }
}

export default authApi
