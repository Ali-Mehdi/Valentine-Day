function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

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
  }, 200);
}
