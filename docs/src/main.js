import { World } from './world/World.js';

//create main funtion
async function main() {
    //code to set up the World App goes here

    //gets reference of the container element from the html file
    const container = document.querySelector('#scene-container');
    //create an instance of the World app
    const world = new World(container);
    
    //renders a single frame (render on demand)good for interactive product displays, like an XR
    // world.render();

    //complete async tasks
    await world.init();


    //renders a loop (produces a stream of frames), can be battery intensive on mobile
    world.start();
}

//call main to start app
// main();

//call main to start app and identify errors in the console
main().catch((err) => {
    console.error(err);
})
