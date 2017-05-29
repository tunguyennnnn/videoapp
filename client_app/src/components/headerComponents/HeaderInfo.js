import React from 'react'

export default class HeaderInfo extends React.Component {
  render () {
    const style = {borderTopRightRadius: '5px', borderTopLeftRadius: '5px', color: 'white'}
    return (
      <div class='menu-component' style={style}>
        <h3>Heyyyy</h3>
      </div>
    )
  }
}
