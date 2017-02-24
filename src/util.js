/*******************************************************
 Environment
*******************************************************/

window.createScene = function(){
    var scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3.White();
    scene.enablePhysics();
    scene.collisionsEnabled = true;
    return scene;
};

window.addSkyBox = function() {
    var skybox = BABYLON.Mesh.CreateBox("skyBox", 100.0, scene);
    var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.disableLighting = true;
    skybox.material = skyboxMaterial;
    skybox.infiniteDistance = true;
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("./textures/skybox", scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
};

// Need to fix this function
window.addGround = function() {
    var precision = {
        "w" : 2,
        "h" : 2
    };
    var subdivisions = {
        'h' : 8,
        'w' : 8
    };
    var ground = BABYLON.Mesh.CreateTiledGround("Tiled Ground", -groundBoundaryLength, -groundBoundaryLength, groundBoundaryLength, groundBoundaryLength, subdivisions, precision, scene, false);
    ground.checkCollisions = true;
    ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: .9 }, scene);
    return ground;
};

window.addLight = function() {
    var light = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(-1, 1, -1), scene);
    light.diffuse = new BABYLON.Color3(1, 0, 0);
    var light2 = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(-1, 10000, -1), scene);
    light.diffuse = new BABYLON.Color3(1, 0, 0);
};

/*******************************************************
 Users
*******************************************************/

window.addPlayer = function(playerPosition = new BABYLON.Vector3(0, 20, 0)) {
    var camera = new BABYLON.FreeCamera('camera1', playerPosition, scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, true);

    // camera.inputs.clear();
    // camera.inputs.remove(camera.inputs.attached.keyboard);
    // camera.inputs.addKeyboard();

    camera.keysUp = [87];
    camera.keysDown = [83]; 
    camera.keysLeft = [65]; 
    camera.keysRight = [68];

    // camera.orthoLeft = [37];
 
    camera.speed = .8;
    // camera.inertia = 0.3;
    // camera.angularSensibility = 500;
    camera.checkCollisions = true;
    camera.applyGravity = true;
    // camera.rotation = new BABYLON.Vector3(0, 1.6, 0);
    // console.log("inside addPlayer : ", camera);
    // console.log('add Player : ', camera.inputs);
    // camera.inputs.attached.mouse.camera.noRotationConstraint = true;
    // camera.inputs.attached.mouse.camera = false;
    // camera.rotation.y;s
    // camera.cameraRotation.x;
    // console.log('camera angularSensibility : ', camera.angularSensibility);

    var cameraJump = function(flag) {
        camera.animations = [];        
        var animations = new BABYLON.Animation("a", "position.y", 20, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
        var keys = [];
        keys.push({ frame: 0, value: camera.position.y });
        keys.push({ frame: 8, value: camera.position.y + 3 });
        keys.push({ frame: 16, value: camera.position.y });
        animations.setKeys(keys);
        
        var easingFunction = new BABYLON.CircleEase();
        easingFunction.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
        animations.setEasingFunction(easingFunction);
        
        camera.animations.push(animations);     
        scene.beginAnimation(camera, 0, 20, false);
        setTimeout( () => {
            flag.canJump = false;
        }, 750);
    }; 
    window.addEventListener("keydown", onKeyDown);
    var flag = {}; 
    flag.canJump= false;
    var cameraRotationSensitivity = .1 * ( Math.PI / 4 );
    var cameraMovementSensitivity = .1;
    function onKeyDown(event) {  
        // event.preventDefault();
      if ( event.keyCode === 32 && flag.canJump === false ) {
        flag.canJump = true;
        cameraJump(flag);
      }  

      if ( event.keyCode === 70 ) {
        shootBullet.call(this, window.camera);
      }

    // Left Arrow  37 
    // Up Arrow    38
    // Right Arrow 39 
    // Down Arrow  40 

      if ( event.keyCode === 37 ) {
        camera.cameraRotation.y += -cameraRotationSensitivity;
      } 

      if ( event.keyCode === 39 ) {
        camera.cameraRotation.y += cameraRotationSensitivity;
      }

      if ( event.keyCode === 38 ) {
        camera.cameraRotation.x += -cameraRotationSensitivity / 2;
      }

      if ( event.keyCode === 40 ) {
        camera.cameraRotation.x += cameraRotationSensitivity / 2;
      }
    }
    return camera;
};

window.addPlayerObj = function(camera) {
    var block = addSphere(new BABYLON.Vector3(0, 0, -1));
    block.parent = camera;
}

/*******************************************************
 Objects
*******************************************************/
var customSphere = {};
var numberOfSpheres = 0;
window.addSphere = function(spherePosition = new BABYLON.Vector3(10, 20, 10)) {
    // if (!customSphere['sphere']) {
        var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);
        var material = new BABYLON.StandardMaterial("texture1" + (++numberOfSpheres), scene);
        sphere.material = material; 
        customSphere['sphere'] = sphere;
    // } else {
        // var sphere = customSphere['sphere'].clone('' + (++numberOfSpheres));        
    // }
    sphere.position = spherePosition;
    // sphere.checkCollisions = true;
    sphere.applyGravity = true;
    // material.specularColor = new BABYLON.Color3(Math.random(), Math.random(), Math.random());
    // material.specularPower = 32;
    // material.ambientColor = new BABYLON.Color3(Math.random(), Math.random(), Math.random());  
    return sphere;
};

var customBox = {};
var mazeBoxes = [];
var boundaryBoxes = [];

window.addBox = function(x, z, type) {
    if ( !customBox[type] ) {
      var box = BABYLON.Mesh.CreateBox("Box" + (++numberOfBoxes), boxLength, scene);
      var material = new BABYLON.StandardMaterial("texture1" + numberOfBoxes, scene);
      material.alpha = .3;
      box.material = material;
      // box.applyGravity = true;
    } else {
      var box = customBox[type].clone('' + (++numberOfBoxes));
    }
    if ( type === 'boundaryWalls' ) {
      // box.material.wireframe= true;        
      boundaryBoxes.push(box);
    } else {
      // box.material.wireframe= true;        // optional
      mazeBoxes.push(box);
    }
    box.position = new BABYLON.Vector3(x, 2, z);
    box.checkCollisions = true;
        // material.specularColor = new BABYLON.Color3(Math.random(), Math.random(), Math.random());
        // material.specularPower = 32;
        // material.ambientColor = new BABYLON.Color3(Math.random(), Math.random(), Math.random());  
        // material.emissiveColor = new BABYLON.Color3(Math.random(), Math.random(), Math.random());
    return box;
};



window.buildBoundaryWalls = function(boxLength, scene) {
    var type = 'boundaryWalls';
    var dimensions = boundaryWalls[mazeSize];
    for ( var i = dimensions[0] - boxLength * 2; i < dimensions[0] + boxLength * 2; i += boxLength ) {
        addBox(i, dimensions[1], type);
    }
    var dimensions = boundaryWalls[1];
    for ( var i = dimensions[1]; i > dimensions[1] - boxLength * 5; i -= boxLength ) {
        addBox(dimensions[0], i, type);
    }
    var newMesh = BABYLON.Mesh.MergeMeshes(boundaryBoxes);
    newMesh.checkCollisions = true;
};

window.generateMaze = function(x,y) {
    function maze(x,y) {
        var n=x*y-1;
        if (n<0) {alert("illegal maze dimensions");return;}
        var horiz =[]; for (var j= 0; j<x+1; j++) horiz[j]= [],
            verti =[]; for (var j= 0; j<x+1; j++) verti[j]= [],
            here = [Math.floor(Math.random()*x), Math.floor(Math.random()*y)],
            path = [here],
            unvisited = [];
        for (var j = 0; j<x+2; j++) {
            unvisited[j] = [];
            for (var k= 0; k<y+1; k++)
                unvisited[j].push(j>0 && j<x+1 && k>0 && (j != here[0]+1 || k != here[1]+1));
        }
        while (0<n) {
            var potential = [[here[0]+1, here[1]], [here[0],here[1]+1],
                [here[0]-1, here[1]], [here[0],here[1]-1]];
            var neighbors = [];
            for (var j = 0; j < 4; j++)
                if (unvisited[potential[j][0]+1][potential[j][1]+1])
                    neighbors.push(potential[j]);
            if (neighbors.length) {
                n = n-1;
                next= neighbors[Math.floor(Math.random()*neighbors.length)];
                unvisited[next[0]+1][next[1]+1]= false;
                if (next[0] == here[0])
                    horiz[next[0]][(next[1]+here[1]-1)/2]= true;
                else 
                    verti[(next[0]+here[0]-1)/2][next[1]]= true;
                path.push(here = next);
            } else 
                here = path.pop();
        }
        return {x: x, y: y, horiz: horiz, verti: verti};
    }

    function display(m) {
        var text= [];
        var box = [];
        for (var j= 0; j<m.x*2+1; j++) {
            var line= [];
            if (0 == j%2)
                for (var k=0; k<m.y*4+1; k++)
                    if (0 == k%4) 
                        line[k]= '+';
                    else
                        if (j>0 && m.verti[j/2-1][Math.floor(k/4)])
                            line[k]= ' ';
                        else
                            line[k]= '-';
            else
                for (var k=0; k<m.y*4+1; k++)
                    if (0 == k%4)
                        if (k>0 && m.horiz[(j-1)/2][k/4-1])
                            line[k]= ' ';
                        else
                            line[k]= '|';
                    else
                        line[k]= ' ';
            if (0 == j) line[1]= line[2]= line[3]= ' ';
            if (m.x*2-1 == j) line[4*m.y]= ' ';
            box.push(line);
            text.push(line.join('')+'\r\n');
        }
        // console.log(box);
        return box;
    }
    return display(maze(x+2,y));
}

var buildSimpleMaze = function(maze) {
    for ( var i = 0; i < maze.length; i++ ) {
        var insideArray = maze[i];
        for ( var j = 0; j < insideArray.length; j++ ) { 
            if ( maze[i][j] !== ' ' ) {
                var box = addBox(i * boxLength, j * boxLength);
            }
        }
    }
    var newMesh = BABYLON.Mesh.MergeMeshes(mazeBoxes);
    newMesh.checkCollisions = true;
};

/*******************************************************
 User Control
*******************************************************/
var customBullet = null;
var bulletsFired = 0;
function shootBullet ( shooter, e, isIncoming = false ) {
    if ( !isIncoming ) {
        var invView = new BABYLON.Matrix();
        var initPosition = shooter.position; 
        shooter.getViewMatrix().invertToRef(invView);    
        this.socket.emit('shotFired', {
            invView: invView,
            initPosition: initPosition
        });    
    } else {
        var invView = shooter.invView;
        var initPosition = shooter.initPosition;
    }
    if ( !customBullet ) {
        var bullet = BABYLON.Mesh.CreateSphere('bullet' + (++bulletsFired), 3, 0.3, scene);    
        var material = new BABYLON.StandardMaterial('texture1', scene);
        material.diffuseColor = new BABYLON.Color3.White();
        bullet.material = material; 
        customBullet = bullet;
    } else {
        var bullet = customBullet.clone('bullet' + (++bulletsFired) );
    }
    // bullet.applyGravity = true;
    bullet.position = new BABYLON.Vector3(initPosition.x, initPosition.y, initPosition.z);
    bullet.checkCollisions = true;
    // bullet.physicsImpostor = new BABYLON.PhysicsImpostor(bullet, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 10, restitution: 0.9 }, scene);    
    var direction = BABYLON.Vector3.TransformNormal(new BABYLON.Vector3(0, 0, 3), invView);
    scene.registerBeforeRender(function () {
        bullet.position.addInPlace(direction);
    });
};


// window.mouseControl = function(camera, mousePosition, e) {
//     var mouseX = e.clientX;
//     var mouseY = e.clientY;
//     var dx = mouseX - mousePosition.x;
//     var dy = mouseY - mousePosition.y;
//     var scale = 2000;
//     var sensitivity = .05;

//     if ( dx > 2 ) {
//         camera.cameraRotation.y += sensitivity;
//     } else if ( dx < -2 ) {
//         camera.cameraRotation.y -= sensitivity;
//     }

//     if ( dy > 2 ) {
//         camera.cameraRotation.x += sensitivity;
//     } else if ( dy < -2 ) {
//         camera.cameraRotation.x -= sensitivity;
//     }        

//     mousePosition.x = mouseX;
//     mousePosition.y = mouseY;
// };

// To be used to find the solution for the maze:

// var robotPaths = function(n) {
//   var makeBoard = function(n) {
//     var board = [];
//     for (var i = 0; i < n; i++) {
//       board.push([]);
//       for (var j = 0; j < n; j++) {
//         board[i].push(false);
//       }
//     }
//     return board;
//   };
//   var togglePiece = function(board, i, j) {
//     board[i][j] = !board[i][j];
//   };
//   var hasBeenVisited = function(board, i, j) {
//     return !!board[i][j];
//   };

//   var board = makeBoard(n);
//   var possiblePaths = 0;

//   var findPath = function(newBoard, i = 0, j = 0, count = 0) {
//     togglePiece(newBoard,i,j);
//     if ( i === n-1 && j === n-1 ) {
//       return possiblePaths++;
//     } 

//     if ( i+1 < n ) {
//       if ( !hasBeenVisited(newBoard, i+1, j) ) {
//         findPath(newBoard, i+1, j, count);
//         togglePiece(newBoard,i+1,j);      
//       }
//     }

//     if ( i-1 >= 0 ) {
//       if ( !hasBeenVisited(newBoard, i-1, j) ) {
//         findPath(newBoard, i-1, j, count);  
//         togglePiece(newBoard,i-1,j);          
//       }
//     }

//     if ( j+1 < n ) {
//       if ( !hasBeenVisited(newBoard, i, j+1) ) {
//         findPath(newBoard, i, j+1, count);
//         togglePiece(newBoard,i,j+1);
//       }
//     }
    
//     if ( j-1 >= 0 ) {
//       if ( !hasBeenVisited(newBoard, i, j-1) ) {
//         findPath(newBoard, i, j-1, count);    
//         togglePiece(newBoard,i,j-1);        
//       }
//     }
//   };
//   findPath(board);
//   return possiblePaths;
// };

/*******************************************************
 Game Flow / Etc.
*******************************************************/

window.calculateDistance = function(x1, y1, z1, x2, y2, z2) {
  return Math.pow((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2)+(z1-z2)*(z1-z2), 1/2);
};

window.gameover = false;

window.finishGame = function() {
  socket.emit('gameover')
  window.finishTime = window.currentTime;
  window.finished = true;
  window.refreshTime('Your record : ' + finishTime);
};