import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {loginNormal, loginAuth0} from '../actions/LoginAction'

class LoginBody extends React.Component {
  constructor (props) {
    super(props)
    this.state = {credentials: {email: '', password: ''}}
    this.onChange = this.onChange.bind(this)
    this.onSave = this.onSave.bind(this)
  }

  onChange (event) {
    const {type, value} = event.target
    const {credentials} = this.state
    credentials[type] = value
    console.log(credentials)
    return this.setState({credentials})
  }

  onSave (event) {
    event.preventDefault()
    this.props.loginNormal(this.state.credentials)
  }

  render () {
    return (
      <div class='row'>
        <form class='col s12'>
          <div class='row'>
            <div class='input-field col s12'>
              <input id='email' type='email' class='validate' onChange={this.onChange}></input>
              <label for='email'>Email</label>
            </div>
          </div>
          <div class='row'>
            <div class='input-field col s12'>
              <input id='password' type='password' class='validate' onChange={this.onChange}></input>
              <label for='password'>Password</label>
            </div>
          </div>
          <div class='row'>
            <span class='waves-effect waves-light btn blue lighten-1' onClick={this.onSave}>Login</span>
          </div>
          <div class='row'>
            <h2 style={{color: 'white'}}>Login with your</h2>
            <span class='waves-effect waves-light btn blue lighten-1 col s12'>FaceBook</span>
            <span class='waves-effect waves-light btn blue lighten-1 col s12'>Gmail</span>
            <span class='waves-effect waves-light btn blue lighten-1 col s12'>Twitter</span>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loginNormal,
    loginAuth0
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(LoginBody)
