import React from 'react'
import VideoInfo from './videocomponents/VideoInfo'

export default class VideoPlayer extends React.Component {
  render () {
    return (
      <li>
        <div class='uk-container-center'>
          <VideoInfo title={"Clojure Programming"} duration={200}/>
        </div>
      </li>
    )
  }
}
