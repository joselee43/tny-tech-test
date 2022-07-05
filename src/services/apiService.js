import axios from 'axios'

class ApiService {
  fetchNews (pageSize, page) {
    return new Promise((resolve, reject) => {
      axios.get('/api/news', {
        params: {
          pageSize,
          page
        }
      })
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error.response.data?.error || 'Something went wrong!')
        })
    })
  }
}

const instance = new ApiService()

export default instance
