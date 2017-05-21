import React from 'react'
import VideoPlayer from '../components/VideoPlayer'
import ImageContainer from '../components/ImageContainer'
export default class MediaContainer extends React.Component {
  render () {
    return (
      <div id='media-container' class='uk-width-3-4 uk-float-left'>
        <div class='uk-margin-left'>
          <ImageContainer
            source={'http://www.commentsyard.com/wp-content/uploads/2016/04/Youre-Beautiful-CY193.jpg'}
            description={{title: 'Beautiful Life', author: 'Tu Nguyen',
                          detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        }}
            socialInfo={{postTime: 'May 2017', comments: {count: 10, list: []}}}
          />
        </div>
      </div>
    )
  }
}
