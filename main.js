// BASIC TEST VERSION (guaranteed visible)

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111111);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth/window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// LIGHT
const light = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(5,10,5);
scene.add(light);

// OBJECT (BIG + OBVIOUS)
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(5,5,5),
  new THREE.MeshStandardMaterial({ color: 0xff5500 })
);
scene.add(cube);

// CAMERA POSITION (IMPORTANT FIX)
camera.position.z = 10;

// ANIMATE
function animate() {
  requestAnimationFrame(animate);

  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();
