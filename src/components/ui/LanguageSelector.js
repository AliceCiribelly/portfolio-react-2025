import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const LanguageSelector = ({ currentLang, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const languages = [
    { code: 'pt', flag: '🇧🇷', name: 'PT' },
    { code: 'en', flag: '🇺🇸', name: 'EN' },
    { code: 'es', flag: '🇪🇸', name: 'ES' }
  ];

  const currentLanguage = languages.find(lang => lang.code === currentLang);

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      zIndex: 1000,
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: '12px',
      padding: '8px',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div style={{ position: 'relative' }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'none',
            border: 'none',
            color: '#ffffff',
            cursor: 'pointer',
            padding: '8px 12px',
            borderRadius: '8px',
            fontSize: '14px',
            transition: 'all 0.3s ease'
          }}
        >
          <span style={{ fontSize: '16px' }}>{currentLanguage?.flag}</span>
          <span style={{ fontWeight: '500' }}>{currentLanguage?.name}</span>
          <ChevronDown 
            size={16} 
            style={{ 
              transition: 'transform 0.2s',
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
            }} 
          />
        </button>
        
        {isOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            right: '0',
            marginTop: '8px',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            overflow: 'hidden',
            minWidth: '80px'
          }}>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  onLanguageChange(lang.code);
                  setIsOpen(false);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  width: '100%',
                  padding: '12px 16px',
                  background: currentLang === lang.code ? 'rgba(102, 252, 241, 0.2)' : 'transparent',
                  border: 'none',
                  color: currentLang === lang.code ? '#66fcf1' : '#ffffff',
                  cursor: 'pointer',
                  fontSize: '14px',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  if (currentLang !== lang.code) {
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentLang !== lang.code) {
                    e.target.style.background = 'transparent';
                  }
                }}
              >
                <span style={{ fontSize: '16px' }}>{lang.flag}</span>
                <span style={{ fontWeight: '500' }}>{lang.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;