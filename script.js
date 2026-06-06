// ===== CONFIG =====
const START = 1;
const END = 240;
const TOTAL = END - START + 1;

const PATH = (i) => `frames/ezgif-frame-${String(i).padStart(3, '0')}.jpg`;

let images = [];
let currentFrame = 0;

const canvas = document.getElementById("animation-canvas");
const ctx = canvas.getContext("2d");

// ===== RESIZE =====
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  draw(currentFrame);
}
window.addEventListener("resize", resize);
resize();

// ===== PRELOAD IMAGES =====
function preload() {
  return new Promise((resolve) => {
    let loaded = 0;

    for (let i = START; i <= END; i++) {
      const img = new Image();
      img.src = PATH(i);

      img.onload = () => {
        loaded++;
        if (loaded === TOTAL) resolve();
      };

      img.onerror = () => {
        console.warn("Missing:", img.src);
        loaded++;
        if (loaded === TOTAL) resolve();
      };

      images.push(img);
    }
  });
}

// ===== DRAW FRAME =====
function draw(index) {
  const img = images[index];
  if (!img) return;

  // Maintain aspect ratio (cover effect)
  const canvasRatio = canvas.width / canvas.height;
  const imgRatio = img.width / img.height;

  let drawWidth, drawHeight, offsetX = 0, offsetY = 0;

  if (imgRatio > canvasRatio) {
    drawHeight = canvas.height;
    drawWidth = imgRatio * drawHeight;
    offsetX = (canvas.width - drawWidth) / 2;
  } else {
    drawWidth = canvas.width;
    drawHeight = drawWidth / imgRatio;
    offsetY = (canvas.height - drawHeight) / 2;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
}

// ===== SCROLL ANIMATION =====
function onScroll() {
  const scroll = window.scrollY;
  const max = document.body.scrollHeight - window.innerHeight;

  let progress = scroll / max;

  // Smooth cinematic easing
  progress = Math.pow(progress, 1.4);

  const frame = Math.min(
    TOTAL - 1,
    Math.floor(progress * TOTAL)
  );

  if (frame !== currentFrame) {
    currentFrame = frame;
    requestAnimationFrame(() => draw(currentFrame));
  }

  updateText(progress);
  updateNavbar(scroll);
}

window.addEventListener("scroll", onScroll);

// ===== TEXT OVERLAYS =====
function updateText(progress) {
  document.querySelectorAll(".overlay").forEach(el => {
    const start = parseFloat(el.dataset.start);
    const end = parseFloat(el.dataset.end);

    if (progress >= start && progress <= end) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

// ===== NAVBAR EFFECT =====
function updateNavbar(scroll) {
  const nav = document.getElementById("navbar");

  if (scroll > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
}

// ===== INIT =====
preload().then(() => {
  draw(0);
});
