import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { FaHome } from "react-icons/fa";
import enFlag from '../../assets/EN.png';
import esFlag from '../../assets/SP.png';

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const isEnglish = i18n.language.startsWith('en');
  const toggleLanguage = () => i18n.changeLanguage(isEnglish ? 'es' : 'en');

  return (
    <nav className="nav-wrapper flex w-full items-center">
      <Link to="/" className="nav-item" onClick={() => window.scrollTo(0, 0)}>
        <FaHome style={{ fontSize: '1.25rem' }} />
      </Link>

      <Link to="/free-tools/accessibility-checker" className="nav-item" onClick={() => window.scrollTo(0, 0)}>
        {t('nav.accessibility_check')}
      </Link>
      <Link to="/rates" className="nav-item" onClick={() => window.scrollTo(0, 0)}>
        {t('nav.rates')}
      </Link>

      <button
        className="nav-item flex items-center gap-2"
        onClick={toggleLanguage}
        title={isEnglish ? 'Switch to Spanish' : 'Switch to English'}
      >
        <img
          src={isEnglish ? enFlag : esFlag}
          alt={isEnglish ? 'English' : 'Spanish'}
          style={{ width: '20px', height: '20px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
        />
        <span>{isEnglish ? 'EN' : 'ES'}</span>
      </button>
    </nav>
  );
}
