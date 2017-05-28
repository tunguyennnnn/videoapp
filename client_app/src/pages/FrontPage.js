import React from 'react'
import Header from '../containers/Header'
import MediaContainer from '../containers/MediaContainer'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'


export default class Layout extends React.Component {
  render () {
    return (
      <div data-ui-grid>
        <Header/>
        <MediaContainer />
      </div>
    )
  }
}
