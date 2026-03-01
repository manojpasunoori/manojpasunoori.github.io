const canvas = document.getElementById('particle-field');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function initParticles() {
  particles = Array.from({ length: 70 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 0.5,
    dx: (Math.random() - 0.5) * 0.4,
    dy: (Math.random() - 0.5) * 0.4,
  }));
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p) => {
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(108, 247, 255, 0.7)';
    ctx.fill();
  });
  requestAnimationFrame(animateParticles);
}

window.addEventListener('resize', () => {
  resizeCanvas();
  initParticles();
});
resizeCanvas();
initParticles();
animateParticles();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.2 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const xpCounter = document.getElementById('xpCounter');
let xp = 0;
document.querySelectorAll('#skillChips button').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (!btn.classList.contains('active')) {
      btn.classList.add('active');
      xp += 125;
      xpCounter.textContent = xp;
    }
  });
});

const sliders = ['density', 'rain', 'visibility'].map((id) => document.getElementById(id));
const riskScore = document.getElementById('riskScore');
const riskFill = document.getElementById('riskFill');

function updateRisk() {
  const [density, rain, visibility] = sliders.map((s) => Number(s.value));
  const z = -3 + 0.035 * density + 0.03 * rain + 0.028 * visibility;
  const score = 1 / (1 + Math.exp(-z));
  riskScore.textContent = score.toFixed(2);
  riskFill.style.width = `${Math.round(score * 100)}%`;
}
sliders.forEach((slider) => slider.addEventListener('input', updateRisk));
updateRisk();

const chatLog = document.getElementById('chatLog');
const chatInput = document.getElementById('chatInput');
const sendChat = document.getElementById('sendChat');

const botKnowledge = [
  {
    keys: ['experience', 'dojo', 'tcs'],
    answer: 'Manoj currently works at DoJoGa on backend/cloud systems and previously worked at TCS, including CI/CD with GitHub Actions.',
  },
  {
    keys: ['skills', 'stack', 'tech'],
    answer: 'Software Engineer stack: Frontend + Backend + Cloud + SDLC, with Java, C++, Spring Boot, Python, Data Science, Machine Learning, AI-driven development, and test-driven development.',
  },
  {
    keys: ['education', 'uta', 'masters'],
    answer: 'He completed his Master’s in Information Systems at The University of Texas at Arlington.',
  },
  {
    keys: ['goal', 'roles', 'job'],
    answer: 'Target roles include Machine Learning Engineer, MLOps Engineer, Backend Software Engineer, and Cloud DevOps Engineer.',
  },
  {
    keys: ['achievement', 'award', 'hackerrank', 'senator', 'symposium', 'proof', 'certificate'],
    answer: 'Highlights: Student Senator at UTA College of Business, multiple Star Performer awards (2022), HackerRank Software Engineer certification (Jan 18, 2026), and participation in UTA symposiums, Microsoft AI Tour, and Dallas AI events. Check the Proof Wall for snapshots.',
  },
];

function appendMessage(author, text) {
  const msg = document.createElement('p');
  msg.className = 'chat-msg';
  msg.innerHTML = `<strong>${author}:</strong> ${text}`;
  chatLog.appendChild(msg);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function respondToUser() {
  const query = chatInput.value.trim();
  if (!query) return;
  appendMessage('You', query);
  chatInput.value = '';

  const lower = query.toLowerCase();
  const hit = botKnowledge.find((entry) => entry.keys.some((key) => lower.includes(key)));
  const answer = hit ? hit.answer : 'Great question. Ask me about experience, skills, education, or target roles!';

  setTimeout(() => appendMessage('ManojBot', answer), 250);
}

sendChat.addEventListener('click', respondToUser);
chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') respondToUser();
});
appendMessage('ManojBot', 'Welcome to my crazy portfolio. Ask me anything about my engineering journey!');

const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let index = 0;
window.addEventListener('keydown', (e) => {
  if (e.key === konamiCode[index]) {
    index += 1;
    if (index === konamiCode.length) {
      document.body.classList.toggle('party-mode');
      appendMessage('ManojBot', '🎉 Easter Egg unlocked: Party Mode activated!');
      index = 0;
    }
  } else {
    index = 0;
  }
});
