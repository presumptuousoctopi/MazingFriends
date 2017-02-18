window.addEventListener("DOMContentLoaded", function(){
    var canvas = document.getElementById("canvas");
    var engine = new BABYLON.Engine(canvas, true)

var createScene = function () {
    var scene = new BABYLON.Scene(engine);

    // Lights
    var light0 = new BABYLON.DirectionalLight("Omni", new BABYLON.Vector3(-2, -5, 2), scene);
    var light1 = new BABYLON.PointLight("Omni", new BABYLON.Vector3(2, -5, -2), scene);


    //Ground
    var ground = BABYLON.Mesh.CreatePlane("ground", 200.0, scene);
    ground.material = new BABYLON.StandardMaterial("groundMat", scene);
    ground.material.diffuseColor = new BABYLON.Color3(1, 1, 1);
    ground.material.backFaceCulling = false;
    ground.position = new BABYLON.Vector3(5, -10, -15);
    ground.rotation = new BABYLON.Vector3(Math.PI / 2, 0, 0);
    ground.checkCollisions = true;

    //Boxes
    var material1 = new BABYLON.StandardMaterial("mat1", scene);
    material1.diffuseColor = new BABYLON.Color3(1, 1, 0);

    for (var i = 0; i < 10; i++) {
        var box = BABYLON.Mesh.CreateBox("Box", 4, scene);
        box.material = material1;
        box.position = new BABYLON.Vector3(i * 8, -8, 0);
        box.checkCollisions = true;
    }
    //Gravity
    //scene.gravity = new BABYLON.Vector3(0, -0.9, 0);

    // Enable Collisions
    scene.collisionsEnabled = true;

    // Camera
    var camera = new BABYLON.FreeCamera("FreeCamera", new BABYLON.Vector3(0, -7, -20), scene);
    camera.attachControl(canvas, true);
    camera.checkCollisions = true;
    camera.applyGravity = true;
    camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);

    // Skybox
    var skybox = BABYLON.Mesh.CreateBox("skyBox", 10000.0, scene);
    var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.disableLighting = true;
    skybox.material = skyboxMaterial;

    return scene;
};

    var scene = createScene(); 
    engine.runRenderLoop(function(){
        scene.render()
    });

})
