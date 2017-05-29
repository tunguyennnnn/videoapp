import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import VideoPlayer from '../components/VideoPlayer'

class MyMediaContainer extends React.Component {
  generateMediaList () {
    return this.props.media.map((media, i) => {
      const {source, description, socialInfo} = media
      return <VideoPlayer key={i} source={source} description={description} socialInfo={socialInfo} />
    })
  }

  render () {
    return (
      <div class='uk-width-2-3 uk-float-left'>
        {this.generateMediaList()}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    media: state.mymedia
  }
}

export default MyMediaContainer
