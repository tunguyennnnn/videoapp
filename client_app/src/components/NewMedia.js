import React from 'react'
const $ = require('jquery')
import Modal from 'react-modal'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import DropzoneComponent from 'react-dropzone-component'

class NewMedia extends React.Component {

  afterOpenModal () {

  }

  closeModal () {

  }

  dropZone () {
    const eventHandlers = { addedfile: (file) => console.log(file) }
    const componentConfig = {
      iconFiletypes: ['.jpg', '.png', '.gif', '.mp4'],
      showFiletypeIcon: true,
      postUrl: '/uploadHandler'
    }
    const djsConfig = {
      addRemoveLinks: true,
      params: {
        myParameter: "I'm a parameter!"
      }
    }
    return (
      <DropzoneComponent config={componentConfig}
                       eventHandlers={eventHandlers}
                       djsConfig={djsConfig} />
    )
  }

  render () {
    const customStyles = {
      overlay: {
        background: 'rgba(148, 151, 148, 0.2)',
        zIndex: 100
      },
      content: {
        background: 'rgba(0, 0, 0, 0.8)',
        width: '50%',
        position: 'absolute',
        left: '25%'
      }
    }
    return (
      <Modal
        isOpen={this.props.newMediaModalState.triggered}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel={'NewMediaModal'}>
        <div class='row' style={{color: 'white'}}>
          <div class='col s12'>
            <h2 style={{color: 'white'}}>SHARE YOUR INTEREST</h2>
          </div>
          <div class='row col s12'>
            <form class='col s12'>
              <div class='row'>
                {this.dropZone()}
                <div class='input-field col s12'>
                  <input id='icon_prefix' type='text' class='validate'></input>
                  <label for='icon_prefix'>Topic</label>
                </div>
                <div class='input-field col s12'>
                  <input id='icon_telephone' type='text' class='validate'></input>
                  <label for='icon_telephone'>Location</label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    newMediaModalState: state.newmedia
  }
}
export default connect(mapStateToProps)(NewMedia)
