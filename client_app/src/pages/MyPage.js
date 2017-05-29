import React from 'react'
import MyMediaContainer from '../containers/MyMediaContainer'
import MyPageMenu from '../containers/MyPageMenu'


export default class MyPage extends React.Component {
  render () {
    return (
      <div id='my-page-container' data-ui-grid>
        <MyPageMenu />
        <MyMediaContainer />
      </div>
    )
  }
}
