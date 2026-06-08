import * as THREE from "https://unpkg.com/three@0.160.0/build/three.module.js";

const canvas = document.getElementById("frame-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const frameCount = 240;
const images = [];
let imagesLoaded = 0;
let currentFrame = 0;

// LOAD IMAGES
function preloadImages() {
  const text = document.querySelector(".loader-text");
  const bar = document.querySelector(".loader-bar-fill");
  const content = document.querySelector(".loader-content");
  const loader = document.getElementById("loader");

  return new Promise(resolve => {
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = `frames/ezgif-frame-${String(i).padStart(3, '0')}.jpg`;

      img.onload = () => {
        imagesLoaded++;
        const p = Math.floor((imagesLoaded / frameCount) * 100);
        if (text) text.innerText = `${p}%`;
        if (bar) bar.style.width = `${p}%`;
        if (content) content.setAttribute("aria-valuenow", p);

        if (imagesLoaded === frameCount) {
          setTimeout(() => {
            if (loader) {
              loader.style.opacity = "0";
              loader.setAttribute("aria-hidden", "true");
              setTimeout(() => loader.style.display = "none", 500);
            }
            resolve();
          }, 200);
        }
      };

      images.push(img);
    }
  });
}

// DRAW FRAME
function draw(frame) {
  const img = images[frame];
  if (!img) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}

// THREE.JS SETUP
let scene, camera, renderer, cube;

function initThree() {
  const container = document.getElementById("three-container");

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  // LIGHT
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(2, 2, 5);
  scene.add(light);

  // OBJECT (HOUSE PIECE TEST)
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
  const maxScroll = document.body.scrollHeight - window.innerHeight;
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

// RESIZE FIX (IMPORTANT)
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  if (renderer && camera) {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  }
});

// INIT
preloadImages().then(() => {
  draw(0);
  window.addEventListener("scroll", onScroll);
  initThree();
});
