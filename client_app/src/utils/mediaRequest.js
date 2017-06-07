import axios from 'axios'

class MediaFetcher {
  constructor () {
    this.serverUrl = 'http://localhost:4000/api/'
  }

  fetchNewestMedia ({media, limit=10, skip=0, filter='all'}, callback) {
    axios({
      method: 'get',
      url: `${this.serverUrl}media`,
      params: {limit, skip, filter}
    })
    .then((newMedia) => {
      callback(true, newMedia.data)
    })
    .catch((err) => {
      callback(false)
    })
  }
}

export default new MediaFetcher
