//Renderer setup//
const renderer = new THREE.WebGLRenderer ({antialias: true})
renderer.setSize(window.innerWidth, window.innerHeight)     //create the canvas
document.querySelector('.webGLContainer')
    .appendChild(renderer.domElement)                      //place canvas withing container in html

//Scene setup
const scene = new THREE.Scene()

//Camera
const camera = new THREE.PerspectiveCamera(10,
    window.innerWidth / window.innerHeight, 0.1, 1000) // (FOV, aspect ratio, camera near, camera far)
camera.position.set(0, 5, 10)   //(x, y, x)
camera.lookAt(0,0,0)

let cascadeMesh

console.log(new THREE.GLTFLoader())
const modelLoader = new THREE.GLTFLoader()
modelLoader.load('assets/cascade.glb', (glb)=>{
    console.log(glb)
    glb.scene.traverse( child =>{
        if(child instanceof THREE.Mesh){
            cascadeMesh = child
            cascadeMesh.material = new THREE.MeshNormalMaterial()
        }
    })
    
    scene.add(cascadeMesh)
    
}) //to load a model I need a (URL, callback function)


//Render loop
function update(){

if(cascadeMesh !=undefined){
    cascadeMesh.rotation.y +=0.01;
    
}
    renderer.render(scene, camera);
    requestAnimationFrame(update) //runs the function everytime something need to be drawn
}

update()