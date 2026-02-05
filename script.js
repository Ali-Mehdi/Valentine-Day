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
const loveMessage = `
Love you my sweetest, softest, most precious sweetheart 💖

I want you to know this with every beat of my heart —
I love you more than myself, more than words,
more than time itself.
I genuinely cannot imagine my world without you.

You are my Valentine forever ♾️🩷,
my peace, my solace, my divine affection.
You’re my angel, my miracle, my everything.

I promise with all my heart —
I will never let you down,
never walk away,
never stop choosing you.

You’re my creamy sugar honey bunny 🍯
my apple pie 🥧
my moonlight 🌙
my crown 👑
my eternal happiness
and my eternal love 🌹💓🫠💋💞
`;

function typeText(element, text, speed = 45) {
  let i = 0;
  element.innerHTML = "";
  const interval = setInterval(() => {
    element.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(interval);
  }, speed);
}
