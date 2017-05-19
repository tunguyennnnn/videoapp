import React from 'react'
import HeaderInfo from '../components/headerComponents/HeaderInfo'
import NavigationButton from '../components/headerComponents/NavigationButton'
export default class Header extends React.Component {
  render () {
    const navigationList = ['Home', 'Favorite', 'Post'].map((nav, i) => {
      return <li key={i}><NavigationButton name={nav}/></li>
    })

    return (
      <div class='uk-width-1-4 uk-float-left'>
        <div class='uk-margin-top uk-margin-left'>
          <HeaderInfo />
          <ul>
            {navigationList}
          </ul>
        </div>
      </div>
    )
  }
}
