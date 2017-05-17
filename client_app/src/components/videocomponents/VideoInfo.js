import React from 'react'

export default class VideoInfo extends React.Component {
  render () {
    return (
      <div>
        <span class='video-title'>{this.props.title}</span>
        <span class='video-duration'>{this.props.duration}</span>
        <span class='video-author' style={{}}>{this.props.author}</span>
      </div>
    )
  }
}
