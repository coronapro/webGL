import { WebGLRenderer } from "https://cdn.skypack.dev/three@0.134";

function createRenderer(scene, camera) {
    const renderer = new WebGLRenderer({antialias: true});

    renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
    })
    //turn on physically correct lighting
    renderer.physicallyCorrectLights = true;

    return renderer;
}

export { createRenderer };