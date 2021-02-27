import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

function setDirection(direction) {
  document.body.setAttribute('dir', direction);
  document.documentElement.setAttribute('lang', i18n.language);
  document.getElementById('root').style.textAlign =
    direction === 'rtl' ? 'right' : 'left';
}

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('lng', lng);
  if (lng === 'ar') {
    setDirection('rtl');
  } else {
    setDirection('ltr');
  }
});

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: 'en',
  debug: true,
});

export default i18n;
