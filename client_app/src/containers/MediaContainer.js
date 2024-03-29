import React from 'react'
import VideoPlayer from '../components/VideoPlayer'
import ImageContainer from '../components/ImageContainer'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class MediaContainer extends React.Component {
  constructor (props) {
    super(props)
  }

  generateMediaList () {
    return this.props.media.map((media, i) => {
      const {source, description, socialInfo} = media
      if (media.type === 'image') {
        return <ImageContainer key={i} source={source} description={description} socialInfo={socialInfo} />
      } else if (media.type === 'video') {
        return <VideoPlayer key={i} source={source} description={description} socialInfo={socialInfo} />
      }
    })
  }

  render () {
    return (
      <div id='media-container' class='col s9'>
        <div class='uk-margin-left uk-margin-top uk-margin-right'>
          {this.generateMediaList()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    media: state.filteredMedia
  }
}

export default connect(mapStateToProps)(MediaContainer)
