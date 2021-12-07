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

let cascadeMesh

async function loadCascade() {
    //instance of GLTF loader
    const loader = new GLTFLoader();
    //load model data with loader
    const cascadeData = await loader.loadAsync('assets/bake_corona.glb')

    console.log('cascade ha cargado', cascadeData);
    // cascadeData.scene.traverse
    
    //assign model data to a geometry
    const cascade = setupModel(cascadeData);
    
    return { cascade };
}

loasCascade.traverse 

const material = createMaterial();

    
const mesh = new Mesh(cascade, material);






export {loadCascade};