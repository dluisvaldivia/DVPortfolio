import React, { useEffect, useState } from 'react';
import CardsList from '../components/cardList';
import linkedinIcon from '../../assets/linkedin.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import calendlyIcon from '../../assets/calendly.svg';
import { useTranslation } from 'react-i18next';

declare global {
  interface Window {
    Calendly: any;
  }
}

export default function Home() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.getAttribute('data-theme') || 'light'
  );
  const { t } = useTranslation();

  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/dluis-valdivia/30min',
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        window.Calendly.closePopupWidget();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Watch for theme changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      setTheme(current);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  const githubIcon = theme === 'dark' ? githubDark : githubLight;

  return (
    <div className='p-8 mx-auto w-full max-w-[1600px]'>
      <div className='bg-[#111827] text-white rounded-xl shadow-xl p-12 mb-10 text-center border-b-4' style={{ borderColor: 'var(--color-accent)' }}>
        <h1 className='text-5xl md:text-7xl font-bold mb-4 tracking-tight'>{t('hero.name')}</h1>
        <h2 className='text-2xl md:text-3xl font-light tracking-wide text-gray-300'>{t('hero.tagline1')}</h2>
        <p className='mt-3 text-lg text-gray-400'>{t('hero.tagline2')}</p>
      </div>

      <div className='flex justify-center'>
        <div className='w-full md:w-3/4 lg:w-4/5 mb-10 text-lg leading-relaxed text-left'>
          <ul className='space-y-6 list-none p-0'>
            <li className='flex items-start'>
              <span className='mr-3 text-accent font-bold mt-1'>&#10140;</span>
              <div>
                <strong className='text-xl text-text block mb-1'>{t('about.reducing_friction_title')}</strong>
                {t('about.reducing_friction_desc')}
              </div>
            </li>
            <li className='flex items-start'>
              <span className='mr-3 text-accent font-bold mt-1'>&#10140;</span>
              <div>
                <strong className='text-xl text-text block mb-1'>{t('about.universal_design_title')}</strong>
                {t('about.universal_design_desc')}
              </div>
            </li>
            <li className='flex items-start'>
              <span className='mr-3 text-accent font-bold mt-1'>&#10140;</span>
              <div>
                <strong className='text-xl text-text block mb-1'>{t('about.strategic_optimization_title')}</strong>
                {t('about.strategic_optimization_desc')}
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className='text-start mt-3'>
        <h2 id="projects">{t('headings.projects')}</h2>
        <CardsList />
      </div>

      <div className='text-start mt-3'>

        {/* CONTACT ME SECTION*/}
        <div className='mb-2 mt-5'>
          <h2 id="contact">{t('headings.contact')}</h2>
        </div>
        <div className="flex justify-center">
          <div className="w-full md:w-1/2">
            <form target="_blank" action="https://formsubmit.co/dluis.valdivia@gmail.com" method="POST">
              <div className="mb-4">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <input
                      type="text" name="name"
                      className="w-full p-3 border rounded-lg border-gray-600 bg-[#111827] text-text placeholder:text-gray-500 focus:outline-none focus:border-accent transition-colors"
                      placeholder="Your Name" required
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      type="email" name="email"
                      className="w-full p-3 border rounded-lg border-gray-600 bg-[#111827] text-text placeholder:text-gray-500 focus:outline-none focus:border-accent transition-colors"
                      placeholder="Email Address" required
                    />
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Your Message"
                  className="w-full p-3 border rounded-lg border-gray-600 bg-[#111827] text-text placeholder:text-gray-500 focus:outline-none focus:border-accent transition-colors"
                  name="message" rows={8} required
                ></textarea>
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-lg text-black font-bold transition-all duration-300 hover:brightness-110"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                >
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* SOCIAL LINKS */}
        <div className="mt-12 mb-8">
          <h3 className="text-center text-xl font-semibold text-gray-400 mb-8">or find me on</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/dannyvaldivia/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Danny's LinkedIn"
              className="flex items-center gap-4 bg-bg border border-gray-700 hover:border-accent rounded-xl px-6 py-4 transition-all duration-200 hover:shadow-lg min-w-[180px]"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="w-9 h-9 shrink-0" />
              <div>
                <p className="font-bold text-text">LinkedIn</p>
                <p className="text-xs text-gray-500">Professional profile</p>
              </div>
            </a>

            <a
              href="https://github.com/dluisvaldivia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Danny's GitHub"
              className="flex items-center gap-4 bg-bg border border-gray-700 hover:border-accent rounded-xl px-6 py-4 transition-all duration-200 hover:shadow-lg min-w-[180px]"
            >
              <img src={githubIcon} alt="GitHub" className="w-9 h-9 shrink-0" />
              <div>
                <p className="font-bold text-text">GitHub</p>
                <p className="text-xs text-gray-500">Open source work</p>
              </div>
            </a>

            <a
              href="https://calendly.com/dluis-valdivia/30min"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Schedule time with Danny on Calendly"
              className="flex items-center gap-4 bg-bg border border-gray-700 hover:border-accent rounded-xl px-6 py-4 transition-all duration-200 hover:shadow-lg min-w-[180px]"
              onClick={openCalendly}
            >
              <img src={calendlyIcon} alt="Calendly" className="w-9 h-9 shrink-0" />
              <div>
                <p className="font-bold text-text">Calendly</p>
                <p className="text-xs text-gray-500">Book a 30-min call</p>
              </div>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
