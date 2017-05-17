import React from 'react'

export default class Header extends React.Component {
  render () {
    return (
      <div>
        <nav class="uk-navbar" style={{background: 'black'}}>
          <ul class="uk-navbar-nav">
            <li><a href="">Me</a></li>
            <li><a href="">My loved videos</a></li>
            <li><a href="">My idols</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}
