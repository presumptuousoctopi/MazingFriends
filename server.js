'use strict';
require('core-js/fn/object/assign');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const open = require('open');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');
var io = require('socket.io')(http);
var mazes = require('./customMazes');
// var db = require('./db');

/*eslint no-console:0 */

/**
 * Flag indicating whether webpack compiled for the first time.
 * @type {boolean}
//  */
// let isInitialCompilation = true;

// const compiler = webpack(config);

// new WebpackDevServer(compiler, config.devServer)
// .listen(config.port, 'localhost', (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('Listening at localhost:' + config.port);
// });

// compiler.plugin('done', () => {
//   if (isInitialCompilation) {
//     // Ensures that we log after webpack printed its stats (is there a better way?)
//     setTimeout(() => {
//       console.log('\n✓ The bundle is now ready for serving!\n');
//       console.log('  Open in iframe mode:\t\x1b[33m%s\x1b[0m',  'http://localhost:' + config.port + '/webpack-dev-server/');
//       console.log('  Open in inline mode:\t\x1b[33m%s\x1b[0m', 'http://localhost:' + config.port + '/\n');
//       console.log('  \x1b[33mHMR is active\x1b[0m. The bundle will automatically rebuild and live-update on changes.')
//     }, 350);
//   }
//   isInitialCompilation = false;
// });



/*************************************************************************************************
 Socket.io
*************************************************************************************************/

var userCount = 0;
var rooms = {};
var messages = {};
var roomCount = 0;
var newRoom = [];
var fullRooms = [];



io.on('connection', function(socket){
  userCount++;
  console.log('a user connected', userCount);
  if ( newRoom[0] ) {
    socket.emit('roomName', newRoom[0]);
    rooms[socket.id] = newRoom[0];
    socket.join(newRoom.pop());
    socket.emit('secondPlayer', 'secondPlayer');
    socket.broadcast.to(rooms[socket.id]).emit('newPlayerRequestInfo');
    console.log('Joining curretnly existing room!');
  } else {
    newRoom.push('room' + roomCount);
    roomCount++;
    socket.emit('roomName', newRoom[0]);
    rooms[socket.id] = newRoom[0];
    socket.join(newRoom[0]);
    socket.emit('firstPlayer', 'firstPlayer');
    console.log('Creating a new room and joining it : ', newRoom[0]);
  }

  socket.on('sendMaze', function(maze) {
    console.log('in sendMaze');
    socket.broadcast.to(rooms[socket.id]).emit('receiveMaze', maze);
  });

  socket.on('sendPlayer', function(playerCamera) {
    socket.broadcast.to(rooms[socket.id]).emit('receivePlayer', playerCamera);
  });

  socket.on('userPositionChanged', function(userPosition) {
    socket.broadcast.to(rooms[socket.id]).emit('receiveUserPosition', userPosition);
  });

  socket.on('shotFired', function(shooter) {
   socket.broadcast.to(rooms[socket.id]).emit('incomingShot', shooter );    
  });

  socket.on('sendMessage', function(message) {
    var roomName = rooms[socket.id];
    var roomMessages = messages[roomName] || [];
    roomMessages.push({ 
      userId: socket.id,
      message: message
    });
    messages[roomName] = roomMessages;
    var lastTenMessages = roomMessages.slice(roomMessages.length-10);
    io.to(roomName).emit('receiveMessage', lastTenMessages);
  });

  socket.on('disconnect', function(){
    userCount--;
  });
  socket.emit('serverSendingMaze', mazes.mediumLevelMaze);
});

/*************************************************************************************************
 Node & Express
*************************************************************************************************/

app.use( function(req, res, next) {
  console.log('current serving ', req.method, ' @ ', req.url);
  next();
});

app.use('/', express.static(path.join(__dirname, '/src')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './src'));
})

http.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})