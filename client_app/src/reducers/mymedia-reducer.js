export default function () {
  return [
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
