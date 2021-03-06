import { GLTFLoader } from "https://cdn.skypack.dev/three@0.134/examples/jsm/loaders/GLTFLoader.js";

import {
    MeshStandardMaterial,
    Mesh,
    TextureLoader,
    CubeTextureLoader,
    Color,
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


async function loadCascade(modelPath, texturePath, scene) {

    let urls = [
        './assets/posx.png', './assets/negx.png',
        './assets/posy.png', './assets/negy.png',
        './assets/posz.png', './assets/negz.png',
    ];

    let cubo = new CubeTextureLoader();
    let fondo = cubo.load(urls)


    const textureLoader = new TextureLoader();

    //instance of GLTF loader
    const loader = new GLTFLoader();

    //load texture
    const texture = await textureLoader.loadAsync(texturePath);
    texture.flipY = false;

    //load model data with loader
    const {scene: model} = await loader.loadAsync(modelPath)

    const envMap = await textureLoader.loadAsync('assets/envMap.png');
    envMap.flipY = false;

    const color2 = new Color( 0xff0000 )
    const gris = new Color( 'gray' )

    model.traverse((o) => {
        console.log(typeof(o));
       //material cromado
        if (o.id == 17) {
            
            o.material.roughness = 0;
            o.material.metalness = 1;
            o.material.envMap = fondo;
            o.material.envMapIntensity = 1.5;
            o.material.needsUpdate = true;
            
        }

        //material plastico
        if (o.id == 18) {
            o.material.color = gris;
            o.material.roughness = 0.8;
        

        }

        //material etiqueta
        if (o.id == 19) {
            o.material.map = texture;
            o.material.aplhaMap = texture;
            o.material.color = gris;
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