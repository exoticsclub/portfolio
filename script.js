const body = document.body;
const cursor = document.querySelector('.cursor');

// Subtle screen flicker
setInterval(() => {
  body.style.opacity = 0.98 + Math.random() * 0.02;
}, 120);

// Move the circular cursor
document.addEventListener('mousemove', e => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

const bgMusic = document.getElementById("bg-music");
const volumeSlider = document.getElementById("volume");

// Start music on first click
document.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.volume = volumeSlider.value;
    bgMusic.play().catch(err => console.log("Playback error:", err));
  }
});

// Adjust volume live
volumeSlider.addEventListener("input", () => {
  bgMusic.volume = volumeSlider.value;
});
