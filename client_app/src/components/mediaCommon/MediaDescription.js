import React from 'react'

export default class MediaDescription extends React.Component {
  render () {
    const style={background: 'white'}
    const {title, author, detail} = this.props.description
    return (
      <div class='uk-width-1-1' style={style}>
        <div class='uk-margin-small-left uk-margin-small-right'>
          <h5>{title}</h5>
          <span>{author}</span>
          <div class='uk-margin-top' style={{maxHeight: '150px', overflowY: 'scroll'}}>
            <p>
              {detail}
            </p>
          </div>
        </div>
      </div>
    )
  }
}
