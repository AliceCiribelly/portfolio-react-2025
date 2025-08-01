import React, { useState } from 'react';
import './App.css';
import AnimatedBackground from './components/ui/AnimatedBackground';
import LanguageSelector from './components/ui/LanguageSelector';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import { translations } from './data/translations';

function App() {
  const [currentLang, setCurrentLang] = useState('pt');
  const t = translations[currentLang];

  return (
    <div className="App">
      <AnimatedBackground />
      <LanguageSelector 
        currentLang={currentLang} 
        onLanguageChange={setCurrentLang} 
      />
      
      <main style={{ position: 'relative', zIndex: 10 }}>
        <HeroSection t={t} currentLang={currentLang} />
        <AboutSection t={t} currentLang={currentLang} />
      </main>
    </div>
  );
}

export default App;