import React from 'react';
import { Calendar, Building2, TrendingUp, Target, CheckCircle } from 'lucide-react';

const ExperienceSection = ({ t, currentLang }) => {
  // Função para obter textos por idioma
  const getText = (ptText, enText, esText) => {
    if (currentLang === 'en') return enText;
    if (currentLang === 'es') return esText;
    return ptText;
  };

  // Dados das experiências em português
  const experiencesPT = [
    {
      period: "Jul 2023 - Abr 2024",
      company: "Construmarket",
      role: "Product Owner",
      type: "evolucao",
      description: "Liderança completa do produto B2B no setor de construção civil. Desenvolvi roadmaps estratégicos alinhados aos objetivos da empresa, gerenciei backlog end-to-end e facilitei comunicação entre stakeholders técnicos e de negócio.",
      skills: ["Product Strategy", "User Stories", "Azure DevOps", "Discovery", "Stakeholder Management", "Roadmapping"],
      learnings: "Aqui consolidei minha visão estratégica de produto e habilidades de facilitação que são essenciais para um Scrum Master."
    },
    {
      period: "Out 2021 - Jul 2023",
      company: "Construmarket",
      role: "Consultora de Implantação",
      type: "crescimento",
      description: "Responsável pela implantação de soluções B2B, atuando como ponte entre necessidades do cliente e capacidades técnicas. Gerenciei projetos de transformação digital e conduzi treinamentos para equipes clientes.",
      skills: ["Project Management", "Client Training", "Process Mapping", "Digital Transformation", "Change Management"],
      learnings: "Aprendi a traduzir necessidades de negócio em soluções práticas, habilidade fundamental para facilitar equipes."
    },
    {
      period: "Mar 2021 - Out 2021",
      company: "Teknisa",
      role: "Consultora de Implantação",
      type: "tecnico",
      description: "Consultoria técnica especializada em implantação de sistemas ERP. Conduzi análises de processos de negócio e desenvolvi documentações técnicas para customizações de software.",
      skills: ["Business Analysis", "ERP Systems", "Process Analysis", "Technical Documentation", "Requirements Gathering"],
      learnings: "Desenvolvi forte capacidade analítica e compreensão de processos empresariais complexos."
    },
    {
      period: "Mai 2019 - Fev 2021",
      company: "Ingresse",
      role: "Analista (Evolução: Atendimento → Riscos → Vendas)",
      type: "evolucao",
      description: "Evolução conquistada através de 3 funções: iniciando no atendimento ao cliente, passando para análise de riscos e finalizando em vendas. Esta progressão me deu visão 360° do negócio e compreensão profunda da jornada do cliente.",
      skills: ["Customer Journey", "Risk Analysis", "Data Analysis", "Sales Strategy", "User Research", "Customer Success"],
      learnings: "A experiência multifuncional me ensinou a importância da empatia com o usuário e análise baseada em dados - pilares essenciais para facilitar equipes ágeis."
    },
    {
      period: "Out 2018 - Mai 2019",
      company: "Claro Brasil",
      role: "Auditora de Vendas",
      type: "base",
      description: "Responsável por auditoria de processos de vendas, garantindo conformidade e qualidade. Desenvolvi metodologias de controle de qualidade e relatórios de performance para gestão.",
      skills: ["Quality Control", "Process Audit", "Performance Analysis", "Compliance", "Reporting", "KPIs"],
      learnings: "Minha base em auditoria me deu olhar crítico para processos e atenção aos detalhes que hoje aplico na facilitação de equipes."
    }
  ];

  // Dados das experiências em inglês
  const experiencesEN = [
    {
      period: "Jul 2023 - Apr 2024",
      company: "Construmarket",
      role: "Product Owner",
      type: "evolucao",
      description: "Complete B2B product leadership in the construction sector. Developed strategic roadmaps aligned with company objectives, managed end-to-end backlog and facilitated communication between technical and business stakeholders.",
      skills: ["Product Strategy", "User Stories", "Azure DevOps", "Discovery", "Stakeholder Management", "Roadmapping"],
      learnings: "Here I consolidated my strategic product vision and facilitation skills that are essential for a Scrum Master."
    },
    {
      period: "Oct 2021 - Jul 2023",
      company: "Construmarket",
      role: "Implementation Consultant",
      type: "crescimento",
      description: "Responsible for B2B solution implementation, acting as a bridge between client needs and technical capabilities. Managed digital transformation projects and conducted training for client teams.",
      skills: ["Project Management", "Client Training", "Process Mapping", "Digital Transformation", "Change Management"],
      learnings: "Learned to translate business needs into practical solutions, a fundamental skill for facilitating teams."
    },
    {
      period: "Mar 2021 - Oct 2021",
      company: "Teknisa",
      role: "Implementation Consultant",
      type: "tecnico",
      description: "Technical consulting specialized in ERP system implementation. Conducted business process analysis and developed technical documentation for software customizations.",
      skills: ["Business Analysis", "ERP Systems", "Process Analysis", "Technical Documentation", "Requirements Gathering"],
      learnings: "Developed strong analytical capacity and understanding of complex business processes."
    },
    {
      period: "May 2019 - Feb 2021",
      company: "Ingresse",
      role: "Analyst (Evolution: Support → Risk → Sales)",
      type: "evolucao",
      description: "Evolution achieved through 3 roles: starting in customer service, moving to risk analysis and finishing in sales. This progression gave me a 360° business view and deep understanding of the customer journey.",
      skills: ["Customer Journey", "Risk Analysis", "Data Analysis", "Sales Strategy", "User Research", "Customer Success"],
      learnings: "The multifunctional experience taught me the importance of user empathy and data-driven analysis - essential pillars for facilitating agile teams."
    },
    {
      period: "Oct 2018 - May 2019",
      company: "Claro Brasil",
      role: "Sales Auditor",
      type: "base",
      description: "Responsible for sales process auditing, ensuring compliance and quality. Developed quality control methodologies and performance reports for management.",
      skills: ["Quality Control", "Process Audit", "Performance Analysis", "Compliance", "Reporting", "KPIs"],
      learnings: "My background in auditing gave me a critical eye for processes and attention to detail that I now apply in team facilitation."
    }
  ];

  // Dados das experiências em espanhol
  const experiencesES = [
    {
      period: "Jul 2023 - Abr 2024",
      company: "Construmarket",
      role: "Product Owner",
      type: "evolucao",
      description: "Liderazgo completo del producto B2B en el sector de la construcción. Desarrollé roadmaps estratégicos alineados con los objetivos de la empresa, gestioné backlog end-to-end y facilité la comunicación entre stakeholders técnicos y de negocio.",
      skills: ["Product Strategy", "User Stories", "Azure DevOps", "Discovery", "Stakeholder Management", "Roadmapping"],
      learnings: "Aquí consolidé mi visión estratégica del producto y habilidades de facilitación que son esenciales para un Scrum Master."
    },
    {
      period: "Oct 2021 - Jul 2023",
      company: "Construmarket",
      role: "Consultora de Implantación",
      type: "crescimento",
      description: "Responsable de la implementación de soluciones B2B, actuando como puente entre las necesidades del cliente y las capacidades técnicas. Gestioné proyectos de transformación digital y conduje entrenamientos para equipos de clientes.",
      skills: ["Project Management", "Client Training", "Process Mapping", "Digital Transformation", "Change Management"],
      learnings: "Aprendí a traducir necesidades de negocio en soluciones prácticas, habilidad fundamental para facilitar equipos."
    },
    {
      period: "Mar 2021 - Oct 2021",
      company: "Teknisa",
      role: "Consultora de Implantación",
      type: "tecnico",
      description: "Consultoría técnica especializada en implementación de sistemas ERP. Conduje análisis de procesos de negocio y desarrollé documentaciones técnicas para personalizaciones de software.",
      skills: ["Business Analysis", "ERP Systems", "Process Analysis", "Technical Documentation", "Requirements Gathering"],
      learnings: "Desarrollé fuerte capacidad analítica y comprensión de procesos empresariales complejos."
    },
    {
      period: "May 2019 - Feb 2021",
      company: "Ingresse",
      role: "Analista (Evolución: Atención → Riesgos → Ventas)",
      type: "evolucao",
      description: "Evolución conquistada a través de 3 funciones: iniciando en atención al cliente, pasando a análisis de riesgos y finalizando en ventas. Esta progresión me dio visión 360° del negocio y comprensión profunda del customer journey.",
      skills: ["Customer Journey", "Risk Analysis", "Data Analysis", "Sales Strategy", "User Research", "Customer Success"],
      learnings: "La experiencia multifuncional me enseñó la importancia de la empatía con el usuario y análisis basado en datos - pilares esenciales para facilitar equipos ágiles."
    },
    {
      period: "Oct 2018 - May 2019",
      company: "Claro Brasil",
      role: "Auditora de Ventas",
      type: "base",
      description: "Responsable de auditoría de procesos de ventas, garantizando conformidad y calidad. Desarrollé metodologías de control de calidad e informes de performance para gestión.",
      skills: ["Quality Control", "Process Audit", "Performance Analysis", "Compliance", "Reporting", "KPIs"],
      learnings: "Mi base en auditoría me dio una mirada crítica para procesos y atención a los detalles que hoy aplico en la facilitación de equipos."
    }
  ];

  // Selecionar dados baseado no idioma
  const getExperiences = () => {
    if (currentLang === 'en') return experiencesEN;
    if (currentLang === 'es') return experiencesES;
    return experiencesPT;
  };

  const experiences = getExperiences();

  const getTypeColor = (type) => {
    const colors = {
      evolucao: '#66fcf1',
      crescimento: '#14b8a6', 
      tecnico: '#9333ea',
      base: '#6b7280'
    };
    return colors[type] || '#6b7280';
  };

  const getTypeIcon = (type) => {
    const icons = {
      evolucao: TrendingUp,
      crescimento: Target,
      tecnico: Building2,
      base: CheckCircle
    };
    return icons[type] || CheckCircle;
  };

  return (
    <section 
      id="experience" 
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
              "Versatilidade em ação: desafios que me moldaram",
              "Versatility in action: challenges that shaped me", 
              "Versatilidad en acción: desafíos que me moldearon"
            )}
          </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#a1a1aa', 
            maxWidth: '600px', 
            margin: '0 auto' 
          }}>
            {getText(
              "Cada mudança de mercado foi uma escolha consciente de crescimento. Da telecom aos eventos, do varejo à construção civil - adaptabilidade conquistada com coragem e determinação.",
              "Each market change was a conscious choice for growth. From telecom to events, from retail to construction - adaptability achieved with courage and determination.",
              "Cada cambio de mercado fue una elección consciente de crecimiento. De telecom a eventos, del retail a la construcción - adaptabilidad conquistada con coraje y determinación."
            )}
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Linha vertical */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: '0',
            bottom: '0',
            width: '2px',
            background: 'linear-gradient(180deg, #66fcf1 0%, #14b8a6 50%, #9333ea 100%)',
            transform: 'translateX(-50%)',
            zIndex: 1
          }} />

          {experiences.map((exp, index) => {
            const Icon = getTypeIcon(exp.type);
            const isLeft = index % 2 === 0;
            
            return (
              <div 
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '60px',
                  position: 'relative'
                }}
              >
                {/* Ponto na timeline */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '60px',
                  height: '60px',
                  background: `linear-gradient(135deg, ${getTypeColor(exp.type)} 0%, ${getTypeColor(exp.type)}99 100%)`,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                  boxShadow: `0 0 20px ${getTypeColor(exp.type)}40`
                }}>
                  <Icon size={24} color="#000" />
                </div>

                {/* Card da experiência */}
                <div style={{
                  width: '45%',
                  marginLeft: isLeft ? '0' : '55%',
                  background: 'rgba(15, 15, 35, 0.8)',
                  border: `1px solid ${getTypeColor(exp.type)}40`,
                  borderRadius: '12px',
                  padding: '30px',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease'
                }}>
                  {/* Header do card */}
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '10px', 
                      marginBottom: '8px' 
                    }}>
                      <Calendar size={16} color={getTypeColor(exp.type)} />
                      <span style={{ 
                        color: getTypeColor(exp.type), 
                        fontSize: '0.9rem', 
                        fontWeight: '600' 
                      }}>
                        {exp.period}
                      </span>
                    </div>
                    <h3 style={{ 
                      fontSize: '1.4rem', 
                      fontWeight: '700', 
                      color: '#ffffff', 
                      marginBottom: '5px' 
                    }}>
                      {exp.role}
                    </h3>
                    <p style={{ 
                      color: getTypeColor(exp.type), 
                      fontSize: '1.1rem', 
                      fontWeight: '600' 
                    }}>
                      {exp.company}
                    </p>
                  </div>

                  {/* Descrição */}
                  <p style={{ 
                    color: '#d1d5db', 
                    lineHeight: '1.6', 
                    marginBottom: '20px' 
                  }}>
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: '8px' 
                    }}>
                      {exp.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          style={{
                            background: `${getTypeColor(exp.type)}20`,
                            color: getTypeColor(exp.type),
                            padding: '4px 12px',
                            borderRadius: '20px',
                            fontSize: '0.8rem',
                            fontWeight: '500',
                            border: `1px solid ${getTypeColor(exp.type)}40`
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Learning */}
                  <div style={{
                    background: 'rgba(102, 252, 241, 0.1)',
                    border: '1px solid rgba(102, 252, 241, 0.2)',
                    borderRadius: '8px',
                    padding: '15px'
                  }}>
                    <p style={{ 
                      color: '#66fcf1', 
                      fontSize: '0.9rem', 
                      fontStyle: 'italic',
                      margin: '0' 
                    }}>
                      <strong>{getText("💡 Aprendizado:", "💡 Learning:", "💡 Aprendizaje:")}</strong> {exp.learnings}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div style={{ 
          textAlign: 'center', 
          marginTop: '60px',
          padding: '40px',
          background: 'rgba(102, 252, 241, 0.1)',
          border: '1px solid rgba(102, 252, 241, 0.2)',
          borderRadius: '16px'
        }}>
          <h3 style={{ 
            fontSize: '1.5rem', 
            fontWeight: '700', 
            color: '#66fcf1', 
            marginBottom: '15px' 
          }}>
            {getText(
              "Pronta para o próximo capítulo",
              "Ready for the next chapter",
              "Lista para el próximo capítulo"
            )}
          </h3>
          <p style={{ 
            color: '#d1d5db', 
            fontSize: '1.1rem',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            {getText(
              "Uma trajetória que me preparou para facilitar equipes como Scrum Master, unindo empatia, análise e visão estratégica.",
              "A journey that prepared me to facilitate teams as Scrum Master, combining empathy, analysis and strategic vision.",
              "Una trayectoria que me preparó para facilitar equipos como Scrum Master, uniendo empatía, análisis y visión estratégica."
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;