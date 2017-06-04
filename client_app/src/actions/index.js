const showImagesOnly  = (media) => {
  return {
    type: 'SHOW_IMAGES_ONLY',
    payload: media
  }
}

const showVideosOnly = (media) => {
  return {
    type: 'SHOW_VIDEOS_ONLY',
    payload: media
  }
}

const showAllMedia = (media) => {
  return {
    type: 'SHOW_ALL_MEDIA',
    payload: media
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
