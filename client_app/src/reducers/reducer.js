import {combineReducers} from 'redux'
import MediaReducer from './media-reducer'
import MyMediaReducer from './mymedia-reducer'
import MediaFilterReducer from './media-filter-reducer'
const allReducers = combineReducers({
  media: MediaReducer,
  mymedia: MyMediaReducer,
  filteredMedia: MediaFilterReducer
})

export default allReducers
