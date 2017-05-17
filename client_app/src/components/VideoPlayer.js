import React from 'react'
import VideoInfo from './videocomponents/VideoInfo'

export default class VideoPlayer extends React.Component {
  render () {
    const containerStyle = {height: '180px', border: '3px solid #000', borderRadius: '10px', backgroundSize: '100%', backgroundImage: 'url(http://www.commentsyard.com/wp-content/uploads/2016/04/Youre-Beautiful-CY193.jpg)'}

    return (
      <li class='uk-width-1-4'>
        <div style={containerStyle}>
        </div>
        <VideoInfo title={"Clojure Programming"} duration={200} author={"Tu Nguyen"}/>
      </li>
    )
  }
}
