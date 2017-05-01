const dotenv = require('dotenv')
dotenv.config()

const devConfig = {
  env: 'development',
  MONGOOSE_DEBUG: true,
  db: process.env.REMOTE_MONGO || 'mongodb://localhost/videoApp',
  port: process.env.PORT || 4000
}
module.exports = devConfig
