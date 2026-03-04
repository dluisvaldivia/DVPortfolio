import { FaHome } from "react-icons/fa";
import { useNavigate, useLocation, Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useTranslation } from 'react-i18next';
import { CircleFlag } from 'react-circle-flags';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNav = (section: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(section), 300);
    } else {
      scrollToSection(section);
    }
  };

  const isEnglish = i18n.language.startsWith('en');

  const toggleLanguage = () => {
    i18n.changeLanguage(isEnglish ? 'es' : 'en');
  };

  return (
    <nav className="flex w-full items-center bg-bg shadow-sm sticky top-0 z-50">
      <button
        className="nav-item flex items-center gap-2 font-semibold"
        onClick={toggleLanguage}
        title={isEnglish ? 'Switch to Spanish' : 'Switch to English'}
      >
        <span style={{ display: 'inline-flex', width: '16px', height: '16px', flexShrink: 0 }}>
          <CircleFlag countryCode={isEnglish ? 'es' : 'gb'} />
        </span>
        <span className="text-sm">{isEnglish ? 'ES' : 'EN'}</span>
      </button>
      <button className="nav-item" onClick={() => handleNav("projects")}>
        {t('nav.projects')}
      </button>
      <button className="nav-item" onClick={() => handleNav("contact")}>
        {t('nav.contact')}
      </button>
      <Link to="/free-tools/accessibility-checker" className="nav-item" onClick={() => window.scrollTo(0, 0)}>
        {t('nav.accessibility_check')}
      </Link>
      <Link to="/rates" className="nav-item" onClick={() => window.scrollTo(0, 0)}>
        {t('nav.rates')}
      </Link>
      <Link to="/" className="nav-item" onClick={() => window.scrollTo(0, 0)}>
        <FaHome style={{ fontSize: '1.5rem', marginBottom: '-4px' }} />
      </Link>
      <ThemeToggle />
    </nav>
  );
}
