import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation strings
const resources = {
    en: {
        translation: {
            "nav": {
                "projects": "Projects",
                "contact": "Contact",
                "accessibility_check": "Accessibility Check",
                "rates": "Rates"
            },
            "hero": {
                "name": "Danny Valdivia",
                "tagline1": "Simple. Intuitive. Effective.",
                "tagline2": "Simplifying complex structures for humans."
            },
            "about": {
                "reducing_friction_title": "Reducing Friction",
                "reducing_friction_desc": "Translating complex business logic into intuitive, high-performance digital systems.",
                "universal_design_title": "Universal Design",
                "universal_design_desc": "Specialist capability in architecting WCAG/EAA-compliant systems for products requiring high-stakes inclusivity and universal reach.",
                "strategic_optimization_title": "Strategic Optimization",
                "strategic_optimization_desc": "Trimming technical and process \"noise\" to maximize project efficacy and team velocity."
            },
            "headings": {
                "projects": "Projects",
                "contact": "Contact me"
            }
        }
    },
    es: {
        translation: {
            "nav": {
                "projects": "Proyectos",
                "contact": "Contacto",
                "accessibility_check": "Revisión de Accesibilidad",
                "rates": "Tarifas"
            },
            "hero": {
                "name": "Danny Valdivia",
                "tagline1": "Simple. Intuitivo. Efectivo.",
                "tagline2": "Simplificando estructuras complejas para humanos."
            },
            "about": {
                "reducing_friction_title": "Reduciendo la Fricción",
                "reducing_friction_desc": "Traduciendo lógica de negocio compleja en sistemas digitales intuitivos y de alto rendimiento.",
                "universal_design_title": "Diseño Universal",
                "universal_design_desc": "Capacidad especialista en la arquitectura de sistemas compatibles con WCAG/EAA para productos que requieren alta inclusión y alcance universal.",
                "strategic_optimization_title": "Optimización Estratégica",
                "strategic_optimization_desc": "Eliminando el \"ruido\" técnico y de procesos para maximizar la eficacia del proyecto y la velocidad del equipo."
            },
            "headings": {
                "projects": "Proyectos",
                "contact": "Contáctame"
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // react already safes from xss
        }
    });

export default i18n;
