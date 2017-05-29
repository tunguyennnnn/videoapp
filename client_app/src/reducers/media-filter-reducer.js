export default function (state=[], action) {
  switch (action.type) {
    case 'SHOW_IMAGES_ONLY': {
      return action.payload.filter((me) => me.type === 'image')
      break
    }
    case 'SHOW_VIDEOS_ONLY': {
      return action.payload.filter((me) => me.type === 'video')
      break
    }
    case 'SHOW_ALL_MEDIA': {
      console.log(action)
      return action.payload
      break
    }
  }
  return state
}
