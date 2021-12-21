import http from 'src/utils/http'

const URL = 'banners'

const bannerApi = {
  getBanners(data) {
    return http.get(URL, data)
  }
}

export default bannerApi
