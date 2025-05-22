import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
let scene, camera, renderer, cube, capsule;
let sceneContainer = document.querySelector('#scene-container')

//add objects//

const loader = new GLTFLoader();// to load 3d objects
loader.load('objs/dog_shiny.gltf', function (gltf) {
	const person = gltf.scene;
// 	scene.add(person);
// 	person.position.x = 3;
// 	person.position.z = 5;
// 	person.scale.set(2, 2, 3);
}
);


function init() {
	scene = new THREE.Scene();
	//camera = new THREE.PerspectiveCamera(75,sceneContainer.clientWidth/sceneContainer.clientHeight, 0.1, 1000);
	camera = new THREE.PerspectiveCamera(75, window.innerWidth, window.innerHeight, 0.1, 1000);
	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(window.innerWidth, window.innerHeight);
	// sceneContainer.appendChild(renderer.domElement);

	// ------	---------add light	-	-----	-	-	//
	const light = new THREE.DirectionalLight(0xffff99, 14);
	light.position.set(1, 1, 3);
	scene.add(light);

	const helper = new THREE.DirectionalLight(light, 4);
	light.position.set(1, 1, 3);
	scene.add(helper);

	const lightleft = new THREE.DirectionalLight(0xFF0000, 10);
	lightleft.position.set(-10, 5, 8);
	scene.add(lightleft);

	const helperleft = new THREE.DirectionalLight(lightleft, 5);
	lightleft.position.set(-10, -4, 3);
	scene.add(helperleft);

	const geometry = new THREE.CapsuleGeometry(1, 1, 4, 8);
	const texture = new THREE.TextureLoader().load('texture/123.gif')
	const texture1 = new THREE.TextureLoader().load('texture/pop.jpg')
	const material = new THREE.MeshStandardMaterial({ map: texture });
	capsule = new THREE.Mesh(geometry, material); scene.add(capsule);
	camera.position.z = 5;

	const geometry1 = new THREE.CapsuleGeometry(1, 0.5, 100, 5);
	const material1 = new THREE.MeshBasicMaterial({ map: texture1 });
	//const material1 = new THREE.MeshBasicMaterial({ color: 0x00aaff });
	cube = new THREE.Mesh(geometry1, material1);
	scene.add(cube);
	// const controls = new OrbitControls(camera, renderer.domElement);
	class CustomSinCurve extends THREE.Curve {

		constructor(scale = 0.02) {
			super();
			this.scale = scale;
		}

		getPoint(t, optionalTarget = new THREE.Vector3()) {

			const tx = t * 3 - 1.5;
			const ty = Math.sin(2 * Math.PI * t);
			const tz = 0;

			return optionalTarget.set(tx, ty, tz).multiplyScalar(this.scale);
		}
	}
	// const path = new CustomSinCurve(12);
	// const geometry2 = new THREE.TubeGeometry(path, 23, 2, 10, false);
	// const material2 = new THREE.MeshBasicMaterial({ color: 0xfa6600 });
	// const curve = new THREE.Mesh(geometry2, material2);
	// scene.add(curve);

}
let xpos = 0.5;

function animate() {
	requestAnimationFrame(animate);
	cube.rotation.x += 0.1;
	cube.rotation.y += -0.1;
	cube.position.x = 5 * Math.cos(xpos);
	if (xpos > 1 || xpos < 10) {
		xpos = 0.1 + xpos
		if (xpos > 10) {
			xpos = 0.1 - xpos
		}
	}
	// else { xpos -= 0.1 };

	console.log(xpos);
	capsule.position.x = xpos;
	//  capsule.rotation.y += 0.01;
	renderer.render(scene, camera);
	// curve.position.x = xpos;
}
// function onWindowResize() {
// 	camera.aspect = sceneContainer.clientWidth / sceneContainer.clientHeight;
// 	camera.updateProjectionMatrix();
// 	renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight);
// }
// window.addEventListener('resize', onWindowResize, false);


init();
animate();