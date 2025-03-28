import React, { useEffect, useRef } from 'react';

const MouseTrail = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    let particles = [];
    const colors = ['#d32f2f', '#ff6659', '#9a0007', '#ffc107', '#fff350', '#c79100'];
    
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 2;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.life = 20;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= 0.5;
        if (this.size > 0.2) this.size -= 0.1;
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.life / 20;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }
    
    function createParticles(e) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      for (let i = 0; i < 3; i++) {
        particles.push(new Particle(mouseX, mouseY));
      }
    }
    
    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        if (particles[i].life <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }
      
      requestAnimationFrame(animateParticles);
    }
    
    window.addEventListener('mousemove', createParticles);
    animateParticles();
    
    function handleResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('mousemove', createParticles);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999
      }}
    />
  );
};

export default MouseTrail;