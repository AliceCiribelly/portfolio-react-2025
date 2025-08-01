import React, { useEffect } from 'react';

const AnimatedBackground = () => {
  useEffect(() => {
    const createParticles = () => {
      const particlesContainer = document.getElementById('particles-container');
      if (!particlesContainer) return;
      
      const particleCount = 30;
      particlesContainer.innerHTML = '';

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
          position: fixed;
          width: 4px;
          height: 4px;
          background: rgba(102, 252, 241, 0.6);
          border-radius: 50%;
          left: ${Math.random() * 100}%;
          animation: float ${Math.random() * 3 + 3}s infinite linear;
          animation-delay: ${Math.random() * 6}s;
          pointer-events: none;
          z-index: 1;
        `;
        particlesContainer.appendChild(particle);
      }
    };

    createParticles();
    
    const interval = setInterval(createParticles, 10000);
    return () => clearInterval(interval);
  }, []);

  return <div id="particles-container" className="fixed inset-0 pointer-events-none z-1" />;
};

export default AnimatedBackground;