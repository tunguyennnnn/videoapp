import React from 'react'
import FilterButton from '../actionComponents/FilterButton'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {showAllMedia, showImagesOnly, showVideosOnly} from '../../actions/index'
class UtilityContainer extends React.Component {
  render () {
    const {showAllMedia, showVideosOnly, showImagesOnly, media} = this.props
    return (
      <div class='menu-component'>
        <FilterButton name={'All'} action={showAllMedia.bind(this, media)} />
        <FilterButton name={'Image Only'} action={showImagesOnly.bind(this, media)} />
        <FilterButton name={'Video Only'} action={showVideosOnly.bind(this, media)} /> 
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    media: state.media
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    showImagesOnly: showImagesOnly,
    showVideosOnly: showVideosOnly,
    showAllMedia: showAllMedia
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(UtilityContainer)
