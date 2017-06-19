MEDIA APP
Each folder is a nodejs server:
- client_app
- video_server is to handle rest requests and basic data (user, media name, authors ...)
- streaming_server is for uploading and fetching images and videos

To run client app:
run 'npm install' to install the packages
run 'npm run dev' to start the webpack server

to run video_app:
prerequisite: has a local mongodb server or check on Slack for Mongodb cluster we are using
run 'node app/app.js'

to run the streaming server:
in the streaming_server folder please create a folder called 'videos' (used to store videos) and add .mp4 videos to it.
run 'npm start'
