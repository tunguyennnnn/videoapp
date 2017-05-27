import React from 'react'
import {Link} from 'react-router'
const $ = require('jquery')

export default class NavigationButton extends React.Component {
  handleMouseEnter (e) {
    $(e.target).addClass('red lighten-1')
  }

  handleMouseLeave(e) {
    $(e.target).removeClass('red')
    $(e.target).removeClass('lighten-1')
  }

  render () {
    const {name, link} = this.props
    return (
      <Link class='waves-effect waves-red btn-flat menu-component navigation-button'
                to={link}
                style={{color: 'white'}}
                onMouseEnter={this.handleMouseEnter.bind(this)}
                onMouseLeave={this.handleMouseLeave.bind(this)}>
        {name}
      </Link>
    )
  }
}
