// ===== Magic Cursor Particle Effect (applies to all pages) =====
const canvas = document.getElementById("magicCursor");
const ctx = canvas.getContext("2d");

let particles = [];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 8 + 4;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    this.color = `hsl(${Math.random()*360}, 100%, 60%)`; // Gradient colors
    this.opacity = 1;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.opacity -= 0.02;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.opacity;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

window.addEventListener("mousemove", e => {
  for (let i = 0; i < 5; i++) {
    particles.push(new Particle(e.x, e.y));
  }
});

function handleParticles() {
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
    if (particles[i].opacity <= 0) {
      particles.splice(i, 1);
      i--;
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  requestAnimationFrame(animate);
}
animate();

// ===== Certificate / Circuits Open Function =====
function openCertificate(certName) {
    const certificates = {
        python: "C:/Users/Dadapeer/Desktop/portfolio/img/mathplotlib.jpg",
        data_viz: "C:/Users/Dadapeer/Desktop/portfolio/img/data_visulaization.jpg",
        ai: "C:/Users/Dadapeer/Desktop/portfolio/img/AI.jpg",
        digital_marketing: "C:/Users/Dadapeer/Desktop/portfolio/img/digital_marketing.jpg",
        aws: "C:/Users/Dadapeer/Desktop/portfolio/img/data_visulaization.jpg",
        resume: "C:/Users/Dadapeer/Desktop/portfolio/img/Resume.pdf"
    };

    const url = certificates[certName];
    if(url) {
        window.open(url, "_blank");
    } else {
        alert("Certificate not available!");
    }
}