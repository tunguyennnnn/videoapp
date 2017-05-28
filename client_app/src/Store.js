import {createStore} from 'redux'
import AllReducers from './reducers/reducer'
const store = createStore(AllReducers)
export default store
