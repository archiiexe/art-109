/* 
glTF import:
- glTF loader imported + enabled
-Global variable added to store dog gltf
-Two directional lights added to view glTF
- Added HELPERS to debug light position (disable after you place them)
-glTF imported from blender (not it is an *embedded* .glTF file, not .glb)
-Changed material on ball from BASIC to STANDARD so that the geometry catches light
*/


//~~~~~~~Import Three.js (also linked to as an import map in the HTML)~~~~~~
import * as THREE from 'three';


// Import add-ons
import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js'; // to load 3d models



// ~~~~~~~~~~~~~~~~ Declare Global Variables~~~~~~~~~~~~~~~~
let scene, camera, renderer, ball, dog, x, y;
let mixer = null;

//dog anim variables
let actionPant, actionTail;
let body = document.querySelector('body');


// ~~~~~~~~~~~~~~~~ Initialize Scene in init() ~~~~~~~~~~~~~~~~
function init() {

    // ~~~~~~Set up scene, camera, + renderer ~~~~~~

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);


    // ~~~~~~ Add Lights ~~~~~~
    // Add helpers to debug the lights' position - COMMENT OUT WHEN DONE placing the light! https://threejs.org/docs/#api/en/helpers/DirectionalLightHelper

    // ~~ add directional light 
    const lightRight = new THREE.DirectionalLight(0xffffff, 3);
    lightRight.position.set(3, 4, 5);
    scene.add(lightRight);

    const helperRight = new THREE.DirectionalLightHelper(lightRight, 5);
    scene.add(helperRight); // comment out when done placing light


    // ~~ add directional light 
    const lightLeft = new THREE.DirectionalLight(0xff00000, 3);
    lightLeft.position.set(-3, 4, 5);
    scene.add(lightLeft);

    const helperLeft = new THREE.DirectionalLightHelper(lightLeft, 5);
    scene.add(helperLeft); // comment out when done placing light






    // ~~~~~~ Initiate add-ons ~~~~~~

    const controls = new OrbitControls(camera, renderer.domElement);
    const loader = new GLTFLoader(); // to load 3d models



    // ~~~~~~ Create Geometry ~~~~~~

    // ---> create ball
    const geometry = new THREE.SphereGeometry(0.2, 32, 8);

    // -> change material from Basic to standard for geometry to capture lights
    // const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });

    const texture = new THREE.TextureLoader().load('textures/grasslight-big.jpg');

    const material = new THREE.MeshStandardMaterial({ map: texture });
    // texture.minFilter = THREE.LinearFilter; // makes image sharper but aliased

    ball = new THREE.Mesh(geometry, material);
    scene.add(ball);


    // --> Load glTF

    // load dog model


    loader.load('assets/dog_shiny.gltf', function (gltf) {
        dog = gltf.scene;
        scene.add(dog);
        dog.scale.set(2, 2, 2); // scale your model
        dog.position.y = -2; // set initial position


        //------------------------animations-------------------------------------//
        mixer = new THREE.AnimationMixer(dog);// initiate mixer
        const clips = gltf.animations; //load all clips

        //------------------------load and play animation ------------------------//

        const clipPant = THREE.AnimationClip.findByName(clips, 'pant');
        actionPant = mixer.clipAction(clipPant);
        //actionPant.play();


        const clipTail = THREE.AnimationClip.findByName(clips, 'tail');
        actionTail = mixer.clipAction(clipTail);
        actionTail.play();

    });


    //     --------load and play all animation--------
    //     mixer = THREE.AnimationMixer(dog);
    //      const clips = gltf.animations;
    //      clips.forEach(function(clip){
    //     const action = mixer.clipAction(clip);
    //     action.play();
    // });



    // ~~~~~~Position Camera~~~~~~
    camera.position.z = 5;

}

//-------------EVENT LISTENER------------------------

let mouseIsDown = false;

body.addEventListener("mousedown", () => {
    actionPant.play();
    actionPant.paused = false;
    mouseIsDown = true;
    console.log("mousedown");
})

body.addEventListener("mouseup", () => {
    actionPant.stop();
    mouseIsDown = false;
    actionPant.paused = true;
    console.log("mouse");
})
body.addEventListener("mousemove", () => {
    if (mouseIsDown == true) {
        console.log("mousemove");
        ball.rotation.x += 1.5;
      // ball.position.x = Math.sin(Date.now() / 2200)
    }
})




// ~~~~~~~~~~~~~~~~ Animation Loop ~~~~~~~~~~~~~~~~
// (similar to draw loop in p5.js, updates every frame)
const clock = new THREE.Clock();
function animate() {


    requestAnimationFrame(animate); // start loop by with frame update

    // →→→→→→ add your animation here ↓↓↓↓

    mixer.update(clock.getDelta());


    ball.rotation.x += 0.007;
    ball.rotation.y += 0.007;

    ball.position.x = Math.sin(Date.now() / 2400);
    ball.position.y = Math.sin(Date.now() / 2400);
    ball.position.z = Math.cos(Date.now() / 4000);

    if (dog) {
        dog.rotation.y += Math.sin(Date.now() / 2500) * 0.01;
        // dog.rotation.x += 0.007;
    }

    // always end animation loop with renderer
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

}

window.addEventListener('resize', onWindowResize, false);

init(); // execute initialize function
animate(); // execute animation function

