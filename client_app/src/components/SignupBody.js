import React from 'react'

export default class SignupBody extends React.Component {
  render () {
    return (
      <div class='row'>
        <form class='col s12'>
          <div class='row'>
            <div class='input-field col s12'>
              <input id='firstName' type='text' class='validate'></input>
              <label for='firstName'>First Name</label>
            </div>
          </div>
          <div class='row'>
            <div class='input-field col s12'>
              <input id='lastName' type='text' class='validate'></input>
              <label for='lastName'>Last Name</label>
            </div>
          </div>
          <div class='row'>
            <div class='input-field col s12'>
              <input id='email' type='email' class='validate'></input>
              <label for='email'>Email</label>
            </div>
          </div>
          <div class='row'>
            <div class='input-field col s12'>
              <input id='password' type='password' class='validate'></input>
              <label for='password'>Password</label>
            </div>
          </div>
          <div class='row'>
            <button class='waves-effect waves-light btn blue lighten-1'>Signup</button>
          </div>
        </form>
      </div>
    )
  }
}
