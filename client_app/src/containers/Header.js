import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import FilterButton from '../components/headerComponents/FilterButton'
import HeaderInfo from '../components/headerComponents/HeaderInfo'
import NavigationButton from '../components/headerComponents/NavigationButton'
import SearchBar from '../components/headerComponents/SearchBar'
import * as FrontPageActions from '../actions/index'
import {triggerAddMedia} from '../actions/newMediaAction'

class Header extends React.Component {
  componentDidMount () {
    this.props.showAllMedia()
  }

  render () {
    const {showAllMedia, showVideosOnly, showImagesOnly, showInfoOnly, showMostLove, showHottest, media} = this.props
    return (
      <div class='col s3'>
        <div class='uk-margin-top uk-margin-left uk-margin-right'>
          <HeaderInfo triggerAddMedia={this.props.triggerAddMedia}/>
          <ul>
            <li><NavigationButton name={'Home'} link={'/'} /></li>
            <li><NavigationButton name={'My Page'} link={'/myPage'} /></li>
          </ul>
          <ul>
            <li><SearchBar /></li>
            <li><FilterButton name={'All'} action={showAllMedia.bind(this, media)} /></li>
            <li><FilterButton name={'Videos'} action={showVideosOnly.bind(this, media)} /></li>
            <li><FilterButton name={'Photos'} action={showImagesOnly.bind(this, media)} /></li>
            <li><FilterButton name={'Info'} action={showInfoOnly.bind(this, media)} /></li>
            <li><FilterButton name={'Most ❤'} action={showMostLove.bind(this, media)} /></li>
            <li><FilterButton name={'Hottest'} action={showHottest.bind(this, media)} /></li>
          </ul>
        </div>
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
    ...FrontPageActions,
    triggerAddMedia
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
