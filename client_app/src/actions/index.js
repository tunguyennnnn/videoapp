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

export {showImagesOnly, showVideosOnly, showAllMedia}
