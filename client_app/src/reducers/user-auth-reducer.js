import auth from '../utils/Auth'
import {hashHistory} from 'react-router'

const initialState = {
  user: null,
  fetching: false,
  fetched: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS': {
      hashHistory.push('/home')
      return localStorage.getItem('auth')
      break
    }
    case 'LOGIN_FAILED': {
      browserHistory.push('/')
      return state
      break
    }
  }
  return state
}
