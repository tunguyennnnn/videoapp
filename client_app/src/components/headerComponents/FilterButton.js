import React from 'react'
const $ = require('jquery')

export default class FilterButton extends React.Component {
  handleMouseEnter (e) {
    $(e.target).addClass('red lighten-1')
  }

  handleMouseLeave(e) {
    $(e.target).removeClass('red')
    $(e.target).removeClass('lighten-1')
  }

  render () {
    const {name, action} = this.props
    const style = {marginTop: '2px', background: 'rgba(0, 0, 0, 0.6)', color: 'white'}
    return (
      <span class="waves-effect waves-red btn-flat menu-component navigation-button"
          style={style}
          onMouseEnter={this.handleMouseEnter.bind(this)}
          onMouseLeave={this.handleMouseLeave.bind(this)}
          onClick={() => action()}>
          {name}
      </span>
    )
  }
}
