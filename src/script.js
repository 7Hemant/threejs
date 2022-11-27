const canvas = document.querySelector(".canvas");
//scene
const scene = new THREE.Scene();

//cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "yellow" });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// sizes
const size = {
  width: innerWidth,
  height: innerHeight,
};

//camera //PerspectiveCamera like human eye see things
const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
camera.position.z = 3;
camera.position.x = 0;
camera.position.y = -1;
scene.add(camera);

//renderer
const renderer = new THREE.WebGL1Renderer({
  canvas,
});

renderer.setSize(innerWidth, innerHeight);

renderer.render(scene, camera);
