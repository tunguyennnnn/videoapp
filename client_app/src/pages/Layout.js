import React from 'react'
import Header from '../containers/Header'
import MediaContainer from '../containers/MediaContainer'

import { Link } from 'react-router'

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
