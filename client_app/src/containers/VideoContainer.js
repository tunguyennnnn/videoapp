import React from 'react'
import VideoPlayer from '../components/VideoPlayer'
export default class VideoContainer extends React.Component {
  render () {
    return (
      <div id='video-container'>
        <ul class='uk-grid' data-uk-grid-margin>
          <VideoPlayer />
          <VideoPlayer />
          <VideoPlayer />
          <VideoPlayer />
        </ul>
      </div>
    )
  }
}
