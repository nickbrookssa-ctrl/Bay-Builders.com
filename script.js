const canvas = document.getElementById("frame-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const frameCount = 240;
const images = [];

// LOAD FRAMES
for (let i = 1; i <= frameCount; i++) {
  const img = new Image();
  img.src = `frames/ezgif-frame-${String(i).padStart(3, '0')}.jpg`;
  images.push(img);
}

function draw(frame) {
  const img = images[frame];
  if (!img) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}

// THREE
let scene, camera, renderer, cube;

function initThree() {
  const container = document.getElementById("three-container");

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshStandardMaterial({ color: 0xff5a1f });

  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(2,2,5);
  scene.add(light);

  camera.position.z = 3;

  animate();
}

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

initThree();

// SCROLL
window.addEventListener("scroll", () => {

  const scrollTop = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const progress = scrollTop / maxScroll;

  // IMAGE SEQUENCE
  if (progress < 0.7) {
    const frame = Math.floor(progress / 0.7 * frameCount);
    draw(frame);

    canvas.style.opacity = 1;
    document.getElementById("three-container").style.opacity = 0;
  }

  // 3D TRANSITION
  else {
    const fade = (progress - 0.7) / 0.3;

    canvas.style.opacity = 1 - fade;
    document.getElementById("three-container").style.opacity = fade;
  }

});
