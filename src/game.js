// Initialize
window.socket = io();
var canvas = document.getElementById('canvas');
window.engine = new BABYLON.Engine(canvas, true);

// Declare environment constants
var numberOfBoxes = 0;
const boxLength = 4;
const firstPlayerPosition = new BABYLON.Vector3(boxLength / 2, 2, boxLength / 2);
const easyLevelMazeSize = 3;
const mediumLevelMazeSize = 4;
const mediumLevelSecondPlayerPosition = new BABYLON.Vector3(45, 2, 60);
const hardLevelMazeSize = 5;


const mazeSize = mediumLevelMazeSize;
const groundBoundaryLength = (boxLength + mazeSize) * (boxLength + mazeSize);

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
