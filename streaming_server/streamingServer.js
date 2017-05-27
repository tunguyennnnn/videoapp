const fs = require('fs')
const http = require('http')
const url = require('url')
const path = require('path')
const Promise = require('bluebird')
const fsStat = Promise.promisify(fs.stat)

http.createServer((req, res) => {
  const {url} = req
  const file = path.resolve(__dirname, 'rich-clojure.mp4')
  console.log(url)
  if (req.url != '/rich-clojure.mp4') {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end('<video src="http://localhost:8888/rich-clojure.mp4" controls></video>');
  } else {
    fsStat(file)
      .then((stats) => {
        const {range} = req.headers
        if (!range) {
          return res.sendStatus(404);
        }
        const positions = range.replace(/bytes=/, '').split('-')
        const start = parseInt(positions[0], 10)
        const total = stats.size
        const end = positions[1] ? parseInt(positions[1], 10) : total - 1
        const chunksize = (end - start) + 1
        console.log('chunksize ', chunksize)
        res.writeHead(206, {
          'Content-Range': 'bytes ' + start + '-' + end + '/' + total,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize,
          'Content-Type': 'video/mp4'
        })
        const stream = fs.createReadStream(file, {start, end})
          .on('open', () => {
            stream.pipe(res)
          })
          .on('err', (err) => {
            res.end(err)
          })
      })
      .catch((err) => {
        console.log('error: ', err)
        if (err.code === 'ENOENT') {
          return res.sendStatus(404)
        }
        res.send(err)
      })
    }
}).listen(8888)
