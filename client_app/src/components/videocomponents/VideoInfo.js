import React from 'react'

export default class VideoInfo extends React.Component {
  render () {
    return (
      <div>
        <span>{this.props.title}</span>
        <span class='video-duration'>{this.props.duration}</span>
      </div>
    )
  }
}
