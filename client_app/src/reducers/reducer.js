import {combineReducers} from 'redux'
import MediaReducer from './media-reducer'

const allReducers = combineReducers({
  media: MediaReducer
})

export default allReducers
