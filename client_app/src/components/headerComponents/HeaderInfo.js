import React from 'react'
import PlusCircle from 'react-icons/fa/plus-circle'

export default class HeaderInfo extends React.Component {
  onIconMouseEnter (e) {
    e.target.style.color='white'
  }

  onIconMouseLeave (e) {
    e.target.style.color = 'grey'
  }

  onIconClick (type) {
    switch (type) {
      case 'ADD_MEDIA': {
        console.log(22222)
        this.props.triggerAddMedia()
        break
      }
    }
  }

  render () {
    const style = {borderTopRightRadius: '5px', borderTopLeftRadius: '5px'}
    const headerStyle = {color: 'white', margin: '5%'}
    return (
      <div class='menu-component row' style={style}>
        <h4 style={headerStyle}>Add New</h4>
        <div class='col s12'>
          <PlusCircle id='add-media'
                      onMouseEnter={this.onIconMouseEnter.bind(this)}
                      onMouseLeave={this.onIconMouseLeave.bind(this)}
                      onClick={this.onIconClick.bind(this, 'ADD_MEDIA')}
                      style={{color: 'grey', fontSize: '150%'}}
          />
        </div>
      </div>
    )
  }
}
