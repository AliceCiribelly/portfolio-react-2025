import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const HeroSection = ({ t, currentLang }) => {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      position: 'relative',
      zIndex: 10
    }}>
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        
        {/* Header com foto - mantendo layout original */}
        <header className="header">
          <div className="profile-photo-container">
            <div className="profile-photo">
              <img 
                src="./foto-perfil.jpg" 
                alt="Ciribelly Alice" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div style="color: #66fcf1; font-size: 60px; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;">CA</div>';
                }}
              />
            </div>
          </div>
          
          <h1 className="name">{t.name}</h1>
          <p className="title">{t.role}</p>
          
          <div className="contact-info">
            <a href="mailto:alice.ciribellys@gmail.com" className="contact-item">
              <Mail size={18} />
              <span>alice.ciribellys@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/ciribelly-alice-9973471a9/" 
               className="contact-item" 
               target="_blank" 
               rel="noopener noreferrer">
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
          </div>
        </header>

        {/* Texto impactante e objetivo */}
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          marginBottom: '40px'
        }}>
          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.8',
            color: '#e0e0e0',
            marginBottom: '20px'
          }}>
            <strong style={{ color: '#66fcf1' }}>{t.hero_text}</strong>
          </p>
          
          <p style={{
            fontSize: '1rem',
            lineHeight: '1.6',
            color: '#b3b3b3'
          }}>
            {t.hero_subtitle}
          </p>
        </div>

        {/* Call to action */}
        <div>
          <a 
            href="#projects" 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'linear-gradient(135deg, #66fcf1, #45a29e)',
              color: '#0f0f23',
              padding: '15px 30px',
              borderRadius: '12px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 30px rgba(102, 252, 241, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 15px 40px rgba(102, 252, 241, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 10px 30px rgba(102, 252, 241, 0.3)';
            }}
          >
            💻 {t.view_projects}
          </a>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;