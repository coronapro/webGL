import { PerspectiveCamera } from "https://cdn.skypack.dev/three@0.134";

function createCamera() {
    const camera = new PerspectiveCamera(
        35, //fov
        1, //aspect ratio
        0.1, //near clipping
        100, //far clipping
    );

    camera.position.set(0, 1, 2);
    // camera.tick = () =>{
    //     camera.position.z += 0.1;
    // }

    return camera;
}

export { createCamera };