import React from 'react'

export default class FilterButton extends React.Component {
  render () {
    const {name, action} = this.props
    const style = {marginTop: '2px'}
    return (
      <span class="waves-effect waves-light btn uk-width-1 grey lighten-1"
          style={style}
          onClick={() => action()}>
          {name}
      </span>
    )
  }
}
