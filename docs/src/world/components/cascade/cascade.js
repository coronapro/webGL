import { GLTFLoader } from "https://cdn.skypack.dev/three@0.134/examples/jsm/loaders/GLTFLoader.js";

import {
    MeshStandardMaterial,
    Mesh,
    TextureLoader,
} from "https://cdn.skypack.dev/three@0.134/"

import { setupModel } from './setupModel.js'

// function createMaterial() {
//     //create a standard material
//     const material = new MeshStandardMaterial({
//         color: '#aa9b7f',
//         metalness: 0.5,
//         roughness: 0,
//     });

//     return material;
// }


async function loadCascade(modelPath, texturePath) {

    const textureLoader = new TextureLoader();

    //instance of GLTF loader
    const loader = new GLTFLoader();

    //load texture
    const texture = await textureLoader.loadAsync(texturePath);
    texture.flipY = false;

    //load model data with loader
    const {scene: model} = await loader.loadAsync(modelPath)

    model.traverse((o) => {
        if (o.isMesh) {
            o.material.map = texture;
            o.material.metalness = 1;
            o.material.needsUpdate = true;
        }
    });

    

    console.log('cascade ha cargado', model);
    // cascadeData.scene.traverse
    
    //assign model data to a geometry
    // const cascade = setupModel(cascadeData);
    
    return { model };
}


// const material = createMaterial();

    
// const mesh = new Mesh(cascade, material);






export {loadCascade};