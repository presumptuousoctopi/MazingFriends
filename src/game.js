// Initialize
window.socket = io();
var canvas = document.getElementById('canvas');
window.engine = new BABYLON.Engine(canvas, true);

// Declare environment constants
var numberOfBoxes = 0;
const boxLength = 4;
const firstPlayerPosition = new BABYLON.Vector3(boxLength, 50, boxLength);
const easyLevelMazeSize = 4;
const easyLevelSecondPlayerPosition = new BABYLON.Vector3(45, 2, 60);
const mediumLevelMazeSize = 20;
const mediumLevelSecondPlayerPosition = new BABYLON.Vector3(169, 2, 310);
const boundaryWalls = {
  1: [-4, 16],
  3: [35, 50],
  4: [44, 68],
  5: [52, 83],
  6: [60, 100],
  7: [68, 115],
  20: [173, 322]
};
const mazeSize = mediumLevelMazeSize;
const groundBoundaryLength = 1000;

// Create environment
window.scene = createScene();
window.ground = addGround();
addPointLight();
addSkyBox();
buildBoundaryWalls(boxLength, scene);

// Create player
window.camera = addPlayer();
addPlayerObj(window.camera);
window.randomSphereInAir = addSphere();

// Update player location to other clients via socket.io
var previousCameraPosition = camera.position.x + camera.position.y + camera.position.z;
engine.runRenderLoop(function(){
    var currentCameraPosition = camera.position.x+camera.position.y+camera.position.z;
    if ( currentCameraPosition !== previousCameraPosition ) {
        previousCameraPosition = currentCameraPosition;
        socket.emit('userPositionChanged', camera.position);
    }
    // console.log(window.camera.position);
    scene.render();
});
