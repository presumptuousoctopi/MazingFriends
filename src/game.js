// Initialize
window.socket = io();
var canvas = document.getElementById('canvas');
window.engine = new BABYLON.Engine(canvas, true);

// Declare environment constants
var numberOfBoxes = 0;
const boxLength = 4;
window.firstPlayerPosition = new BABYLON.Vector3(boxLength, 2, boxLength);
const easyLevelMazeSize = 5;
const easyLevelSecondPlayerPosition = new BABYLON.Vector3(45, 2, 60);
const mediumLevelMazeSize = 10;
const mediumLevelSecondPlayerPosition = new BABYLON.Vector3(92, 2, 142);
const hardLevelMazeSize = 20;
const hardLevelSecondPlayerPosition = new BABYLON.Vector3(169, 2, 310);


window.secondPlayerPositions = {
  1: easyLevelSecondPlayerPosition,
  2: mediumLevelSecondPlayerPosition,
  3: hardLevelSecondPlayerPosition
};
window.boundaryWalls = {
  1: [-4, 16],
  3: [35, 50],
  4: [44, 68],
  5: [52, 83],
  6: [60, 100],
  7: [68, 115],
  10: [92, 150],
  20: [173, 322]
};


// Create environment
window.scene = createScene();
addLight();
addSkyBox();

// Create player
window.camera = addPlayer();
addPlayerObj(window.camera);
window.bullets = [];
window.makeTimerBoard();
window.makeLeaderBoard();
window.runClock();

// Update player location to other clients via socket.io
var previousCameraPosition = camera.position.x + camera.position.y + camera.position.z;


