import React from 'react'

export default class LoginPageHeader extends React.Component {
  render () {
    const style = {color: 'white'}
    return (
      <h1 style={style} class='center-align'>{this.props.title}</h1>
    )
  }
}
