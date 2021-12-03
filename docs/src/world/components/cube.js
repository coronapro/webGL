import { 
    BoxBufferGeometry, 
    Mesh, 
    MeshBasicMaterial, 
    MeshStandardMaterial, 
    MathUtils,
    TextureLoader,
 } from "https://cdn.skypack.dev/three@0.134";

function createMaterial() {
    //create a texture loader instance
    const textureLoader = new TextureLoader();
    //load a texture
    const texture = textureLoader.load("./assets/tile1Color.jpg");

    //create a standard material
    const material = new MeshStandardMaterial({
        map: texture,
        color: '#aa9b7f',
        metalness: 0.5,
        roughness: 0,
        wireframe:false,
    });


    return material;
}

function createCube() {
    const geometry = new BoxBufferGeometry(2, 2, 2);
    
    const material = createMaterial();

    const cube = new Mesh(geometry, material);

    const radiansPerSecond = MathUtils.degToRad(10);

    // cube.rotation.set(-0.5, -0.1, 0.8);

    //methos will be called once per frame
    // cube.tick = (delta) => {
        //increase rotation each frame
        // THIS ROTARION IS UNSCALED TO FPS
        // cube.rotation.z += 0.01;
        // cube.rotation.x += 0.01;
        // cube.rotation.y += 0.01;

        //THIS ROTATION IS SCALED TO FPS
        // cube.rotation.z += radiansPerSecond * delta;
        // cube.rotation.x += radiansPerSecond * delta;
        // cube.rotation.y += radiansPerSecond * delta;
    // }

    return cube;
}

export { createCube };