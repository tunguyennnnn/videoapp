import MediaFetcher from '../utils/mediaRequest'

const showImagesOnly  = (media) => {
  return (dispatch) => {
    return MediaFetcher.fetchNewestMedia({media, filter: 'images'}, (success, images) => {
      if (success) {
        dispatch(requestImagesSuccess(images))
      } else {
        dispatch(requestImagesFail())
      }
    })
  }
}

const requestImagesSuccess = (newImages) => {
  return {
    type: 'REQUEST_IMAGES_ONLY_SUCCESS',
    payload: newImages
  }
}

const requestImagesFail = () => {
  return {
    type: 'REQUEST_IMAGES_ONLY_FAIL'
  }
}

const showVideosOnly  = (media) => {
  return (dispatch) => {
    return MediaFetcher.fetchNewestMedia({media, filter: 'videos'}, (success, videos) => {
      if (success) {
        dispatch(requestVideosSuccess(videos))
      } else {
        dispatch(requestVideosFail())
      }
    })
  }
}

const requestVideosSuccess = (newVideos) => {
  return {
    type: 'REQUEST_VIDEOS_ONLY_SUCCESS',
    payload: newVideos
  }
}

const requestVideosFail = () => {
  return {
    type: 'REQUEST_VIDEOS_ONLY_FAIL'
  }
}


const showAllMedia = (media) => {
  return (dispatch) => {
    return MediaFetcher.fetchNewestMedia({media, filter: 'all'}, (success, newMedia) => {
      if (success) {
        return dispatch(requestAllSuccess(newMedia))
      }
      else {
        return dispatch(requestAllFailed())
      }
    })
  }
}

const requestAllSuccess = (media) => {
  return {
    type: 'REQUEST_ALL_MEDIA_SUCCESS',
    payload: media
  }
}

const requestAllFailed = () => {
  return {
    type: 'REQUEST_ALL_MEDIA_FAIL'
  }
}

const showInfoOnly = (media) => {
  return {
    type: 'SHOW_INFO_ONLY',
    payload: media
  }
}

const showMostLove = (media) => {
  return {
    type: 'SHOW_MOST_LOVE',
    payload: media
  }
}

const showHottest = (media) => {
  return {
    type: 'SHOW_HOTTEST',
    payload: media
  }
}
export {showImagesOnly, showVideosOnly, showAllMedia, showInfoOnly, showMostLove, showHottest}
