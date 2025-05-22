// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene


//~~~~~~~Import Three.js (also linked to as an import map in the HTML)~~~~~~
import * as THREE from 'three';


// Import add-ons
import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js'; // to load 3d models



// ~~~~~~~~~~~~~~~~Set up scene, camera, + renderer~~~~~~~~~~~~~~~~
let  scene, camera, renderer, cube;

function init() {
    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    // ~~~~~~~~~~~~~~~~Position Camera~~~~~~~~~~~~~~~~
    const fov = 40;
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 1000;
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 10;



    // ~~~~~~~~~~~~~~~~Add Light~~~~~~~~~~~~~~~~

    const light = new THREE.DirectionalLight(0xffff99, 10);
    light.position.set(1, 1, 10);
    scene.add(light);

   
    const lightleft = new THREE.DirectionalLight(0xFF1100, 10);
    lightleft.position.set(-10, 5, 8);
    scene.add(lightleft);

     const helper = new THREE.DirectionalLight(lightleft, 10); //light direciton help
    scene.add(helper);

   
    // ~~~~~~~~~~~~~~~~ Initiate add-ons ~~~~~~~~~~~~~~~~

    const controls = new OrbitControls(camera, renderer.domElement);

    const loader = new GLTFLoader(); // to load 3d models
    // ~~~~~~~~~~~~~~~~ Add Model ~~~~~~~~~~~~~~~~
    loader.load('objs/FULLLCOMP1.gltf', function (gltf){
    const model = gltf.scene;
    scene.add(model);
        model.scale.set(3,2,2)
        model.position.set(1,0,2)
    })



}
// ~~~~~~~~~~~~~~~~ Animation Loop ~~~~~~~~~~~~~~~~
// (similar to draw loop in p5.js, updates every frame)

function animate() {
    requestAnimationFrame(animate); // start loop by with frame update


    renderer.render(scene, camera);

}
init();
animate(); // execute animation function
