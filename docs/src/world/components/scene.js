import { 
    Color, 
    Scene,
    CubeTextureLoader, } from "https://cdn.skypack.dev/three@0.134";

function createScene() {
    const scene = new Scene();

    scene.background = new Color('white');

    
    return scene;
}

export { createScene };