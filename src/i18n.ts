import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';

// Definir la estructura de los recursos de traducción
interface TranslationResources {
  [language: string]: {
    translation: {
      [key: string]: string;
    };
  };
}

// Definir los recursos con tipado
const resources: TranslationResources = {
  en: {
    translation: {
      colorpicker: "Color Picker",
      presentacion: "Presentation",
      googlemaps: "Geocerca",
      homepage: "Home Page",
    }
  },
  es: {
    translation: {
      colorpicker: "Selector de Color",
      presentacion: "Presentación",
      googlemaps: "Geocerca",
      homepage: "Página bienvenida",
    }
  }
};

// Configuración tipada para i18next
const i18nConfig: InitOptions = {
  resources,
  lng: 'es', // idioma por defecto
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false, // react ya se encarga de la escapación
  }
};

// Inicializar i18next
i18n
  .use(initReactI18next)
  .init(i18nConfig)
  .catch((error) => {
    console.error('Error inicializando i18n:', error);
  });

export default i18n;