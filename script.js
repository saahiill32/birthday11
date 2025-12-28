/* ---------- SLIDESHOW ---------- */
const slides = document.querySelectorAll('.slide');
let i = 0;
setInterval(() => {
  slides[i].classList.remove('active');
  i = (i + 1) % slides.length;
  slides[i].classList.add('active');
}, 3000);

/* ---------- MUSIC ---------- */
const s1 = document.getElementById('song01');
const s2 = document.getElementById('song02');
window.addEventListener('click', () => {
  s1.currentTime = 15;
  s1.play();
}, { once: true });
s1.loop = true;

/* ---------- COUNTDOWN ---------- */
const target = new Date("January 18, 2026 00:00:00").getTime();
const title = document.getElementById('title');
const timerDiv = document.getElementById('timer');

let countdown = setInterval(() => {
  const now = new Date().getTime();
  const diff = target - now;

  if (diff <= 0) {
    clearInterval(countdown);
    endSequence();
    return;
  }

  const h = Math.floor(diff / (1000 * 60 * 60));
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  document.getElementById("hours").innerText = String(h).padStart(2, '0');
  document.getElementById("minutes").innerText = String(m).padStart(2, '0');
  document.getElementById("seconds").innerText = String(s).padStart(2, '0');
}, 1000);

/* ---------- AFTER TIMER ENDS ---------- */
function endSequence() {
  s1.pause();
  s2.currentTime = 57;
  s2.play();

  title.style.display = 'none';
  timerDiv.style.display = 'none';

  const msg = document.createElement('h1');
  msg.innerText = "Happy Birthday Bachha";
  msg.style.color = 'peachpuff';
  msg.style.fontSize = '3rem';
  msg.style.position = 'absolute';
  msg.style.top = '45%';
  msg.style.left = '50%';
  msg.style.transform = 'translate(-50%, -50%)';
  msg.style.zIndex = 3;
  document.body.appendChild(msg);

  const msg2 = document.createElement('h2');
  msg2.style.color = 'peachpuff';
  msg2.style.fontSize = '1.5rem';
  msg2.style.textAlign = 'center';
  msg2.style.position = 'absolute';
  msg2.style.top = '60%';
  msg2.style.left = '50%';
  msg2.style.transform = 'translateX(-50%)';
  msg2.innerText = "Shyd ha tuza 4th birthday aahe jevha pasun aapn sobt aaho";
  document.body.appendChild(msg2);

  const msg3 = document.createElement('h2');
  msg3.style.color = 'peachpuff';
  msg3.style.fontSize = '1.5rem';
  msg3.style.textAlign = 'center';
  msg3.style.position = 'absolute';
  msg3.style.top = '67%';
  msg3.style.left = '50%';
  msg3.style.transform = 'translateX(-50%)';
  msg3.innerText = "aani mi promise krto ki aaj pasun tuzya har b'day sobt midun mnvu";
  document.body.appendChild(msg3);

  setTimeout(() => {
    msg2.remove();
    msg3.innerText = "I LOVE UHH SO MUCH..";
  }, 13000);

  spawnBalloons();
  fireworks();
}

/* ---------- BALLOONS ---------- */
function spawnBalloons() {
  const container = document.getElementById('balloons');
  for (let i = 0; i < 15; i++) {
    const b = document.createElement('div');
    b.classList.add('balloon');
    b.style.left = Math.random() * 100 + '%';
    b.style.background = 'radial-gradient(circle at 30% 30%, #ffb3b3, #ff0000)';
    b.style.animationDelay = (Math.random() * 1) + 's';
    container.appendChild(b);
    setTimeout(() => b.remove(), 3000);
  }
}

/* ---------- FIREWORKS ---------- */
function fireworks() {
  const canvas = document.getElementById('fireworks');
  const ctx = canvas.getContext('2d');
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  let particles = [];
  for (let i = 0; i < 100; i++) {
    particles.push({
      x: innerWidth / 2,
      y: innerHeight / 2,
      angle: Math.random() * 2 * Math.PI,
      speed: Math.random() * 6 + 2,
      radius: Math.random() * 2 + 1,
      color: `hsl(${Math.random() * 360},100%,60%)`,
      life: 60 + Math.random() * 40
    });
  }

  let interval = setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += Math.cos(p.angle) * p.speed;
      p.y += Math.sin(p.angle) * p.speed;
      p.life -= 1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    });
    particles = particles.filter(p => p.life > 0);
    if (particles.length === 0) clearInterval(interval);
  }, 33);

  setTimeout(() => ctx.clearRect(0, 0, canvas.width, canvas.height), 4000);
}