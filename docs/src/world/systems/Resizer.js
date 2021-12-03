const setSize = (container, camera, renderer) => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
} 

class Resizer {
    constructor(container, camera, renderer) {

        //camera aspect ratio
        // camera.aspect = container.clientWidth / container.clientHeight;

        //update camera FRUSTUM
        // camera.updateProjectionMatrix();

        //update size of the renderer AND the canvas
        // renderer.setSize(container.clientWidth, container.clientHeight);

        //set pixel ratio for MOBILE devices
        // renderer.setPixelRatio(window.devicePixelRatio);

        //set initial size on load
        setSize(container, camera, renderer);

        //set size on window resize
        window.addEventListener('resize', () => {
            setSize(container, camera, renderer);
            // console.log("Window resized");
            this.onResize();
        });

    }
    //hook to perform custom actions on event
    onResize() {}
}

export { Resizer };