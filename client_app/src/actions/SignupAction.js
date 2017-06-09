import auth from '../utils/Auth'

const signup = (user) => {
  return (dispatch) => {
    return auth.register(user, (success, res) => {
      if (success) {
        dispatch(signupSuccess(res))
      } else {
        dispatch(signupFail(res))
      }
    })
  }
}

const signupSuccess = (user) => {
  return {
    type: 'SIGNUP_SUCCESS',
    payload: user
  }
}

const signupFail = (err) => {
  return {
    type: 'SIGNUP_FAIL',
    payload: err
  }
}

export {signup, signupSuccess, signupFail}
