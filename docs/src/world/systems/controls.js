import { OrbitControls } from 'https://cdn.skypack.dev/three@0.134/examples/jsm/controls/OrbitControls.js'

function createControls(camera, canvas) {
    const controls = new OrbitControls(camera, canvas);

    controls.enableDamping = true;
    controls.dampingFactor = 0.1;

    controls.enableZoom = true;
    // controls.minDistance = 5;
    // controls.maxDistance = 20;

    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.5;

    controls.minPolarAngle = 0;
    controls.maxPolarAngle = Math.PI / 2;

    controls.tick = () => controls.update();

    return controls;

}

export { createControls };