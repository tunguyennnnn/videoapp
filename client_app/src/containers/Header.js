import React from 'react'
import HeaderInfo from '../components/headerComponents/HeaderInfo'
import NavigationButton from '../components/headerComponents/NavigationButton'
export default class Header extends React.Component {
  render () {
    return (
      <div class='uk-width-1-4 uk-float-left'>
        <div class='uk-margin-top uk-margin-left uk-margin-right'>
          <HeaderInfo />
          <ul>
            <li><NavigationButton name={'Home'}/></li>
            <li><NavigationButton name={'Favorite'}/></li>
            <li><NavigationButton name={'My Post'}/></li>
          </ul>
        </div>
      </div>
    )
  }
}
