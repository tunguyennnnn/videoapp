import React from 'react'

export default class SearchBar extends React.Component {
  render () {
    const style={background: 'white'}
    return (
      <input class='col s12' placeholder='Search'/>
    )
  }
}
