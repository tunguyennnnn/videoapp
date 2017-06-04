import React from 'react'

export default class FilterButton extends React.Component {
  render () {
    const {name, action} = this.props
    console.log(name)
    return (
      <span class="waves-effect waves-light btn">{name}</span>
    )
  }
}
