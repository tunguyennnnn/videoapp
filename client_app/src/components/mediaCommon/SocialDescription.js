import React from 'react'

export default class SocialDescription extends React.Component {
  render () {
    const {postTime, comments} = this.props.socialInfo
    console.log(this.props.socialInfo)
    return (
      <nav class='uk-navbar-container black' data-uk-navbar>
        <div class='uk-navbar-left'>
          <ul class='uk-navbar-nav'>
            <li><a href=''>{postTime}</a></li>
            <li class='uk-parent'><a href=''>Comment</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}
