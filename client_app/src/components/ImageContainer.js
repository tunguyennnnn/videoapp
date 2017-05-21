import React from 'react'
import MediaDescription from './mediaCommon/MediaDescription'
import SocialDescription from './mediaCommon/SocialDescription'

export default class VideoPlayer extends React.Component {
  render () {
    const style = {position: 'relative', width: '100%'}
    const {source, description, socialInfo} = this.props
    return (
      <div class='uk-width-1-3'>
        <div style={style}>
          <img src={source} />
          <MediaDescription description={description} />
          <SocialDescription socialInfo={socialInfo} />
        </div>
      </div>
    )
  }
}
