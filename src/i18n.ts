// i18n.js o i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "key": "hello world",
        
      }
    },
    
  },
  lng: "en", 
  fallbackLng: "en",
  interpolation: {
    escapeValue: false 
  }
});

export default i18n;
