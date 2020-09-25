import * as BABYLON from '@babylonjs/core/Legacy/legacy';

// Get the canvas element from the DOM.
const canvas = document.getElementById("renderCanvas");

// Associate a Babylon Engine to it.
const engine = new BABYLON.Engine(canvas, true);

const createScene = function () {

    // Create the scene space
    const scene = new BABYLON.Scene(engine);

    // Add a camera to the scene and attach it to the canvas
    const camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 4, 4, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    // Add lights to the scene
    const light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
    // const light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);

    // Add and manipulate meshes in the scene
    const ground = BABYLON.MeshBuilder.CreateGround("ground", {height: 1.5, width: 2.5, subdivisions: 4}, scene);

    const groundMaterial = new BABYLON.StandardMaterial("groundMaterial", scene);
    groundMaterial.diffuseTexture = new BABYLON.Texture("assets/images/playground.PNG", scene);
    ground.material = groundMaterial;

    const foothball = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 0.5}, scene);
    foothball.setPositionWithLocalVector(new BABYLON.Vector3(0, 1, 0));
    
    const footballMaterial = new BABYLON.StandardMaterial("footballMaterial", scene);
    footballMaterial.diffuseTexture = new BABYLON.Texture("assets/images/football.PNG", scene);
    foothball.material = footballMaterial;

    return scene;

};

// create our scene
const scene = createScene();

engine.runRenderLoop(() => {
    scene.render();
})