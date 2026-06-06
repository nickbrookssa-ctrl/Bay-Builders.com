const canvas = document.getElementById("frame-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const frameCount = 240;
const images = [];
let imagesLoaded = 0;
let currentFrame = 0;

// LOAD IMAGES PROPERLY
function preloadImages() {
  return new Promise(resolve => {
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = `frames/ezgif-frame-${String(i).padStart(3, '0')}.jpg`;

      img.onload = () => {
        imagesLoaded++;
        if (imagesLoaded === frameCount) resolve();
      };

      images.push(img);
    }
  });
}

// DRAW FUNCTION
function draw(frame) {
  const img = images[frame];
  if (!img) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}

// THREE.JS
let scene, camera, renderer, cube;

function initThree() {
  const container = document.getElementById("three-container");

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, innerWidth/innerHeight, 0.1, 1000);

  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(innerWidth, innerHeight);
  container.appendChild(renderer.domElement);

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(2,2,5);
  scene.add(light);

  cube = new THREE.Mesh(
    new THREE.BoxGeometry(),
    new THREE.MeshStandardMaterial({ color: 0xff5a1f })
  );

  scene.add(cube);
  camera.position.z = 3;

  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  animate();
}

// SCROLL CONTROL
function onScroll() {
  const maxScroll = document.body.scrollHeight - innerHeight;
  const progress = window.scrollY / maxScroll;

  if (progress < 0.7) {
    const frame = Math.floor(progress * frameCount);
    if (frame !== currentFrame) {
      currentFrame = frame;
      draw(frame);
    }

    canvas.style.opacity = 1;
    document.getElementById("three-container").style.opacity = 0;
  } else {
    const fade = (progress - 0.7) / 0.3;

    canvas.style.opacity = 1 - fade;
    document.getElementById("three-container").style.opacity = fade;
  }
}

// INIT EVERYTHING
preloadImages().then(() => {
  draw(0); // ✅ FIRST FRAME GUARANTEED
  window.addEventListener("scroll", onScroll);
  initThree();
});
