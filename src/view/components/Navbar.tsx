import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { CircleFlag } from 'react-circle-flags';
import { FaHome } from "react-icons/fa";

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
        <span style={{ display: 'inline-flex', width: '16px', height: '16px', flexShrink: 0 }}>
          <CircleFlag countryCode={isEnglish ? 'gb' : 'es'} />
        </span>
        <span>{isEnglish ? 'EN' : 'ES'}</span>
      </button>
    </nav>
  );
}
