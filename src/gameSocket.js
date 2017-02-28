/*******************************************************
 Game Sockets
*******************************************************/

socket.on('receiveDistance', function(distance) {
  window.distanceBetweenUsers = distance;
});

//data reporter
  var outputplane = BABYLON.Mesh.CreatePlane("outputplane", 25, scene, false);
  outputplane.billboardMode = BABYLON.AbstractMesh.BILLBOARDMODE_ALL;
  outputplane.material = new BABYLON.StandardMaterial("outputplane", scene);
  outputplane.position = new BABYLON.Vector3(-40, 40, 40);
  outputplane.scaling.y = 0.4;
  // outputplane.parent = camera;
  // outputplane.position = new BABYLON.Vector3(0, 11, 0);
  var outputplane2 = BABYLON.Mesh.CreatePlane("outputplane", 25, scene, false);
  outputplane2.billboardMode = BABYLON.AbstractMesh.BILLBOARDMODE_ALL;
  outputplane2.material = new BABYLON.StandardMaterial("outputplane", scene);
  outputplane2.position = new BABYLON.Vector3(20, 20, 20);
  outputplane2.scaling.y = 0.4;

  var outputplaneTexture = new BABYLON.DynamicTexture("dynamic texture", 512, scene, true);
  outputplane.material.diffuseTexture = outputplaneTexture;
  outputplane.material.specularColor = new BABYLON.Color3(0, 0, 0);
  outputplane.material.emissiveColor = new BABYLON.Color3(1, 1, 1);
  outputplane.material.backFaceCulling = false;

  var outputplaneTexture2 = new BABYLON.DynamicTexture("dynamic texture", 512, scene, true);
  outputplane2.material.diffuseTexture = outputplaneTexture2;
  outputplane2.material.specularColor = new BABYLON.Color3(0, 0, 0);
  outputplane2.material.emissiveColor = new BABYLON.Color3(1, 1, 1);
  outputplane2.material.backFaceCulling = false;

  outputplaneTexture.drawText("Timer", null, 140, "bold 140px verdana", "white", "#0000AA");
  // outputplaneTexture2.drawText("World Record", null, 140, "bold 100px verdana", "white", "#0000AA");

  var context2D = outputplaneTexture.getContext();
  window.refreshTime = function(data) {
    context2D.clearRect(0, 200, 512, 512);
    outputplaneTexture.drawText(data, null, 380, "100px verdana", "white", null);
    socket.emit('time', window.currentTime)
  }
var originalTime = 0;
window.currentTime = 0;
window.finished = false;
window.distancePercentage = 100;
setInterval( () => {
  if ( originalTime !== 0 ) {
    var seconds = Math.round((new Date().getTime() - originalTime) / 100 ) / 10;
    var minutes = Math.floor(seconds / 60);
    var seconds = ( !(seconds % 1) ? ( Math.round((seconds % 60) * 10) / 10 + '.0') : Math.round((seconds % 60) * 10) / 10 );
    var minutes = ( minutes === 0 ? '' : (minutes + ':') );
    var seconds = seconds.toString().length === 3 ? '0' + seconds : seconds;
    currentTime = minutes + seconds;
  }
}, 100);

var protocolPrefix = (window.location.protocol === 'https:') ? 'wss:' : 'ws:';


// Notify whether user is first or second player and update user position
window.inRoom = false;
socket.on('firstPlayer', function(firstPlayer) {
  window.inRoom = true;
  window.camera.position = firstPlayerPosition;
  window.camera.rotation = new BABYLON.Vector3(-0.38385, -.77694, 0);
  console.log('You are first player');
  engine.runRenderLoop(function(){
    outputplane.position = new BABYLON.Vector3(-35 + camera.position.x, 35 +camera.position.y, 35 + camera.position.z);
    outputplane2.position = new BABYLON.Vector3(20 + camera.position.x, 20 +camera.position.y, 20 + camera.position.z);
    
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

      socket.emit('calculateDistance', {
        p1: p1,
        p2: p2
      });

      // var distanceBetweenUsers = window.calculateDistance(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);
      window.distancePercentage = window.distanceBetweenUsers / window.farthestUserDist * 100;
      if ( window.distanceBetweenUsers < 3 ) {
        window.finishGame();
      }
    }
    // console.log('currentTime : ', currentTime);
    console.log('position : ', window.camera.position);
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
  window.camera.position = easyLevelSecondPlayerPosition;
  window.camera.rotation = new BABYLON.Vector3(-0.38385, -.77694, 0);
  originalTime = new Date().getTime();
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
      socket.emit('calculateDistance', {
        p1: p1,
        p2: p2
      });
      // Calculate distance between two users
      // var window.distanceBetweenUsers = window.calculateDistance(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);
      window.distancePercentage = window.distanceBetweenUsers / window.farthestUserDist * 100;
 
      if ( window.distanceBetweenUsers < 3 ) {
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
socket.on('serverSendingMaze', function(maze) {
  buildSimpleMaze(maze);
  console.log('Received a maze from server');
});

// Send player position to newly joined player(s)
socket.on('newPlayerRequestInfo', function() {
  socket.emit('sendPlayer', window.camera.position);
  window.originalTime = new Date().getTime();
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
    // Calculate distance between two users
    var window.distanceBetweenUsers = window.calculateDistance(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);
    if ( distanceBetweenUsers < 1 && window.finished === false ) {
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
  outputplaneTexture2.drawText( "World Record : " + stringTime + ' by ' + data.user, null, 280, "bold 30px verdana", "white", "#0000AA");
});
/*******************************************************
 User Control Event Listeners
*******************************************************/

var mousePosition = {
  previousX: null,
  previousY: null
};

// Event listener for shooting bullets
// window.addEventListener("click", shootBullet.bind(this, window.camera));
// Event listener for mouse movement
// window.addEventListener("mousemove", window.mouseControl.bind(this, window.camera, mousePosition));
