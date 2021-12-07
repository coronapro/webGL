import { loadCascade } from './components/cascade/cascade.js';
import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';
import { createControls } from './systems/controls.js';


//to convert raidans to degrees
import { MathUtils } from "https://cdn.skypack.dev/three@0.134";


//Module-scoped variables: cannot be accessed from outside the module
let camera;
let renderer;
let scene;
let loop;

class World {
    //creates instance of World app
    constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer(scene, camera);
        loop = new Loop(camera, scene, renderer);
        container.append(renderer.domElement);

        //orbit controls
        const controls = createControls(camera, renderer.domElement);



        //add the cube
        const cube = createCube();
        const {light, ambientLight} = createLights();
        const cubeb = createCube();

        loop.updatables.push(controls);

        scene.add(light, ambientLight, cascade);
        // cube.add(cubeb);
        
        // cube.position.x = 0;
        // cube.scale.set (1, 1, 1)
        // cubeb.position.set(1, 1, -1);
        // cubeb.rotation.x = MathUtils.degToRad(60);

        //add the Resizer
        const resizer = new Resizer(container, camera, renderer);
        // resizer.onResize = () => {
        //     this.render();
        // }
    }

    //asynchronous staging
    // async init() {
    //     const{ cascade } = await loadCascade();

    //     scene.add(cascade);
    // } 


    //renders the scene
    render() {
        //draws a single frame
        renderer.render(scene, camera);
    }
    
    start() {
        loop.start();
    }

    stop() {
        loop.stop();
    }
}

export {World}; //exports World class to be used in main.js