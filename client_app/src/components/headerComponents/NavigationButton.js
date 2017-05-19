import React from 'react'

export default class NavigationButton extends React.Component {
  render () {
    return (
      <a class='waves-effect waves-teal btn-flat menu-component navigation-button'>{this.props.name}</a>
    )
  }
}
