// 🕒 Time (optional – safe)
function showTime() {
  const el = document.getElementById('currentTime');
  if (el) {
    el.innerHTML = new Date().toUTCString();
  }
}
showTime();
setInterval(showTime, 1000);

// ❤️ REQUIRED ELEMENTS
const yesBtn = document.getElementById('yes');
const celebrate = document.getElementById('celebrate');
const music = document.getElementById('bgMusic');

// 💖 YES CLICK ACTION
yesBtn.addEventListener('click', () => {
  celebrate.style.display = 'flex';
  music.volume = 0.6;
  music.play();
  heartRain();
});

// 🌧️ HEART RAIN
function heartRain() {
  const container = document.getElementById('heartRain');
  container.style.display = 'block';

  const hearts = ['❤️','💖','💕','💘','💞','🌹'];

  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';

    container.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }, 180); // rain intensity
}
