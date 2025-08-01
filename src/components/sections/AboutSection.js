import React from 'react';

const AboutSection = ({ t, currentLang }) => {
  const skills = [
    {
      icon: "🚀",
      titleKey: "agile_methodologies",
      descKey: "agile_desc"
    },
    {
      icon: "📊",
      titleKey: "data_analysis",
      descKey: "data_desc"
    },
    {
      icon: "👥",
      titleKey: "team_leadership",
      descKey: "leadership_desc"
    },
    {
      icon: "💡",
      titleKey: "product_management",
      descKey: "product_desc"
    }
  ];

  const languages = [
    { nameKey: "portuguese", flag: "🇧🇷", levelKey: "native" },
    { nameKey: "english", flag: "🇺🇸", levelKey: "developing" },
    { nameKey: "spanish", flag: "🇪🇸", levelKey: "developing" }
  ];

  return (
    <section 
      id="about" 
      style={{
        padding: '80px 0',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        
        {/* Seção principal */}
        <div className="section">
          <h2 className="section-title">{t.about_title}</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            alignItems: 'start',
            marginBottom: '50px'
          }}>
            
            {/* Texto sobre mim */}
            <div>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: '#e0e0e0',
                marginBottom: '20px'
              }}>
                {t.about_text}
              </p>
              
              {currentLang === 'pt' && (
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  color: '#e0e0e0'
                }}>
                  <strong style={{ color: '#66fcf1' }}>Minha trajetória:</strong> Do atendimento ao cliente à gestão de produtos, 
                  desenvolvi uma visão única que combina empatia humana com estratégia tecnológica. 
                  Especialista em transformar feedback real em features que fazem diferença.
                </p>
              )}
              
              {currentLang === 'en' && (
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  color: '#e0e0e0'
                }}>
                  <strong style={{ color: '#66fcf1' }}>My journey:</strong> From customer service to product management, 
                  I developed a unique vision that combines human empathy with technological strategy. 
                  Expert in transforming real feedback into features that make a difference.
                </p>
              )}
              
              {currentLang === 'es' && (
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  color: '#e0e0e0'
                }}>
                  <strong style={{ color: '#66fcf1' }}>Mi trayectoria:</strong> Desde atención al cliente hasta gestión de productos, 
                  desarrollé una visión única que combina empatía humana con estrategia tecnológica. 
                  Experta en transformar feedback real en características que marcan la diferencia.
                </p>
              )}
            </div>

            {/* Idiomas */}
            <div>
              <h3 style={{
                color: '#66fcf1',
                fontSize: '1.5rem',
                marginBottom: '20px'
              }}>
                {t.languages_title}
              </h3>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                gap: '12px'
              }}>
                {languages.map((lang, index) => (
                  <div key={index} style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '10px',
                    padding: '12px',
                    textAlign: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '6px' }}>
                      {lang.flag}
                    </div>
                    <div style={{
                      fontWeight: '600',
                      marginBottom: '6px',
                      fontSize: '0.9rem',
                      color: '#ffffff'
                    }}>
                      {t[lang.nameKey]}
                    </div>
                    <div style={{
                      fontSize: '0.8rem',
                      color: '#66fcf1'
                    }}>
                      {t[lang.levelKey]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Skills Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            marginTop: '30px'
          }}>
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-card"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '15px',
                  padding: '20px',
                  textAlign: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-5px)';
                  e.target.style.background = 'rgba(102, 252, 241, 0.1)';
                  e.target.style.borderColor = 'rgba(102, 252, 241, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <div style={{
                  fontSize: '2.5rem',
                  color: '#66fcf1',
                  marginBottom: '15px'
                }}>
                  {skill.icon}
                </div>
                <div style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  marginBottom: '10px',
                  color: '#ffffff'
                }}>
                  {t[skill.titleKey]}
                </div>
                <div style={{
                  fontSize: '0.9rem',
                  color: '#b3b3b3'
                }}>
                  {t[skill.descKey]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;