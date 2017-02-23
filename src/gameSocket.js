/*******************************************************
 Game Sockets
*******************************************************/
// Notify whether user is first or second player and update user position
socket.on('firstPlayer', function(firstPlayer) {
  window.camera.position = firstPlayerPosition;
  console.log('You are first player');
  engine.runRenderLoop(function(){
    console.log('fps : ', engine.fps);
    var currentCameraPosition = camera.position.x+camera.position.y+camera.position.z;
    if ( currentCameraPosition !== previousCameraPosition ) {
        previousCameraPosition = currentCameraPosition;
        socket.emit('userPositionChanged', camera.position);
    }
    // console.log(window.camera.position);
    scene.render();
  });

});

socket.on('secondPlayer', function(secondPlayer) {
  window.playerType = secondPlayer;
  window.camera.position = easyLevelSecondPlayerPosition;
  // Send player position to other player
  socket.emit('sendPlayer', window.camera.position);
  console.log('secondPlayer');
  engine.runRenderLoop(function(){
    console.log('fps : ', engine.fps);
    var currentCameraPosition = camera.position.x+camera.position.y+camera.position.z;
    if ( currentCameraPosition !== previousCameraPosition ) {
        previousCameraPosition = currentCameraPosition;
        socket.emit('userPositionChanged', camera.position);
    }
    //console.log(window.camera.rotation);
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
socket.on('serverSendingMaze', function(maze) {
  buildSimpleMaze(maze);
  console.log('Received a maze from server');
});

// Send player position to newly joined player(s)
socket.on('newPlayerRequestInfo', function() {
  socket.emit('sendPlayer', window.camera.position);
  console.log('New player joined!');
});

// Update all other users' positions
socket.on('receiveUserPosition', function(userPosition) {
  if ( window.otherPlayer ) {
    var p1 = window.camera.position;
    var p2 = userPosition;
    // Calculate distance between two users
    var distanceBetweenUsers = window.calculateDistance(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);
    if ( distanceBetweenUsers < 1 ) {
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


/*******************************************************
 User Control Event Listeners
*******************************************************/

var mousePosition = {
  previousX: null,
  previousY: null
};

// Event listener for shooting bullets
window.addEventListener("click", shootBullet.bind(this, window.camera));
// Event listener for mouse movement
// window.addEventListener("mousemove", window.mouseControl.bind(this, window.camera, mousePosition));
