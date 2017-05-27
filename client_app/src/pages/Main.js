import React from 'react'
import Link from 'react-router'

export default class Main extends React.Component {
  render () {
    return (
      <nav class="uk-navbar-container uk-margin" data-uk-navbar="mode: click">
        <div class="uk-navbar-left">
          <ul class="uk-navbar-nav">
            <li class="uk-active"><a href="#">Active</a></li>
            <li>
              <a href="#">Parent</a>
              <div class="uk-navbar-dropdown">
                <ul class="uk-nav uk-navbar-dropdown-nav">
                  <li class="uk-active"><a href="#">Active</a></li>
                  <li><a href="#">Item</a></li>
                  <li><a href="#">Item</a></li>
                </ul>
              </div>
            </li>
            <li><a href="#">Item</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}
