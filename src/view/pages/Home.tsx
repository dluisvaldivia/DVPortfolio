import React, { useEffect, useState } from 'react';
import CardsList from '../components/cardList';
import linkedinIcon from '../../assets/linkedin.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import calendlyIcon from '../../assets/calendly.svg';

declare global {
  interface Window {
    Calendly: any;
  }
}

export default function Home() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.getAttribute('data-theme') || 'light'
  );

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
    <div className='p-8 mx-auto max-w-7xl'>

      <div className='flex flex-wrap mt-3 mb-2'>
        <div className='w-full text-center md:w-full sm:w-1/2'>
          <h1>ValdiviaMedia</h1>
          <h2>Full Stack Developer</h2>
        </div>
      </div>

      <div className='flex justify-center'>
        <div className='w-full md:w-2/3 mb-3'>
          <p>
            Frontend Developer dedicated to crafting <b>intuitive</b>,{' '}
            <strong>accessible</strong>, and <b>
              <abbr title="Web Content Accessibility Guidelines">
                WCAG<span className="sr-only"> (Web Content Accessibility Guidelines)</span>
              </abbr> /
              <abbr title="European Accessibility Act">
                EAA<span className="sr-only"> (European Accessibility Act)</span>
              </abbr>
            </b>-compliant web applications.

            I simplify complex systems to enhance user experience, ensuring technology
            is inclusive for all. Passionate about staying up-to-date of industry trends,
            I design interfaces that are both functional and user-friendly.
          </p>
        </div>
      </div>

      <div className='text-start mt-3'>
        <h2 id="projects">Projects</h2>
        <CardsList />
      </div>

      <div className='text-start mt-3'>

        {/* CONTACT ME SECTION*/}
        <div className='mb-2 mt-5'>
          <h2 id="contact">Contact me</h2>
        </div>
        <div className="flex justify-center">
          <div className="w-full md:w-1/2">
            <form target="_blank" action="https://formsubmit.co/dluis.valdivia@gmail.com" method="POST">
              <div className="mb-4">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <input type="text" name="name" className="w-full p-2 border rounded border-gray-300 text-black" placeholder="Your Name" required />
                  </div>
                  <div className="flex-1">
                    <input type="email" name="email" className="w-full p-2 border rounded border-gray-300 text-black" placeholder="Email Address" required />
                  </div>
                </div>
              </div>
              <div className="mb-4 text-center">
                <textarea placeholder="Your Message" className="w-full p-2 border rounded border-gray-300 text-black" name="message" rows={10} required></textarea>
              </div>
              <div className="mb-4 text-center">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded text-white font-bold transition-all duration-300 hover:brightness-110"
                  style={{ backgroundColor: 'var(--color-accent)', borderColor: 'var(--color-accent)' }}
                >
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-5 mb-3">
          <h3> or find me on:  </h3>
        </div>
        <a
          href='https://www.linkedin.com/in/dannyvaldivia/'
          target='blank'
          aria-label="new-tab-link to danny's linkedin"
          className="text-center block"
        >
          <img className='w-40 h-auto mb-4 mx-auto' src={linkedinIcon} alt='Linkedin Icon' />
          <h5>LinkedIn</h5>
        </a>


        <a href='https://github.com/dluisvaldivia'
          target='blank'
          aria-label="new-tab-link to danny's Github"
          className="text-center block"
        ><img src={githubIcon} alt='github icon' className='w-40 h-auto mb-4 mx-auto' />
          <h5>Github</h5>
        </a>

        <div className="text-center my-3">
          <h5>Schedule time with me:</h5>
        </div>

        <a
          href='https://calendly.com/dluis-valdivia/30min'
          target='blank'
          aria-label="new-tab-link to danny's calendly"
          className="text-center block"
          onClick={openCalendly}>
          <img src={calendlyIcon} alt='Calendly icon' className='w-40 h-auto mb-4 mx-auto' />
          <h5>Calendly</h5>
        </a>

      </div>
    </div>
  );
}
