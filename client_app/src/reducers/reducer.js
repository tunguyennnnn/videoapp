import {combineReducers} from 'redux'
import MediaReducer from './media-reducer'
import MyMediaReducer from './mymedia-reducer'
import MediaFilterReducer from './media-filter-reducer'
import UserAuthReducer from './user-auth-reducer'
import UserReducer from './user-reducer'
import NewMediaReducer from './add-media-reducer'

const allReducers = combineReducers({
  media: MediaReducer,
  mymedia: MyMediaReducer,
  filteredMedia: MediaFilterReducer,
  user: UserReducer,
  auth: UserAuthReducer,
  newmedia: NewMediaReducer
})

export default allReducers
