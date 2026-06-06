const START = 1;
const END = 240;
const TOTAL = END - START + 1;

const PATH = i => `frames/ezgif-frame-${String(i).padStart(3,'0')}.jpg`;

let images = [];
let currentFrame = 0;
let mouseX = 0;
let mouseY = 0;

const canvas = document.getElementById("animation-canvas");
const ctx = canvas.getContext("2d");
const boom = document.getElementById("boomSound");

// resize
function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
addEventListener("resize", resize);

// mouse movement (parallax)
addEventListener("mousemove", e => {
  mouseX = (e.clientX / innerWidth - 0.5) * 20;
  mouseY = (e.clientY / innerHeight - 0.5) * 20;
});

// preload
function preload() {
  return new Promise(res => {
    let loaded = 0;
    for (let i = START; i <= END; i++) {
      const img = new Image();
      img.src = PATH(i);
      img.onload = () => (++loaded === TOTAL && res());
      img.onerror = () => (++loaded === TOTAL && res());
      images.push(img);
    }
  });
}

// draw with zoom + parallax + shake
function draw(i, shake = 0) {
  const img = images[i];
  if (!img) return;

  const zoom = 1 + i / TOTAL * 0.1;

  const x = (canvas.width - canvas.width*zoom)/2 + mouseX + (Math.random()-0.5)*shake;
  const y = (canvas.height - canvas.height*zoom)/2 + mouseY + (Math.random()-0.5)*shake;

  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.drawImage(img, x, y, canvas.width*zoom, canvas.height*zoom);
}

// scroll
function onScroll() {
  const max = document.body.scrollHeight - innerHeight;
  let p = scrollY / max;

  let shake = 0;

  if (p < 0.3) {
    p *= 0.5;
  } else if (p < 0.6) {
    p = 0.15 + (p - 0.3) * 1.5;

    // 💥 explosion zone
    shake = 10;

    if (!boom.played.length) boom.play();
  } else {
    p = 0.6 + (p - 0.6) * 0.6;
  }

  const frame = Math.floor(p * TOTAL);

  if (frame !== currentFrame) {
    currentFrame = frame;
    requestAnimationFrame(() => draw(frame, shake));
  }

  document.querySelectorAll(".overlay").forEach(el=>{
    const s=el.dataset.start,e=el.dataset.end;
    el.classList.toggle("active", p>=s && p<=e);
  });

  document.getElementById("navbar")
    .classList.toggle("scrolled", scrollY>50);
}

addEventListener("scroll", onScroll);

// init
preload().then(()=>{
  draw(0);
  const loader = document.getElementById("loader");
  setTimeout(()=>{
    loader.style.opacity=0;
    setTimeout(()=>loader.remove(),1000);
  },500);
});
