import React from 'react'
import VideoPlayer from '../components/VideoPlayer'
export default class VideoContainer extends React.Component {
  render () {
    return (
      <div id='media-container' class='uk-width-3-4 uk-float-left'>
        <VideoPlayer />
      </div>
    )
  }
}
