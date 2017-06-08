import auth from '../utils/Auth'

const loginNormal = (user) => {
  return (dispatch) => {
    return auth.loginNormal(user, (success, detail) => {
      if (success) {
        dispatch(loginSuccess())
      }
      else {
        dispatch(loginFail())
      }
    })
  }
}

const loginSuccess = () => {
  return {
    type: 'LOGIN_SUCCESS'
  }
}

const loginFail = () => {
  return {
    type: 'LOGIN_FAILED'
  }
}

const signUp = (user) => {
  return {
    type: 'USER_SIGNUP',
    payload: user
  }
}

const loginAuth0 = (user) => {
  return {
    type: 'USER_LOGIN_WITH_AUTHO',
    payload: user
  }
}

export {loginNormal, signUp, loginAuth0, loginSuccess, loginFail}
