//Renderer setup//
const renderer = new THREE.WebGLRenderer ({antialias: true})
renderer.setSize(window.innerWidth, window.innerHeight)     //create the canvas
document.querySelector('.webGLContainer')
    .appendChild(renderer.domElement)                      //place canvas withing container in html

//Scene setup
const scene = new THREE.Scene()

//Camera
const camera = new THREE.PerspectiveCamera(75,
    window.innerWidth / window.innerHeight, 0.1, 1000) // (FOV, aspect ratio, camera near, camera far)
camera.position.set(0, 5, 10)   //(x, y, x)
camera.lookAt(0,0,0)

const cubeGeom = new THREE.BoxGeometry(1,1,3); //Create a mesh's geometry
const cubeMaterial = new THREE.MeshNormalMaterial(); //Create a mesh's material
const cubeMesh = new THREE.Mesh(cubeGeom,cubeMaterial) //Create a mesh
scene.add(cubeMesh)

console.log(new THREE.GLTFLoader())
const modelLoader = new THREE.GLTFLoader()
modelLoader.load('assets/cascade.glb', (glb)=>{
    console.log(glb)
    scene.add(glb.scene)
    glb.scene.traverse( child =>{
        if(child.name == 'cascade')
            child.material = new THREE.MeshNormalMaterial()
    })
}) //to load a model I need a (URL, callback function)

//Render loop
function update(){

    cubeMesh.rotation.x += 0.01; //makes the fuction rotate the mesh eerytime it is called
    cubeMesh.rotation.y += 0.02;
    cubeMesh.scale.z = Math.sin(Date.now() * 0.01);

    renderer.render(scene, camera);
    requestAnimationFrame(update) //runs the function everytime something need to be drawn
}

update()