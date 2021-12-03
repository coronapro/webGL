import { Clock } from "https://cdn.skypack.dev/three@0.134";

//use clock to standardize fram rates to all devices, disregarding refresh rates
const clock = new Clock();


class Loop {
    constructor(camera, scene, renderer) {
        this.camera = camera;
        this.scene = scene;
        this.renderer = renderer;
        this.updatables = [];
    }
    start () {
        this.renderer.setAnimationLoop(() =>{
            //tell every animated object to tick forward one frame
            this.tick();

            //render a frame
            this.renderer.render(this.scene, this.camera);
        });
    }

    stop () {
        this.renderer.setAnimationLoop(null);
    }

    tick() {
        //how much time has passed since it was last called, how long is 1 frame
        //only call it once per frame
        const delta = clock.getDelta();

        //code to update animations goes here
        for(const object of this.updatables) {
            object.tick(delta);
        }
    }
}

export { Loop }