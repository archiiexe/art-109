// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene


//~~~~~~~Import Three.js (also linked to as an import map in the HTML)~~~~~~
import * as THREE from 'three';


// Import add-ons
import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
// import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js'; // to load 3d models



// ~~~~~~~~~~~~~~~~Set up scene, camera, + renderer~~~~~~~~~~~~~~~~
let scene, camera, renderer, torus;

const sceneContainer = document.querySelector('#scene-container');

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    // renderer = new THREE.WebGLRenderer();


    renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#bg'), antialias: true, alpha: true });
  //  renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight);
    renderer.setSize(window.innerWidth,window.innerHeight);
    //sceneContainer.appendChild(renderer.domElement);
  renderer.render(scene, camera);

  camera.position.z=50;
    // ~~~~~~~~~~~~~~~~ Create Geometry ~~~~~~~~~~~~~~~~
    const geometry = new THREE.TorusGeometry(10, 3, 18, 100);
    const texture1 = new THREE.TextureLoader().load('texture/pop.jpg')
    const material1 = new THREE.MeshBasicMaterial({ map: texture1 });
    torus = new THREE.Mesh(geometry, material1);

    scene.add(torus);

    torus.position.x = -10;
    torus.position.z = -55;


    function moveCamera() { 
    const t = document.body.getBoundingClientRect().top;
    camera.position.z = t * 0.05;

}

document.body.onscroll = moveCamera;

moveCamera();
    // camera = new THREE.PerspectiveCamera(750, sceneContainer.clientWidth / sceneContainer.clientHeight, 0.1, 1000);
    // camera.position.z = 100;


    const controls = new OrbitControls(camera, renderer.domElement);

}
// function onWindowResize() {
//     camera.aspect = sceneContainer.clientWidth / sceneContainer.clientHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight);

// }
// window.addEventListener('resize', onWindowResize, false)
// // ~~~~~~~~~~~~~~~~ Animation Loop ~~~~~~~~~~~~~~~~
// // (similar to draw loop in p5.js, updates every frame)

function animate() {
    requestAnimationFrame(animate); // start loop by with frame update
    torus.rotation.z += 0.01;   
    renderer.render(scene, camera);

}
init();
animate(); // execute animation function
