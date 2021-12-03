import { Color, Scene } from "https://cdn.skypack.dev/three@0.134";

function createScene() {
    const scene = new Scene();

    scene.background = new Color('lavenderblush');

    return scene;
}

export { createScene };