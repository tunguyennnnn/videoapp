import React from 'react'
import MediaContainer from './MediaContainer'
import Header from './Header'
import NewMedia from '../components/NewMedia'

export default class FrontPageContainer extends React.Component {
  render () {
    return (
      <div class='row'>
        <Header />
        <MediaContainer />
        <NewMedia />
      </div>
    )
  }
}
