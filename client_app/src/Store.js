import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {browserHistory} from 'react-router'
import {routerMiddleware, routerReducer} from 'react-router-redux'
import AllReducers from './reducers/reducer'
const store = createStore(AllReducers, applyMiddleware(routerMiddleware(browserHistory),thunk))
export default store
