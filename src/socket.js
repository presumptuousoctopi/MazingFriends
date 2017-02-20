/*******************************************************
 Sockets to Server
*******************************************************/

socket.on('roomName', function(roomName) {
  console.log('Currently in  : ', roomName);
});

socket.on('serverSendingMaze', function(maze) {
  console.log('receive a maze from server!');
  buildSimpleMaze(maze);
});

socket.on('firstPlayer', function(firstPlayer) {
  console.log('firstPlayer');
  // window.maze = generateMaze(mazeSize,mazeSize);
  // buildSimpleMaze(maze);
  window.camera.position = firstPlayerPosition;
});

socket.on('secondPlayer', function(secondPlayer) {
  console.log('secondPlayer');
  window.playerType = secondPlayer;
  window.camera.position = mediumLevelSecondPlayerPosition;
});

socket.on('newPlayerRequestInfo', function() {
  console.log('New player joined!');
  socket.emit('sendMaze', window.maze);
  socket.emit('sendPlayer', window.camera.position);
});

socket.on('receiveMaze', function(maze) {
  console.log('Received maze!');
  // buildSimpleMaze(maze);
  socket.emit('sendPlayer', window.camera.position);
});

socket.on('receivePlayer', function(playerCamera) {
  console.log('Received playerCamera!', playerCamera);
  window.otherPlayer = addSphere();
  window.otherPlayer.position = playerCamera;
});

socket.on('receiveUserPosition', function(userPosition) {
  console.log('inside userPositionChanged');
  if ( window.otherPlayer ) {
    console.log(userPosition);
    console.log(window.camera.position);
    var p1 = window.camera.position;
    var p2 = userPosition;
    var distanceBetweenUsers = window.calculateDistance(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);
    if ( distanceBetweenUsers < 1 ) {
      window.finishGame();
    }
    window.otherPlayer.position = userPosition;
  }
});

socket.on('incomingShot', function(shooter) {
  console.log('inside incomingShot');
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

window.addEventListener("click", shootBullet.bind(this, window.camera));
window.addEventListener("mousemove", window.mouseControl.bind(this, window.camera, mousePosition));
