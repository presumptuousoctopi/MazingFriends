/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;
// import createComponent from 'helpers/shallowRenderHelper';

// import Main from 'components/Main';

var io = require('socket.io-client');
var socketURL = 'http://localhost:3000';

var options ={
  transports: ['websocket'],
  'force new connection': true
};

describe('Socket.io Server', function(){

  it('Should respond appropriately to players when connected', function(done){
    var player1 = io.connect(socketURL, options);
    player1.on('firstPlayer', function(playerName1){
      var player2 = io.connect(socketURL, options);
      player2.on('secondPlayer', function(playerName2){
        player1.disconnect();
        player2.disconnect();
        if ( playerName1 === 'firstPlayer' && playerName2 === 'secondPlayer' ) {
          done();
        }
      });
    });
  });

  it('Should put players in the same room in pairs', function(done){
    var player1 = io.connect(socketURL, options);
    player1.on('roomName', function(roomName1){
      var player2 = io.connect(socketURL, options);
      player2.on('roomName', function(roomName2){
        var player3 = io.connect(socketURL, options);
        player3.on('roomName', function(roomName3) {
          var player4 = io.connect(socketURL, options);
          player4.on('roomName', function(roomName4) {
            player1.disconnect();
            player2.disconnect();
            player3.disconnect();
            player4.disconnect();
            if ( !!roomName1 && !!roomName2 && roomName1 === roomName2 && roomName1 !== roomName3 && roomName3 === roomName4 ) {
              done();
            }
          });
        });
      });
    });
  });

  it('Should send same maze to all players', function(done){
    var player1 = io.connect(socketURL, options);
    player1.on('serverSendingMaze', function(maze1) {
      var player2 = io.connect(socketURL, options);
      player2.on('serverSendingMaze', function(maze2) {
        var player3 = io.connect(socketURL, options);
        player3.on('serverSendingMaze', function(maze3) {
          var player4 = io.connect(socketURL, options);
          player4.on('serverSendingMaze', function(maze4) {
            player1.disconnect();
            player2.disconnect();
            player3.disconnect();
            player4.disconnect();
            if ( !!maze1 && JSON.stringify(maze1) === JSON.stringify(maze2) && JSON.stringify(maze2) === JSON.stringify(maze3) ) {
              done();
            }
          });
        });
      });
    });
  });

  it('Should send player\'s camera only to other player', function(done) {
    var player1Camera = '123';
    var player1 = io.connect(socketURL, options);
    player1.on('connect', function() {
      var player2 = io.connect(socketURL, options);
      player2.on('connect', function() {
        player1.emit('sendPlayer', player1Camera);
        player1.on('receivePlayer', function() {
          throw err;
        });
        player2.on('receivePlayer', function(playerCamera) {
          if ( player1Camera === playerCamera ) {
            done();
          }
        });
      });
    });    
  });

  it('Should update user position only to other player', function(done) {
    var player1Position = '123';
    var player1 = io.connect(socketURL, options);
    player1.on('connect', function() {
      var player2 = io.connect(socketURL, options);
      player2.on('connect', function() {
        player1.emit('userPositionChanged', player1Position);
        player1.on('receiveUserPosition', function() {
          throw err;
        });
        player2.on('receiveUserPosition', function(userPosition) {
          if ( userPosition === player1Position ) {
            done();
          }
        });
      });
    });
  });

  it('Should update bullet position only to other player', function(done) {
    var bullet1 = '123';
    var player1 = io.connect(socketURL, options);
    player1.on('connect', function() {
      var player2 = io.connect(socketURL, options);
      player2.on('connect', function() {
        player1.emit('shotFired', bullet1);
        player1.on('incomingShot', function() {
          throw err;
        });
        player2.on('incomingShot', function(bullet) {
          if ( bullet === bullet1 ) {
            done();
          }
        });
      });
    });
  });

  it('Should receive a message from a player and send messsages to all players in same room', function(done) {
    var player1 = io.connect(socketURL, options);
    player1.on('connect', function() {
      var player2 = io.connect(socketURL, options);
      player2.on('connect', function() {
        player1.emit('sendMessage', 'hey, everyone!');
        player1.on('receiveMessage', function(messages1) {
          player2.on('receiveMessage', function(messsages2) {
            if ( JSON.stringify(messages1) === JSON.stringify(messsages2) ) {
              done();
            }
          });
        });
      });
    });
  });
  
});

