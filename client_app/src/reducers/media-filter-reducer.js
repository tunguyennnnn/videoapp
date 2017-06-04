export default function (state=[], action) {
  switch (action.type) {
    case 'SHOW_IMAGES_ONLY': {
      return action.payload.filter((me) => me.type === 'image')
      break
    }
    case 'SHOW_VIDEOS_ONLY': {
      return action.payload.filter((me) => me.type === 'video')
      break
    }
    case 'SHOW_ALL_MEDIA': {
      console.log(action)
      return action.payload
      break
    }
    case 'SHOW_INFO_ONLY': {

      break
    }
    case 'SHOW_MOST_LOVE': {
      break
    }
    case 'SHOW_HOTTEST': {
      break
    }
  }
  return [
    {
      id: 0,
      type: 'image',
      source: 'http://www.commentsyard.com/wp-content/uploads/2016/04/Youre-Beautiful-CY193.jpg',
      description: {
        title: 'Beautiful Life',
        author: 'Tu Nguyen',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
      },
      socialInfo: {
        postTime: 'May 2017',
        comments: {
          count: 10,
          list: []
        }
      }
    },
    {
      id: 1,
      type: 'video',
      source: 'http://localhost:8888/rich-clojure.mp4',
      description: {
        title: 'Clojure Programming',
        author: 'Tu Nguyen',
        detail: 'Clojure is a Lisp Dialect'
      },
      socialInfo: {
        postTime: 'May 2017',
        comment: {
          count: 15,
          list: []
        }
      }
    }
  ]
}
