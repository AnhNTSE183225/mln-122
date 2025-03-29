import React, { useEffect, useRef } from 'react';

const Fireworks = ({ duration = 4000 }) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    let particles = [];
    let rockets = [];
    let letters = [];
    let flagStars = [];
    const maxParticles = 400;
    let timer = 0;
    
    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1;
        this.color = color || `hsl(${Math.random() * 360}, 80%, 50%)`;
        this.speedX = Math.random() * 6 - 3;
        this.speedY = Math.random() * 6 - 3;
        this.alpha = 1;
        this.friction = 0.95;
        this.gravity = 0.1;
      }
      
      update() {
        this.speedY += this.gravity;
        this.speedX *= this.friction;
        this.speedY *= this.friction;
        this.x += this.speedX;
        this.y += this.speedY;
        this.alpha -= 0.01;
      }
      
      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }
    
    class Rocket {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height;
        this.size = 3;
        this.speedY = -Math.random() * 8 - 5; // Faster upward movement
        this.speedX = Math.random() * 3 - 1.5; // More horizontal drift
        this.color = 'white';
        this.trailParticles = [];
        // Increase likelihood of special effects
        this.type = Math.random() < 0.4 ? 'flag' : (Math.random() < 0.6 ? 'letter' : 'normal');
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Create trail particles
        this.trailParticles.push(new Particle(this.x, this.y, 'rgba(255, 255, 255, 0.5)'));
        
        // Remove old trail particles
        this.trailParticles = this.trailParticles.filter(p => p.alpha > 0.1);
        this.trailParticles.forEach(p => {
          p.gravity = 0.05;
          p.update();
        });
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw trail particles
        this.trailParticles.forEach(p => p.draw());
      }
      
      explode() {
        if (this.type === 'flag') {
          // Create Vietnam flag
          createVietnamFlag(this.x, this.y);
        } else if (this.type === 'letter') {
          // Create MLN letters
          createMLNLetters(this.x, this.y);
        } else {
          // Regular explosion - now with MORE particles
          const particleCount = 150; // Increased from 80
          // More vibrant colors
          const explosionColor = `hsl(${Math.random() * 360}, 100%, 60%)`;
          
          for (let i = 0; i < particleCount; i++) {
            const particle = new Particle(this.x, this.y, explosionColor);
            // More explosive force
            particle.speedX *= 1.5;
            particle.speedY *= 1.5;
            particles.push(particle);
          }
        }
      }
    }
    
    class FlagStar {
      constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.alpha = 1;
        this.angle = 0;
        this.rotationSpeed = 0.02; // Faster rotation
        this.life = 150; // Longer life
        this.pulseRate = 0.05;
        this.pulseAmount = 0;
      }
      
      update() {
        this.angle += this.rotationSpeed;
        this.life -= 0.5;
        this.alpha = this.life / 150;
        
        // Add a pulsing effect
        this.pulseAmount = Math.sin(this.life * this.pulseRate) * 5;
      }
      
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = '#FFFF00'; // Yellow star
        
        // Draw a 5-point star with pulsing size
        drawStar(0, 0, 5, this.size + this.pulseAmount, (this.size + this.pulseAmount)/2);
        
        ctx.restore();
      }
    }
    
    class Letter {
      constructor(x, y, letter, color) {
        this.x = x;
        this.y = y;
        this.letter = letter;
        this.color = color;
        this.alpha = 1;
        this.life = 150; // Increased life for longer display
        this.fontSize = 45; // Slightly smaller to accommodate more letters
      }
      
      update() {
        this.life -= 0.5;
        this.alpha = this.life / 100;
      }
      
      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.font = `bold ${this.fontSize}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.letter, this.x, this.y);
        ctx.restore();
      }
    }
    
    function createVietnamFlag(x, y) {
      const flagWidth = 150; // Larger flag
      const flagHeight = 100; // Larger flag
      const starSize = 30; // Larger star
      
      // Create red background particles
      for (let i = 0; i < 250; i++) { // More particles
        const particle = new Particle(
          x + (Math.random() * flagWidth - flagWidth/2),
          y + (Math.random() * flagHeight - flagHeight/2),
          '#DA251D' // Vietnam flag red
        );
        particle.speedX = (Math.random() - 0.5) * 3; // More spread
        particle.speedY = (Math.random() - 0.5) * 3; // More spread
        particle.gravity = 0.02;
        particle.size = Math.random() * 3 + 2; // Larger particles
        particles.push(particle);
      }
      
      // Create yellow star
      flagStars.push(new FlagStar(x, y, starSize));
      
      // Add some yellow sparkles around the star
      for (let i = 0; i < 50; i++) {
        const sparkle = new Particle(
          x + (Math.random() * 60 - 30),
          y + (Math.random() * 60 - 30),
          '#FFFF00' // Yellow
        );
        sparkle.size = Math.random() * 2 + 1;
        sparkle.speedX = (Math.random() - 0.5) * 2;
        sparkle.speedY = (Math.random() - 0.5) * 2;
        sparkle.gravity = 0.01;
        particles.push(sparkle);
      }
    }
    
    function createMLNLetters(x, y) {
      // Create MLN122 letters with more visual flair
      const letters122 = ['M', 'L', 'N', '1', '2', '2'];
      const positions = [-100, -50, 0, 40, 70, 100];
      const colors = ['#FFFF00', '#FFA500', '#FFFF00', '#FFA500', '#FFFF00', '#FFA500']; // Alternating colors
      
      for (let i = 0; i < letters122.length; i++) {
        const letter = new Letter(x + positions[i], y, letters122[i], colors[i]);
        
        // Add special effects to each letter
        if (i % 2 === 0) {
          letter.riseEffect = true;
        } else {
          letter.pulseEffect = true;
        }
        
        letters.push(letter);
      }
      
      // Add some sparkles around the text
      for (let i = 0; i < 100; i++) {
        const particle = new Particle(
          x + (Math.random() * 240 - 120),
          y + (Math.random() * 60 - 30),
          i % 2 === 0 ? '#FFFF00' : '#FFA500'
        );
        particle.size = Math.random() * 2 + 1;
        particle.gravity = 0.01;
        particles.push(particle);
      }
    }
    
    function drawStar(cx, cy, spikes, outerRadius, innerRadius) {
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
    
    function animate() {
      // Use rgba with very low opacity for better transparency
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Launch new rockets at an EPIC rate - occasionally launch multiple at once
      if (Math.random() < 0.1) {
        // Determine how many rockets to launch at once (1-3)
        const rocketBurst = Math.floor(Math.random() * 3) + 1;
        for (let i = 0; i < rocketBurst; i++) {
          if (rockets.length < 15) { // Allow more concurrent rockets
            rockets.push(new Rocket());
          }
        }
      }
      
      // Update rockets
      rockets.forEach((rocket, index) => {
        rocket.update();
        rocket.draw();
        
        // Check for explosion
        if (rocket.y < canvas.height * 0.4 && Math.random() < 0.03) {
          rocket.explode();
          rockets.splice(index, 1);
        }
      });
      
      // Update particles
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();
        
        if (particle.alpha <= 0) {
          particles.splice(index, 1);
        }
      });
      
      // Update flag stars
      flagStars.forEach((star, index) => {
        star.update();
        star.draw();
        
        if (star.alpha <= 0) {
          flagStars.splice(index, 1);
        }
      });
      
      // Update letters
      letters.forEach((letter, index) => {
        letter.update();
        letter.draw();
        
        if (letter.alpha <= 0) {
          letters.splice(index, 1);
        }
      });
      
      // Limit the number of particles
      if (particles.length > maxParticles) {
        particles = particles.slice(0, maxParticles);
      }
      
      // Continue animation if we haven't reached the duration
      timer += 16; // Approximate for 60fps
      if (timer < duration) {
        requestAnimationFrame(animate);
      } else {
        // Fade out remaining particles
        const fadeOut = () => {
          ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          
          particles.forEach((particle, index) => {
            particle.alpha -= 0.02;
            particle.draw();
            
            if (particle.alpha <= 0) {
              particles.splice(index, 1);
            }
          });
          
          flagStars.forEach((star, index) => {
            star.alpha -= 0.02;
            star.draw();
            
            if (star.alpha <= 0) {
              flagStars.splice(index, 1);
            }
          });
          
          letters.forEach((letter, index) => {
            letter.alpha -= 0.02;
            letter.draw();
            
            if (letter.alpha <= 0) {
              letters.splice(index, 1);
            }
          });
          
          rockets.forEach((rocket, index) => {
            rocket.explode();
            rockets.splice(index, 1);
          });
          
          if (particles.length > 0 || rockets.length > 0 || flagStars.length > 0 || letters.length > 0) {
            requestAnimationFrame(fadeOut);
          } else {
            // Clear canvas when everything is gone
            ctx.clearRect(0, 0, canvas.width, canvas.height);
          }
        };
        
        fadeOut();
      }
    }
    
    // Handle window resize
    function handleResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    
    window.addEventListener('resize', handleResize);
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [duration]);
  
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
        background: 'transparent'  // Explicitly set background to transparent
      }}
    />
  );
};

export default Fireworks;