// Marigold and Rose Flower Petals Particle System with Physics & Canvas
class FlowerPetalSystem {
  constructor() {
    this.canvas = document.getElementById('petalCanvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.petals = [];
    this.sparkles = [];
    // Kept minimal in count as requested
    this.maxPetals = 8;
    this.active = true;
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.initPetals();
    this.animate();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  createPetal(x = null, y = null, isShower = false) {
    const colors = [
      { r: 255, g: 153, b: 0, a: 0.85 },   // Bright Marigold Orange
      { r: 255, g: 204, b: 0, a: 0.85 },   // Bright Saffron Gold
      { r: 240, g: 80, b: 40, a: 0.8 },    // Deep Festive Saffron
      { r: 230, g: 40, b: 70, a: 0.8 },    // Rose Crimson Petal
      { r: 255, g: 220, b: 90, a: 0.85 }   // Light Yellow Marigold
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // Reduced petal size: small & delicate (4px to 8px)
    const size = Math.random() * 4 + 4.5;

    return {
      x: x !== null ? x : Math.random() * this.width,
      y: y !== null ? y : (isShower ? -15 : Math.random() * this.height),
      size: size,
      color: color,
      speedY: isShower ? (Math.random() * 2.5 + 1.8) : (Math.random() * 0.9 + 0.5),
      speedX: (Math.random() - 0.5) * (isShower ? 2 : 0.8),
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 2,
      oscillationSpeed: Math.random() * 0.02 + 0.01,
      oscillationDist: Math.random() * 18 + 8,
      initialX: x !== null ? x : Math.random() * this.width,
      tick: Math.random() * 100
    };
  }

  createSparkle(x, y) {
    return {
      x: x,
      y: y,
      size: Math.random() * 2.5 + 1,
      color: 'rgba(255, 220, 100, ' + (Math.random() * 0.6 + 0.2) + ')',
      alpha: 1,
      decay: Math.random() * 0.025 + 0.015,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5 - 0.5
    };
  }

  initPetals() {
    for (let i = 0; i < this.maxPetals; i++) {
      this.petals.push(this.createPetal());
    }
  }

  // When shower button is clicked: shower large quantity of delicate small petals
  triggerFlowerShower(count = 55) {
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        const p = this.createPetal(Math.random() * this.width, -20, true);
        this.petals.push(p);
      }, i * 30);
    }
  }

  drawPetal(p) {
    const ctx = this.ctx;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rotation * Math.PI) / 180);

    ctx.beginPath();
    ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.color.a})`;
    
    // Delicate organic curved petal shape
    ctx.moveTo(0, -p.size);
    ctx.bezierCurveTo(p.size * 0.6, -p.size * 0.5, p.size * 0.8, p.size * 0.4, 0, p.size);
    ctx.bezierCurveTo(-p.size * 0.8, p.size * 0.4, -p.size * 0.6, -p.size * 0.5, 0, -p.size);
    ctx.fill();

    ctx.restore();
  }

  animate() {
    if (!this.active) return;
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = this.petals.length - 1; i >= 0; i--) {
      const p = this.petals[i];
      p.tick += p.oscillationSpeed;
      p.x = p.initialX + Math.sin(p.tick) * p.oscillationDist;
      p.initialX += p.speedX;
      p.y += p.speedY;
      p.rotation += p.rotationSpeed;

      this.drawPetal(p);

      if (p.y > this.height + 30) {
        if (this.petals.length > this.maxPetals) {
          this.petals.splice(i, 1);
        } else {
          this.petals[i] = this.createPetal(null, -15);
        }
      }
    }

    requestAnimationFrame(() => this.animate());
  }
}

window.FlowerPetalSystem = FlowerPetalSystem;
