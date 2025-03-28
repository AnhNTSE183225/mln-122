import React, { useEffect, useRef } from 'react';

const MouseTrail = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    let particles = [];
    
    // Hình lá cờ Việt Nam
    class Flag {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 10 + 10; // Kích thước lá cờ
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.rotation = Math.random() * Math.PI * 2; // Góc quay ngẫu nhiên
        this.rotationSpeed = (Math.random() - 0.5) * 0.1; // Tốc độ quay
        this.life = 30; // Tuổi thọ lâu hơn để hiển thị lá cờ rõ hơn
        this.opacity = 1;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;
        this.life -= 0.5;
        this.opacity = this.life / 30;
        
        // Giảm kích thước khi tuổi thọ giảm
        if (this.size > 5) {
          this.size -= 0.1;
        }
      }
      
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = this.opacity;
        
        // Vẽ lá cờ Việt Nam
        const width = this.size * 1.5;
        const height = this.size;
        
        // Nền đỏ
        ctx.fillStyle = '#d32f2f';
        ctx.fillRect(-width/2, -height/2, width, height);
        
        // Ngôi sao vàng
        ctx.fillStyle = '#ffc107';
        this.drawStar(0, 0, 5, this.size/3, this.size/6);
        
        ctx.restore();
      }
      
      drawStar(cx, cy, spikes, outerRadius, innerRadius) {
        let rot = Math.PI / 2 * 3;
        let x = cx;
        let y = cy;
        let step = Math.PI / spikes;
        
        ctx.beginPath();
        ctx.moveTo(cx, cy - outerRadius);
        
        for (let i = 0; i < spikes; i++) {
          x = cx + Math.cos(rot) * outerRadius;
          y = cy + Math.sin(rot) * outerRadius;
          ctx.lineTo(x, y);
          rot += step;
          
          x = cx + Math.cos(rot) * innerRadius;
          y = cy + Math.sin(rot) * innerRadius;
          ctx.lineTo(x, y);
          rot += step;
        }
        
        ctx.lineTo(cx, cy - outerRadius);
        ctx.closePath();
        ctx.fill();
      }
    }
    
    function createParticles(e) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      // Tạo ít lá cờ hơn để không làm rối mắt
      for (let i = 0; i < 2; i++) {
        particles.push(new Flag(mouseX, mouseY));
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