const reasons = [
  "You're the kindest person I know 💖",
  "You always make me smile 😊",
  "You listen without judging 👂",
  "You're incredibly smart 🧠",
  "You're beautiful inside and out 🌸",
  "You always support me 🫂",
  "You have the best laugh 😂",
  "You're so creative 🎨",
  "You’re thoughtful and caring 🥰",
  "You love unconditionally 💞",
  "You bring light to every room 🌟",
  "You're my partner in crime 🕵️",
  "You're fearless and bold 💪",
  "You're emotionally intelligent 💡",
  "You're trustworthy 🔐",
  "You're the best hugger 🤗",
  "You have a heart of gold 💛",
  "You're inspiring 🔥",
  "You’re silly in the best way 🐣",
  "You always make time for others ⏳",
  "You’re unapologetically yourself 🎉",
  "You're simply irreplaceable 💎",
  "You’re the greatest gift ever 🎁"
];

function showReasons() {
  const container = document.getElementById('reasons-list');
  container.innerHTML = '';
  let i = 0;
  const interval = setInterval(() => {
    if (i >= reasons.length) return clearInterval(interval);
    const p = document.createElement('p');
    p.textContent = reasons[i];
    container.appendChild(p);
    i++;
  }, 600);
}

function startJourney() {
  document.querySelector('.welcome').classList.add('hidden');
  document.querySelector('.carousel').classList.remove('hidden');
  document.querySelector('.reasons').classList.remove('hidden');
  document.querySelector('.surprise').classList.remove('hidden');
  document.querySelector('.cake-section').classList.remove('hidden');
  document.querySelector('.secrets').classList.remove('hidden');

  document.querySelector('.carousel-container').scrollIntoView({ behavior: 'smooth' });
  document.getElementById('birthday-music').play();
  showReasons();
  launchConfetti();
}

function revealGift() {
  document.getElementById('gift-content').classList.remove('hidden');
}

function blowCandle() {
  const flame = document.querySelector('.candle-flame');
  flame.classList.add('blown');
  setTimeout(() => {
    alert("Wishing you endless joy and love! 🎂");
  }, 1500);
}

// Secret cards click interaction
document.querySelectorAll('.secret-card').forEach(card => {
  card.addEventListener('click', () => {
    alert(card.dataset.msg);
  });
});

// Music toggle
document.getElementById('music-toggle').addEventListener('click', function () {
  const audio = document.getElementById('birthday-music');
  if (audio.paused) {
    audio.play();
    this.textContent = '🔇';
  } else {
    audio.pause();
    this.textContent = '🎵';
  }
});

// Confetti using canvas
function launchConfetti() {
  const canvas = document.getElementById('stars-bg');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confetti = [];
  const colors = ['#FFC0CB', '#FF69B4', '#FFD700', '#E0BBE4', '#FFB6C1'];

  for (let i = 0; i < 100; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 30,
      color: colors[Math.floor(Math.random() * colors.length)],
      tilt: Math.random() * 10 - 5
    });
  }

  function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(c => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2, false);
      ctx.fillStyle = c.color;
      ctx.fill();
    });
    update();
  }

  function update() {
    confetti.forEach(c => {
      c.y += 2;
      c.tilt += Math.random() * 0.2 - 0.1;
      if (c.y > canvas.height) {
        c.y = -c.r;
        c.x = Math.random() * canvas.width;
      }
    });
  }

  setInterval(drawConfetti, 30);
}
