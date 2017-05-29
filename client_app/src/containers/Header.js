import React from 'react'
import HeaderInfo from '../components/headerComponents/HeaderInfo'
import NavigationButton from '../components/headerComponents/NavigationButton'
import UtilityContainer from '../components/headerComponents/UtilityContainer'
export default class Header extends React.Component {
  render () {
    return (
      <div class='uk-width-1-4 uk-float-left'>
        <div class='uk-margin-top uk-margin-left uk-margin-right'>
          <HeaderInfo />
          <ul>
            <li><NavigationButton name={'Home'} link={'/'} /></li>
            <li><NavigationButton name={'My Page'} link={'/myPage'} /></li>
          </ul>
          <UtilityContainer />
        </div>
      </div>
    )
  }
}
