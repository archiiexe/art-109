// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene


//~~~~~~~Import Three.js (also linked to as an import map in the HTML)~~~~~~
import * as THREE from 'three';


// Import add-ons
import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
// import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js'; // to load 3d models



// ~~~~~~~~~~~~~~~~Set up scene, camera, + renderer~~~~~~~~~~~~~~~~
let xpos, scene, camera, renderer, cube, capsule,canvas;

// function main() {
//   const canvas = document.querySelector('#c');
//   const renderer = new THREE.WebGLRenderer({antialias: true, canvas});}

// document.querySelector("canvas").addEventListener("click", function () {
//     document.querySelector("canvas").style.visibility = "hidden";
//     console.log("click click");
// })


function init() {
 scene = new THREE.Scene();
//  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// renderer = new THREE.WebGLRenderer();

 const canvas = document.querySelector('#c');
renderer = new THREE.WebGLRenderer({antialias: true, alpha : true, canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const light = new THREE.DirectionalLight(0xffff99, 14);
	light.position.set(1, 1, 3);
	scene.add(light);
 
// ~~~~~~~~~~~~~~~~ Initiate add-ons ~~~~~~~~~~~~~~~~


// const loader = new GLTFLoader(); // to load 3d models



// ~~~~~~~~~~~~~~~~ Create Geometry ~~~~~~~~~~~~~~~~
const geometry = new THREE.BoxGeometry(20, 20, 20);
const texture1 = new THREE.TextureLoader().load('texture/123.gif')
const material1 = new THREE.MeshBasicMaterial({map: texture1 });
cube = new THREE.Mesh(geometry, material1);
scene.add(cube);

// capsule = new THREE.Mesh(geometry, material1);

// const geometry1 = new THREE.CapsuleGeometry(1, 1, 4, 8);
// const texture = new THREE.TextureLoader().load('texture/123.gif')
// const material = new THREE.MeshStandardMaterial({ map: texture });
// capsule = new THREE.Mesh(geometry1, material)//
// scene.add(capsule);


class CustomSinCurve extends THREE.Curve {

        constructor(scale = 0.02) {
            super();
            this.scale = scale;
        }

        getPoint(t, optionalTarget = new THREE.Vector3()) {

            const tx = t * 5 - 1.5;
            const ty = Math.sin(3 * Math.PI * t);
            const tz = 1;

            return optionalTarget.set(tx, ty, tz).multiplyScalar(this.scale);
        }
    }
    const path = new CustomSinCurve(12);
    const geometry2 = new THREE.TubeGeometry(path, 23, 2, 10, false);
    const material2 = new THREE.MeshBasicMaterial({ color: 0xfa6600 });
    const curve = new THREE.Mesh(geometry2, material2);
    scene.add(curve);

// ~~~~~~~~~~~~~~~~Position Camera~~~~~~~~~~~~~~~~
const fov = 40;
const aspect = 2;  // the canvas default
const near = 0.1;
const far = 1000;
camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 120;

const controls = new OrbitControls(camera, renderer.domElement);
}
// ~~~~~~~~~~~~~~~~ Animation Loop ~~~~~~~~~~~~~~~~
// (similar to draw loop in p5.js, updates every frame)

function animate() {
    requestAnimationFrame(animate); // start loop by with frame update

    // →→→→→→ add your animation here ↓↓↓↓

    camera.position.z += .03;
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // always end animation loop with renderer
    renderer.render(scene, camera);

}
init();
animate(); // execute animation function
