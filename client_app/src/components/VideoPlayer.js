import React from 'react'
import VideoInfo from './videocomponents/VideoInfo'
import MediaDescription from './mediaCommon/MediaDescription'
import SocialDescription from './mediaCommon/SocialDescription'
import { DefaultPlayer as Video } from 'react-html5video'
import 'react-html5video/dist/styles.css'

export default class VideoPlayer extends React.Component {

  render () {
    const containerStyle = {border: '3px solid #000', borderRadius: '10px', backgroundSize: '100%'}
    const {source, description, socialInfo} = this.props
    return (
      <div class='uk-width-3-5 uk-float-left uk-margin-small-left uk-margin-small-right uk-margin-bottom'>
        <div>
          <Video autoPlay loop muted
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
            onCanPlayThrough={() => {
                // Do stuff
            }}>
            <source src={source} type="video/webm" />
            <track label="English" kind="subtitles" srcLang="en" src={source} default />
          </Video>
        </div>
        <MediaDescription description={description} />
        <SocialDescription socialInfo={socialInfo} />
      </div>
    )
  }
}
