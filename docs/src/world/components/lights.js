import { 
    DirectionalLight,
    PointLight,
    AmbientLight,
    HemisphereLight,
} from "https://cdn.skypack.dev/three@0.134";

function createLights(){
    // const ambientLight = new AmbientLight('white', 5);

    const ambientLight = new HemisphereLight(
        'antiquewhite', //bright sky color
        'white', //dim ground color
        8,
    );


    //create a directional light
    const light = new DirectionalLight('white', 15);

    //Move the light right, up and towards us
    light.position.set(5,10,0);
    light.castShadow = true;

    
    return {light, ambientLight};
}

export { createLights };