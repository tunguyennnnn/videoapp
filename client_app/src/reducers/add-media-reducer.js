const newMediaState = {
  triggered: false,
  filling: false,
  uploading: false,
  finishedUploading: false
}

export default function (state = newMediaState, action) {
  switch (action.type) {
    case 'OPEN_NEW_MEDIA_MODAL': {
      return {
        ...state,
        triggered: true
      }
    }
  }
  return state
}
