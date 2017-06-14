const fs = require('fs')
const http = require('http')
const url = require('url')
const path = require('path')
const Promise = require('bluebird')
const fsStat = Promise.promisify(fs.stat)
const fsReadFile = Promise.promisify(fs.readFile)

const findPath = (filePath) => {
  const partition = filePath.split('/')
  const dir = partition[1]
  const file = partition[2]
  if (dir === 'images' || dir === 'videos') {
    return {
      type: dir,
      file
    }
  }
}

const sendVideo = ({req, res, file}) => {
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
        'Access-Control-Allow-Origin': '',
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

const sendImage = ({req, res, file}) => {
  fsReadFile(file)
    .then((img) => {
      res.writeHead(200, {'Content-Type': 'image/gif' })
      res.end(img, 'binary')
    })
    .catch((err) => {
      console.log('error: ', err)
      res.send(err)
    })
}

http.createServer((req, res) => {
  const {url} = req
  const filePath = findPath(url)
  if (filePath) {
    const {type, file} = filePath
    if (type ==='videos') {
      sendVideo({req, res, file: `./videos/${file}`})
    } else {
      sendImage({req, res, file: `./images/${file}`})
    }
  } else {
    res.sendStatus(500)
  }

}).listen(8888)

module.exports = http
