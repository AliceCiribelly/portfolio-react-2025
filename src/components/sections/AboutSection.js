import React from 'react';
import { Heart, Brain, Eye, Zap } from 'lucide-react';

const AboutSection = ({ t, currentLang }) => {
  // Função para obter texto por idioma
  const getText = (ptText, enText, esText) => {
    if (currentLang === 'en') return enText;
    if (currentLang === 'es') return esText;
    return ptText;
  };

  // Dados dos diferenciais
  const differentials = [
    {
      icon: Heart,
      title: getText("Empatia Real", "Real Empathy", "Empatía Real"),
      description: getText(
        "Anos ouvindo clientes me deram perspectiva única sobre dores reais dos usuários",
        "Years listening to customers gave me unique perspective on real user pain points",
        "Años escuchando clientes me dieron perspectiva única sobre dolores reales de usuarios"
      ),
      color: "#66fcf1"
    },
    {
      icon: Brain,
      title: getText("Pensamento Analítico", "Analytical Thinking", "Pensamiento Analítico"),
      description: getText(
        "Experiência em análise de dados e riscos que aplico nas decisões de produto",
        "Experience in data and risk analysis that I apply to product decisions",
        "Experiencia en análisis de datos y riesgos que aplico en decisiones de producto"
      ),
      color: "#14b8a6"
    },
    {
      icon: Eye,
      title: getText("Visão Operacional", "Operational Vision", "Visión Operacional"),
      description: getText(
        "Entendo processos e pessoas - essencial para facilitar equipes eficazes",
        "I understand processes and people - essential for facilitating effective teams",
        "Entiendo procesos y personas - esencial para facilitar equipos efectivos"
      ),
      color: "#9333ea"
    },
    {
      icon: Zap,
      title: getText("Agilidade Prática", "Practical Agility", "Agilidad Práctica"),
      description: getText(
        "PO com experiência em Scrum real, preparada para facilitar times como SM",
        "PO with real Scrum experience, prepared to facilitate teams as SM",
        "PO con experiencia en Scrum real, preparada para facilitar equipos como SM"
      ),
      color: "#f59e0b"
    }
  ];

  // Dados dos idiomas
  const languages = [
    {
      code: 'pt',
      name: getText('Português', 'Portuguese', 'Portugués'),
      level: getText('Nativo', 'Native', 'Nativo'),
      flag: '🇧🇷',
      color: '#66fcf1'
    },
    {
      code: 'en',
      name: getText('Inglês', 'English', 'Inglés'),
      level: getText('Intermediário+', 'Intermediate+', 'Intermedio+'),
      flag: '🇺🇸',
      color: '#14b8a6'
    },
    {
      code: 'es',
      name: getText('Espanhol', 'Spanish', 'Español'),
      level: getText('Intermediário', 'Intermediate', 'Intermedio'),
      flag: '🇪🇸',
      color: '#9333ea'
    }
  ];

  return (
    <section 
      id="about" 
      style={{
        padding: '80px 0',
        position: 'relative',
        zIndex: 10,
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #2d1b69 100%)',
        color: '#ffffff',
        minHeight: '100vh'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '700', 
            background: 'linear-gradient(135deg, #66fcf1 0%, #14b8a6 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            marginBottom: '20px'
          }}>
            {getText(
              "Meus diferenciais",
              "My differentials",
              "Mis diferenciales"
            )}
          </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#a1a1aa', 
            maxWidth: '600px', 
            margin: '0 auto' 
          }}>
            {getText(
              "Product Owner com experiência diversificada. Minha jornada começou ouvindo clientes reais, evoluiu analisando dados e riscos, até encontrar meu propósito facilitando equipes e produtos.",
              "Product Owner with diverse experience. My journey started listening to real customers, evolved analyzing data and risks, until finding my purpose facilitating teams and products.",
              "Product Owner con experiencia diversificada. Mi viaje comenzó escuchando clientes reales, evolucionó analizando datos y riesgos, hasta encontrar mi propósito facilitando equipos y productos."
            )}
          </p>
        </div>

        {/* Diferenciais */}
        <div style={{ marginBottom: '80px' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)', 
            gap: '25px',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {differentials.map((diff, index) => {
              const Icon = diff.icon;
              return (
                <div 
                  key={index}
                  style={{
                    background: 'rgba(15, 15, 35, 0.8)',
                    border: `1px solid ${diff.color}40`,
                    borderRadius: '16px',
                    padding: '30px',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-5px)';
                    e.target.style.boxShadow = `0 10px 30px ${diff.color}20`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: `linear-gradient(135deg, ${diff.color} 0%, ${diff.color}99 100%)`,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}>
                    <Icon size={28} color="#000" />
                  </div>
                  <h3 style={{ 
                    fontSize: '1.3rem', 
                    fontWeight: '700', 
                    color: diff.color, 
                    marginBottom: '12px' 
                  }}>
                    {diff.title}
                  </h3>
                  <p style={{ 
                    color: '#d1d5db', 
                    lineHeight: '1.6',
                    fontSize: '0.95rem'
                  }}>
                    {diff.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Idiomas */}
        <div style={{ marginBottom: '80px' }}>
          <h3 style={{ 
            fontSize: '2rem', 
            fontWeight: '700', 
            color: '#66fcf1', 
            textAlign: 'center', 
            marginBottom: '40px' 
          }}>
            {getText("Idiomas", "Languages", "Idiomas")}
          </h3>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '20px', 
            flexWrap: 'wrap' 
          }}>
            {languages.map((lang, index) => (
              <div 
                key={index}
                style={{
                  background: `${lang.color}10`,
                  border: `2px solid ${lang.color}40`,
                  borderRadius: '12px',
                  padding: '20px',
                  textAlign: 'center',
                  minWidth: '140px',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>
                  {lang.flag}
                </div>
                <h4 style={{ 
                  color: lang.color, 
                  fontSize: '1.1rem', 
                  fontWeight: '600', 
                  marginBottom: '5px' 
                }}>
                  {lang.name}
                </h4>
                <span style={{
                  background: `${lang.color}20`,
                  color: lang.color,
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: '500'
                }}>
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Crescimento */}
        <div style={{
          background: 'rgba(102, 252, 241, 0.1)',
          border: '1px solid rgba(102, 252, 241, 0.2)',
          borderRadius: '16px',
          padding: '40px',
          textAlign: 'center'
        }}>
          <h3 style={{ 
            fontSize: '1.5rem', 
            fontWeight: '700', 
            color: '#66fcf1', 
            marginBottom: '20px' 
          }}>
            {getText(
              "🚀 Em constante evolução",
              "🚀 Constantly evolving",
              "🚀 En constante evolución"
            )}
          </h3>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '30px', 
            flexWrap: 'wrap',
            marginBottom: '20px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                background: 'rgba(147, 51, 234, 0.2)',
                border: '1px solid rgba(147, 51, 234, 0.4)',
                borderRadius: '12px',
                padding: '15px',
                marginBottom: '10px'
              }}>
                <span style={{ fontSize: '1.5rem' }}>🎯</span>
              </div>
              <p style={{ color: '#9333ea', fontWeight: '600', fontSize: '0.9rem' }}>
                {getText(
                  "Certificação Scrum.org",
                  "Scrum.org Certification",
                  "Certificación Scrum.org"
                )}
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                background: 'rgba(20, 184, 166, 0.2)',
                border: '1px solid rgba(20, 184, 166, 0.4)',
                borderRadius: '12px',
                padding: '15px',
                marginBottom: '10px'
              }}>
                <span style={{ fontSize: '1.5rem' }}>🗣️</span>
              </div>
              <p style={{ color: '#14b8a6', fontWeight: '600', fontSize: '0.9rem' }}>
                {getText(
                  "Aprimorando Inglês",
                  "Improving English",
                  "Mejorando Inglés"
                )}
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                background: 'rgba(102, 252, 241, 0.2)',
                border: '1px solid rgba(102, 252, 241, 0.4)',
                borderRadius: '12px',
                padding: '15px',
                marginBottom: '10px'
              }}>
                <span style={{ fontSize: '1.5rem' }}>📚</span>
              </div>
              <p style={{ color: '#66fcf1', fontWeight: '600', fontSize: '0.9rem' }}>
                {getText(
                  "Scrum Master Skills",
                  "Scrum Master Skills",
                  "Habilidades Scrum Master"
                )}
              </p>
            </div>
          </div>
          <p style={{ 
            color: '#d1d5db', 
            fontSize: '1rem',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            {getText(
              "Investindo continuamente em conhecimento para me tornar uma Scrum Master ainda mais eficaz.",
              "Continuously investing in knowledge to become an even more effective Scrum Master.",
              "Invirtiendo continuamente en conocimiento para convertirme en una Scrum Master aún más efectiva."
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;