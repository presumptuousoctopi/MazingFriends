const webpack = require('webpack');
const config = require('./webpack.config');
const open = require('open');
var os = require('os');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
var mazes = require('./src/customMazes');
var db = require('./db.js');
var bcrypt = require('bcryptjs');



/*************************************************************************************************
 Node & Express
 *************************************************************************************************/

app.use( function(req, res, next) {
  console.log('current serving ', req.method, ' @ ', req.url);
  next();
});

app.use(express.static(__dirname + '/src'));

app.get('*', function (request, response){
  response.sendFile(path.join(__dirname, './src/index.html'))
});

http.listen(port, function () {
  console.log('Example app listening on port 3000!');
});

/*************************************************************************************************
 Socket.io
 *************************************************************************************************/

/*************************************************************************************************
 Game and Webrtc Signal Sockets
*************************************************************************************************/


var userCount = 0;
var rooms = {};
var playerRoom = {};
var messages = {};
var roomCount = 0;
var newRoom = [];
var clients = {};
var usernames = {};



// Start socket.io server
io.on('connection', function(socket){
  // Increment every time a new user is connected
  userCount++;
  console.log('a user connected', userCount);
  // Listen for createRoom
  socket.on('createRoom', function(roomName) {
    // If no empty room exists, make a new room and put user into it
    if ( !rooms[roomName] ) {
      // Create/save room and increment room count
      rooms[roomName] = 1;
      roomCount++;
      // Associate room name to user's socket id
      playerRoom[socket.id] = roomName;
      // Notify user that he/she is first player
      socket.emit('firstPlayer', 'firstPlayer');
      // Notify room name
      socket.emit('roomName', roomName);
      // Connect user to the room
      socket.join(roomName);
      // Send maze to user
      socket.emit('serverSendingMaze', mazes.mediumLevelMaze);
      console.log('A user made a room called ', roomName);
    } else {
      // Send error message back to user
      socket.emit('roomJoinError', 'roomAlreadyExsits');
    }
  });

  socket.on('joinRoom', function(roomName) {
    if ( !rooms[roomName] ) {
      // Send error message back to user
      socket.emit('roomJoinError', 'noSuchRoom');
    } else if ( rooms[roomName] === 2 ) {
      // Send error message back to user
      socket.emit('roomJoinError', 'roomFull');
    } else {
      // increment number of users in the room
      rooms[roomName]++;
      // Associate room name to user's socket id
      playerRoom[socket.id] = roomName;
      // Connect user to the room
      socket.join(roomName);
      // Notify user that he/she is second player
      socket.emit('secondPlayer', 'secondPlayer');
      // Notify room name
      socket.emit('roomName', roomName);
      // Request other player's game information
      socket.broadcast.to(playerRoom[socket.id]).emit('newPlayerRequestInfo');
      // Send maze to user
      socket.emit('serverSendingMaze', mazes.mediumLevelMaze);
      console.log('A user joined a room called ', roomName);
    }
  });

  socket.on('message', function(message) {
    // for a real app, would be room-only (not broadcast)
    socket.broadcast.emit('message', message);
  });

  socket.on('create or join', function(room) {
    //increment the counter
    socket.room = room;
    if(!clients[room]){
      clients[room] = 1;
    }
    else {
      clients[room] += 1;
    }
    console.log(clients);
    //if it's the first person, emit the created event
    //else it's the second person
    if (clients[room] === 1) {
      socket.join(room);
      socket.emit('created', room, socket.id);
      console.log(clients);

    } else if (clients[room] === 2) {
      console.log('Client ID ' + socket.id + ' joined room ' + room);
      io.in(room).emit('join', room);
      socket.join(room);
      console.log(room);
      socket.emit('joined', room, socket.id);
      io.sockets.in(room).emit('ready');
    }
    else {
      socket.emit('full', room);
    }
  });
  socket.on('ipaddr', function() {
    var ifaces = os.networkInterfaces();
    for (var dev in ifaces) {
      ifaces[dev].forEach(function(details) {
        if (details.family === 'IPv4' && details.address !== '127.0.0.1') {
          socket.emit('ipaddr', details.address);
        }
      });
    }
  });

  // Receive a user's initial position and send it to all other players in the room
  socket.on('sendPlayer', function(playerCamera) {
    socket.broadcast.to(playerRoom[socket.id]).emit('receivePlayer', playerCamera);
  });

  // Receive a user's updated position and send it to all other players in the room
  socket.on('userPositionChanged', function(userPosition) {
    socket.broadcast.to(playerRoom[socket.id]).emit('receiveUserPosition', userPosition);
  });

  // Receive initial location of bullet that was fired and send it to all other players in the room
  socket.on('shotFired', function(shooter) {
    socket.broadcast.to(playerRoom[socket.id]).emit('incomingShot', shooter );
  });

  // Receive a user's message and return all messages posted in the room
socket.on('sendMessage', function(message) {
  var roomName = playerRoom[socket.id];
  var roomMessages = messages[roomName] || [];
  // Add new message and userId to messages array
  roomMessages.push({
    userId: socket.id,
    message: message
  });
  // Save the update messages array
  messages[roomName] = roomMessages;
  // Send back ten newest messages to all users in the room
  var lastTenMessages = roomMessages.slice(roomMessages.length-10);
  io.to(roomName).emit('receiveMessage', lastTenMessages);
});

// Decerement user count when a user leaves the game
socket.on('disconnect', function(){
  userCount--;
  rooms[playerRoom[socket.id]]--;
  console.log('user disconnected! Current user count : ', userCount);
});

  // Send back number of users in the server
  socket.on('numberOfUsers', function() {
    socket.emit('receiveNumberOfUsers', userCount);
  });
  
  /*************************************************************************************************
   Authentication Sockets
  *************************************************************************************************/
  socket.on('signup', function(userInfo) {
    var username = userInfo.username;
    var password = userInfo.password;
    console.log('in signup');
    // Check whether username already exists
    db.User
      .findOne({ 
        where: { 
          username: username 
        }
      })
      .then( function(user) {
        bcrypt.genSalt(10, function(err2, salt) {
          if (user || err2) {
            // If user already exists, send an error signal back to user
            socket.emit('signupResponse', 'Username already exists');
          } else {
            bcrypt.hash(password, salt, function(err, hashedPassword) {
              db.User.create({ 
                username: username,
                password: hashedPassword
              })
            });
            usernames[socket.id] = username;
            socket.emit('signupResponse', null);
            console.log('User created!');
          }
        });
      });
  });

  socket.on('signin', function(userInfo) {
    var username = userInfo.username;
    var password = userInfo.password;
    console.log('in signin');
    // CHeck whether user already exists
    db.User
      .findOne({ 
        where: { 
          username: username 
        }
      })
      .then( function(user) {
        // If there is no such user, then check password
        if ( !user ) {
          socket.emit('signinResponse', 'user does not exist');
        } else {
          bcrypt.compare(password, user.password, function(err, isAuthenticated) {
            if( err || !isAuthenticated) {
              console.log(err, password, user.password);
              socket.emit('signinResponse', 'wrong password');
            } else {
              usernames[socket.id] = username;
              socket.emit('signinResponse', null);
            }
          });
        }
      })
  });

});
// socket.emit('signup', {
//   username: 'djk',
//   password: 'hey'
// });
// socket.on('signupError', function(msg) {
//   alert(msg);
// });
// socket.on('signinError', function(msg) {
//   alert(msg);
// });

