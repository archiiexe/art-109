
import * as THREE from 'three';


// Import add-ons
import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js'; // to load 3d models



// ~~~~~~~~~~~~~~~~ Declare Global Variables~~~~~~~~~~~~~~~~
let scene, camera, renderer, ball, victor, x, y;
let mixer = null;

//dog anim variables
let actionSmile, actionDeflate, actionShake, actiongrin,actionflatten,actionPull,actionpullleft,actionpullright,actionPullup, smile;
let body = document.querySelector('body');


// ~~~~~~~~~~~~~~~~ Initialize Scene in init() ~~~~~~~~~~~~~~~~
function init() {

    // ~~~~~~Set up scene, camera, + renderer ~~~~~~

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

 const lightRight = new THREE.PointLight(0xffffff, 1, 10);
    lightRight.position.set(3, 4, 5);
    scene.add(lightRight);

    // ~~ add directional light 
    const lightLeft = new THREE.DirectionalLight(0xff00000, 3);
    lightLeft.position.set(-3, 4, 5);
    scene.add(lightLeft);


 const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
 function getRandomColor() {
            return new THREE.Color(
                Math.random(),
                Math.random(),
                Math.random()
            );
        }

        // Change color on mouse click
        window.addEventListener('click', () => {
            const newColor = getRandomColor();
            lightRight.color.copy(newColor);
            material.color.copy(newColor);
              
        });



    // ~~~~~~ Initiate add-ons ~~~~~~

    const controls = new OrbitControls(camera, renderer.domElement);
    const loader = new GLTFLoader(); // to load 3d models





    loader.load('assets/vic.gltf', function (gltf) {
        victor = gltf.scene;
        scene.add(victor);
        victor.scale.set(2, 2, 2); // scale your model
        victor.position.y = -2; // set initial position


        //------------------------animations-------------------------------------//
        mixer = new THREE.AnimationMixer(victor);// initiate mixer
        const clips = gltf.animations; //load all clips

        //------------------------load and play animation ------------------------//

        const clipSmile = THREE.AnimationClip.findByName(clips, 'smile');
        actionSmile = mixer.clipAction(clipSmile);
        //actionSmile.play();

        const clipDeflate = THREE.AnimationClip.findByName(clips, 'deflate');
        actionDeflate = mixer.clipAction(clipDeflate);
      //actionDeflate.play();


        const clipgrin = THREE.AnimationClip.findByName(clips, 'grin');
        actiongrin = mixer.clipAction(clipgrin);
       // actiongrin.play();

        const clipShake = THREE.AnimationClip.findByName(clips, 'shake');
        actionShake = mixer.clipAction(clipShake);
       //actionShake.play();


        const clipPullup = THREE.AnimationClip.findByName(clips, 'pullup');
        actionPullup = mixer.clipAction(clipPullup);
        //actionPullup.play();


        const clipPull = THREE.AnimationClip.findByName(clips, 'pull');
        actionPull = mixer.clipAction(clipPull);

       // actionPull.play();
        
        const clipflatten = THREE.AnimationClip.findByName(clips, 'flatten');
        actionflatten = mixer.clipAction(clipflatten);
      //  actionflatten.play();

       
          const clippullleft = THREE.AnimationClip.findByName(clips, 'pull-left');
        actionpullleft = mixer.clipAction(clippullleft);
        actionpullleft.play();

         const clippullright = THREE.AnimationClip.findByName(clips, 'pull-right');
        actionpullright = mixer.clipAction(clippullright);
       // actionpullright.play();



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
    actionSmile.play();
    actionSmile.paused = false;
    mouseIsDown = true;
    console.log("mousedown");
})

body.addEventListener("mouseup", () => {
    actionSmile.stop();
    mouseIsDown = false;
    actionSmile.paused = true;
    console.log("mouse");
})
body.addEventListener("mousemove", () => {
    if (mouseIsDown == true) {
        console.log("mousemove");
        
    }
})




// ~~~~~~~~~~~~~~~~ Animation Loop ~~~~~~~~~~~~~~~~
// (similar to draw loop in p5.js, updates every frame)
const clock = new THREE.Clock();
function animate() {


    requestAnimationFrame(animate); // start loop by with frame update


    if (mixer) {
        mixer.update(clock.getDelta());
    }

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

document.addEventListener('keydown', (event) => {
            //
            // Check each key individually
            if (event.key === '1') {
             actionSmile.play();
        
                console.log("Playing sound 1");
            }
            else if (event.key === '2') {
                    actionDeflate.play();
                console.log("Playing sound 2");
            }
            else if (event.key === '3') {
               actiongrin.play();
                console.log("Playing sound 3");
            }
            else if (event.key === '4') {
               actionShake.play();
                console.log("Playing sound 4");
            }
            else if (event.key === '5') {
                actionpullleft.play();
                console.log("Playing sound 5");
            }
            else if (event.key === '6') {
                actionPullup.play();
                console.log("Playing sound 6");
            }
            else if (event.key === '7') {
             actionPull.play();
                console.log("Playing sound 7");
            }
            else if (event.key === '8') {
                actionpullright.play();
                console.log("Playing sound 8");    }
        });