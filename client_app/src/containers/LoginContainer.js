import React from 'react'
import LoginPageHeader from '../components/LoginPageHeader'
import LoginBody from '../components/LoginBody'
import SignupBody from '../components/SignupBody'

class LoginContainer extends React.Component {
  render () {
    const style = {backgroundColor: 'rgba(44, 44, 44, 0.4)'}
    return (
      <div class='row'>
        <div style={style} class='row col s12 m6 offset-m3'>
          <div class='col s12 m6'>
            <LoginBody />
          </div>
          <div class='col s12 m6'>
            <SignupBody />
          </div>
        </div>
      </div>
    )
  }
}

export default LoginContainer
