import React from 'react'
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
    return (
      <a class='waves-effect waves-red btn-flat menu-component navigation-button'
                style={{color: 'white'}}
                onMouseEnter={this.handleMouseEnter.bind(this)}
                onMouseLeave={this.handleMouseLeave.bind(this)}>
        {this.props.name}
      </a>
    )
  }
}
