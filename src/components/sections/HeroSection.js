import React, { useEffect, useState } from 'react';

const HeroSection = ({ t, currentLang }) => {
  const [particles, setParticles] = useState([]);

  // Textos por idioma
  const getText = (ptText, enText, esText) => {
    if (currentLang === 'en') return enText;
    if (currentLang === 'es') return esText;
    return ptText;
  };

  // Gerar "nuvens de pensamento" de um PO com mini ícones
  useEffect(() => {
    const poMindset = [
      { tool: 'Dashboard', icon: '📊' },
      { tool: 'Jira', icon: '🎯' },
      { tool: 'Miro', icon: '🖼️' },
      { tool: 'Figma', icon: '🎨' },
      { tool: 'KPIs', icon: '📈' },
      { tool: 'Roadmap', icon: '🗺️' },
      { tool: 'Backlog', icon: '📋' },
      { tool: 'Analytics', icon: '📊' },
      { tool: 'User Stories', icon: '👤' },
      { tool: 'Sprint', icon: '⚡' },
      { tool: 'Stakeholders', icon: '🤝' },
      { tool: 'MVP', icon: '🚀' }
    ];
    const colors = ['#66fcf1', '#14b8a6', '#9333ea', '#f59e0b', '#ec4899', '#8b5cf6'];
    
    const newParticles = poMindset.map((item, index) => {
      // Distribuição em círculo ao redor do centro, mas com zonas livres
      const angle = (index / poMindset.length) * 2 * Math.PI;
      const radius = 35 + Math.random() * 15; // 35% to 50% do centro
      
      // Evitar zona central (onde estará a foto e texto)
      const centerX = 50;
      const centerY = 50;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      
      return {
        id: index,
        tool: item.tool,
        icon: item.icon,
        x: Math.max(5, Math.min(95, x)), // Entre 5% e 95%
        y: Math.max(10, Math.min(90, y)), // Entre 10% e 90%
        color: colors[index % colors.length],
        delay: index * 0.3,
        size: Math.random() * 0.5 + 1.2, // 1.2 to 1.7 (ícones maiores que texto)
        rotation: Math.random() * 360
      };
    });
    
    setParticles(newParticles);
  }, []);

  return (
    <section 
      id="hero" 
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '0 20px',
        overflow: 'hidden'
      }}
    >
      {/* Mini ícones de ferramentas PO */}
      {particles.map((thought) => (
        <div
          key={thought.id}
          style={{
            position: 'absolute',
            left: `${thought.x}%`,
            top: `${thought.y}%`,
            fontSize: `${thought.size}rem`,
            opacity: '0.6',
            animation: `floatThought 12s ease-in-out infinite ${thought.delay}s, fadeThought 8s ease-in-out infinite ${thought.delay * 0.4}s`,
            zIndex: 1,
            pointerEvents: 'none',
            filter: `drop-shadow(0 0 8px ${thought.color}40)`,
            transform: `rotate(${thought.rotation}deg)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          title={thought.tool}
        >
          {thought.icon}
        </div>
      ))}

      {/* Conteúdo principal */}
      <div style={{ 
        textAlign: 'center', 
        zIndex: 10, 
        position: 'relative',
        maxWidth: '800px'
      }}>

        {/* Avatar */}
        <div style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #66fcf1 0%, #14b8a6 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 30px',
          fontSize: '3rem',
          fontWeight: '700',
          color: '#0f0f23',
          boxShadow: '0 0 30px rgba(102, 252, 241, 0.5)',
          animation: 'gentleTrail 4s ease-in-out infinite'
        }}>
          CA
        </div>

        {/* Nome */}
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: '700',
          background: 'linear-gradient(135deg, #66fcf1 0%, #14b8a6 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          marginBottom: '20px',
          lineHeight: '1.2'
        }}>
          Ciribelly Alice
        </h1>

        {/* Título/Posição */}
        <p style={{
          fontSize: '1.4rem',
          color: '#a1a1aa',
          marginBottom: '20px',
          fontWeight: '500'
        }}>
          {getText(
            "Product Owner | Evoluindo para Scrum Master",
            "Product Owner | Evolving to Scrum Master",
            "Product Owner | Evolucionando hacia Scrum Master"
          )}
        </p>

        {/* Badge sutil de evolução */}
        <div style={{
          background: 'rgba(102, 252, 241, 0.1)',
          border: '1px solid rgba(102, 252, 241, 0.2)',
          borderRadius: '20px',
          padding: '6px 16px',
          display: 'inline-block',
          marginBottom: '30px',
          backdropFilter: 'blur(10px)'
        }}>
          <span style={{ 
            fontSize: '0.85rem', 
            color: '#66fcf1',
            fontWeight: '500'
          }}>
            {getText(
              "Buscando oportunidades como Scrum Master",
              "Seeking opportunities as Scrum Master",
              "Buscando oportunidades como Scrum Master"
            )}
          </span>
        </div>

        {/* Descrição */}
        <p style={{
          fontSize: '1.1rem',
          color: '#d1d5db',
          lineHeight: '1.6',
          maxWidth: '600px',
          margin: '0 auto 40px'
        }}>
          {getText(
            "Product Owner com experiência sólida buscando evolução natural para Scrum Master. Experiência comprovada em diferentes setores, com foco em empatia, análise e facilitação de equipes.",
            "Product Owner with solid experience seeking natural evolution to Scrum Master. Proven experience across different sectors, focused on empathy, analysis and team facilitation.",
            "Product Owner con experiencia sólida buscando evolución natural hacia Scrum Master. Experiencia comprobada en diferentes sectores, enfocada en empatía, análisis y facilitación de equipos."
          )}
        </p>

        {/* CTA Buttons */}
        <div style={{ 
          display: 'flex', 
          gap: '20px', 
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <a 
            href="mailto:alice.ciribellys@gmail.com"
            style={{
              background: 'linear-gradient(135deg, #66fcf1 0%, #14b8a6 100%)',
              color: '#0f0f23',
              padding: '12px 30px',
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 10px 20px rgba(102, 252, 241, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            📧 {getText("Entrar em contato", "Get in touch", "Contactar")}
          </a>
          
          <a 
            href="https://www.linkedin.com/in/ciribelly-alice-9973471a9/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'transparent',
              color: '#66fcf1',
              padding: '12px 30px',
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1rem',
              border: '2px solid #66fcf1',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#66fcf1';
              e.target.style.color = '#0f0f23';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#66fcf1';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            💼 LinkedIn
          </a>
        </div>
      </div>

      {/* Animações CSS */}
      <style jsx>{`
        @keyframes floatThought {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
          }
          25% { 
            transform: translateY(-8px) translateX(3px) rotate(1deg); 
          }
          50% { 
            transform: translateY(-4px) translateX(-2px) rotate(-0.5deg); 
          }
          75% { 
            transform: translateY(-12px) translateX(1px) rotate(0.8deg); 
          }
        }
        
        @keyframes fadeThought {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.3; }
        }
        
        @keyframes gentleTrail {
          0%, 100% { box-shadow: 0 0 30px rgba(102, 252, 241, 0.5); }
          50% { box-shadow: 0 0 40px rgba(102, 252, 241, 0.8), 0 0 60px rgba(20, 184, 166, 0.3); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;