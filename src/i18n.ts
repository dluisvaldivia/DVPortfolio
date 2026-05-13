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
                "tools": "Tools",
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
            },
            "accessibility_checker": {
                "title": "Accessibility Checker",
                "description": "Every website should be usable by everyone — including people who are blind, have low vision, motor difficulties, or rely on a keyboard instead of a mouse. Accessibility issues are often invisible to sighted users, but they can make a site completely unusable for others. This tool scans any public website and shows you exactly what might be blocking people from using it, in plain English — no technical knowledge needed.",
                "why_matters": "Why does it matter? Aside from being the right thing to do, accessibility is now a legal requirement in many countries under laws like the European Accessibility Act (EAA) and the ADA. Fixing these issues improves the experience for all your users, not just those with disabilities."
            }
        }
    },
    es: {
        translation: {
            "nav": {
                "projects": "Proyectos",
                "contact": "Contacto",
                "tools": "Herramientas",
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
            },
            "accessibility_checker": {
                "title": "Comprobador de Accesibilidad",
                "description": "Cualquier sitio web debería poder usarlo cualquier persona — incluyendo personas ciegas, con baja visión, dificultades motoras, o que usan el teclado en lugar del ratón. Los problemas de accesibilidad suelen ser invisibles para los usuarios videntes, pero pueden hacer que un sitio sea completamente inutilizable para otros. Esta herramienta analiza cualquier sitio web público y te muestra exactamente qué podría estar impidiendo que la gente lo use, en un lenguaje sencillo — sin necesidad de conocimientos técnicos.",
                "why_matters": "¿Por qué es importante? Además de ser lo correcto, la accesibilidad es ahora un requisito legal en muchos países bajo leyes como la Ley Europea de Accesibilidad (EAA) y la ADA. Corregir estos problemas mejora la experiencia para todos tus usuarios, no solo para los que tienen discapacidades."
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
