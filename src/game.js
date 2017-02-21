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
const mediumLevelMazeSize = 5;
const mediumLevelSecondPlayerPosition = new BABYLON.Vector3(52, 2, 77);
const boundaryWalls = {
  1: [-4, 16],
  3: [35, 50],
  4: [44, 68],
  5: [52, 83],
  6: [60, 100],
  7: [68, 115]
};

// const hardLevelMazeSize = 5;
// 1st player = -4, 2, 16 -> -3, 2, 2

// 3: 35, 2, 50
// 4: 44, 2, 68
// 5: 52, 2, 83
// 6: 60, 2, 100
// 7: 68, 2, 115

const mazeSize = 5;
const groundBoundaryLength = 1000;
// ( boxLength + mazeSize ) * ( boxLength + mazeSize );

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

// Update player location to other clients via socket.iosd
var previousCameraPosition = camera.position.x + camera.position.y + camera.position.z;
engine.runRenderLoop(function(){
    var currentCameraPosition = camera.position.x+camera.position.y+camera.position.z;
    if ( currentCameraPosition !== previousCameraPosition ) {
        previousCameraPosition = currentCameraPosition;
        socket.emit('userPositionChanged', camera.position);
    }
    //console.log(window.camera.position);
    // console.log(groundBoundaryLength);
    scene.render();
});
