/*******************************************************
 Game Sockets
*******************************************************/

setInterval ( function() {
  if ( !!window.mazeLevel && !!window.otherPlayer ) {
    var p1 = window.camera.position;
    var p2 = window.otherPlayer.position;
    socket.emit('calculateDistance', {
      p1: p1,
      p2: p2,
      level: window.mazeLevel
    });
  } 
}, 3000);




var protocolPrefix = (window.location.protocol === 'https:') ? 'wss:' : 'ws:';


// Notify whether user is first or second player and update user position
window.inRoom = false;
socket.on('firstPlayer', function(firstPlayer) {
  window.inRoom = true;
  window.playerType = firstPlayer;
  window.camera.position = window.firstPlayerPosition;
  window.camera.rotation = new BABYLON.Vector3(-0.38385, -.77694, 0);
  console.log('You are first player');
  engine.runRenderLoop(function(){
    window.outputplane.position = new BABYLON.Vector3(-35 + camera.position.x, 35 +camera.position.y, 35 + camera.position.z);
    window.outputplane2.position = new BABYLON.Vector3(20 + camera.position.x, 20 +camera.position.y, 20 + camera.position.z);
    var xGrid = Math.floor(window.camera.position.x / 4 + .4);
    var yGrid = Math.floor(window.camera.position.z / 4 + .4);
    // console.log('Here are grids : ', xGrid, yGrid);
    // console.log('fps : ', engine.fps);
    var currentCameraPosition = camera.position.x+camera.position.y+camera.position.z;
    if ( currentCameraPosition !== previousCameraPosition ) {
        previousCameraPosition = currentCameraPosition;
        socket.emit('userPositionChanged', camera.position);
    }
    if ( currentTime !== 0 && window.finished === false ) {
      window.refreshTime(window.currentTime);    
    }
    if ( window.otherPlayer && window.finished === false) {
      var p1 = window.camera.position;
      var p2 = window.otherPlayer.position;
      // Calculate distance between two users

      var distanceBetweenUsers = window.calculateDistance(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);
      if ( distanceBetweenUsers < 3 ) {
        window.finishGame();
      }
    }
    // console.log('currentTime : ', currentTime);
    // console.log('position : ', window.camera.position);
    // console.log(window.camera.rotation);
    scene.render();
  });

});

socket.on('secondPlayer', function(secondPlayer) {
  window.inRoom = true;
  window.playerType = secondPlayer;
  window.camera.keysUp = [87];
  window.camera.keysDown = [83]; 
  window.camera.keysLeft = [65]; 
  window.camera.keysRight = [68];


  window.camera.rotation = new BABYLON.Vector3(-0.38385, -.77694, 0);
  // Send player position to other player

  socket.emit('sendPlayer', window.camera.position);
  console.log('secondPlayer');
  engine.runRenderLoop(function(){
    outputplane.position = new BABYLON.Vector3(-35 + camera.position.x, 35 +camera.position.y, 35 + camera.position.z);
    outputplane2.position = new BABYLON.Vector3(20 + camera.position.x, 20 +camera.position.y, 20 + camera.position.z);

    var currentCameraPosition = camera.position.x+camera.position.y+camera.position.z;
    if ( currentCameraPosition !== previousCameraPosition ) {
        previousCameraPosition = currentCameraPosition;
        socket.emit('userPositionChanged', camera.position);
    }
    if ( window.finished === false ) {
      window.refreshTime(window.currentTime);        
    }
    if ( window.otherPlayer && window.finished === false ) {
      var p1 = window.camera.position;
      var p2 = window.otherPlayer.position;
      // Calculate distance between two users
      var distanceBetweenUsers = window.calculateDistance(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);
 
      if ( distanceBetweenUsers < 3 ) {
        window.finishGame();
      }
    }
    // console.log(currentTime);
    // console.log(window.camera.rotation);
    scene.render();
  });

});

// Receive other player's position and render it
socket.on('receivePlayer', function(playerCamera) {
  window.otherPlayer = addSphere();
  window.otherPlayer.position = playerCamera;
  console.log('Received playerCamera!', playerCamera);
});

// Receive the room information
socket.on('roomName', function(roomName) {
  console.log('Room name : ', roomName);
});

// Receive a custom map from server and build the maze
socket.on('serverSendingMaze', function(mazeData) {
  var maze = mazeData.maze;
  console.log('Here is mazeData : ', mazeData);
  window.mazeLevel = mazeData.mazeLevel.toString();
  window.mazeSize;
  if ( window.playerType === 'secondPlayer' ) {
    window.camera.position = window.secondPlayerPositions[mazeData.mazeLevel];
  }
  if ( window.mazeLevel === '1' ) {
    window.mazeSize = 5;
  } else if ( window.mazeLevel === '2' ) {
    window.mazeSize = 10;
  } else if ( window.mazeLevel === '3' ) {
    window.mazeSize = 20;
  }
  // window.secondPlayerPosition = secondPlayerPositions[mazeSize];
  window.groundBoundaryLength = window.boundaryWalls[window.mazeSize][1] * 1.2;
  const a = window.boundaryWalls[window.mazeSize][0];
  const b = window.boundaryWalls[window.mazeSize][1];
  window.farthestUserDist = Math.pow(a * a + b * b, (1/2));
  buildSimpleMaze(maze);
  console.log('Received a maze from server');
  window.ground = addGround();
  buildBoundaryWalls(boxLength, window.scene);
  if ( window.mazeLevel === '3' ) {
    window.createGhost();
    window.createGhost();
    window.createGhost();
    window.createGhost();
    window.createGhost();
    window.createGhost();
    window.createGhost();got
  } else if ( window.mazeLevel === '2' ) {
    window.createGhost();    
    window.createGhost();
  }
  window.createGhost();  
});

// Send player position to newly joined player(s)
socket.on('newPlayerRequestInfo', function() {
  socket.emit('sendPlayer', window.camera.position);
  window.camera.keysUp = [87];
  window.camera.keysDown = [83]; 
  window.camera.keysLeft = [65]; 
  window.camera.keysRight = [68];
  console.log('New player joined!');

});

// Update all other users' positions
socket.on('receiveUserPosition', function(userPosition) {
  if ( window.otherPlayer ) {
    var p1 = window.camera.position;
    var p2 = userPosition;
    var distanceBetweenUsers = window.calculateDistance(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);
    // Calculate distance between two users
    if ( window.distanceBetweenUsers < 1 && window.finished === false ) {
      window.finishGame();
    }
    window.otherPlayer.position = userPosition;
  }
});

// Update all other bullets' positions
socket.on('incomingShot', function(shooter) {
  // This only works for two players
  if ( window.otherPlayer ) {
    shootBullet(shooter, true, true);
  }
});

socket.on("receiveWorldRecord", function (data){
  var seconds = data.time % 60;
  var minutes = Math.floor( data.time / 60 );
  var stringTime = !!minutes ? minutes + ':' + seconds : seconds;
  window.outputplaneTexture2.drawText( "World Record : " + stringTime + ' by ' + data.user, null, 280, "bold 30px verdana", "white", "#0000AA");
});

socket.on('receiveStartTime', function(time) {
  window.originalTime = time;
});