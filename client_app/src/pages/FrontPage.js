import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import FrontPageContainer from '../containers/FrontPageContainer'
import {loginFail} from '../actions/LoginAction'
import Auth from '../utils/Auth'
class FrontPage extends React.Component {
  componentWillMount () {
    if (!Auth.isAuthenticated()) {
      this.props.loginFail()
    }
  }
  render () {
    return (
      <div>
        <FrontPageContainer />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loginFail
  }, dispatch)
}
export default connect(null, mapDispatchToProps)(FrontPage)
