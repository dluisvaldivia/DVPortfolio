import React, { useEffect, useState } from 'react';
import CardsList from '../components/cardList';
import linkedinIcon from '../../assets/linkedin.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import calendlyIcon from '../../assets/calendly.svg';

export default function Home() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.getAttribute('data-theme') || 'light'
  );

  const openCalendly = (e) => {
    e.preventDefault();
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/dluis-valdivia/30min',
    });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
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
    <div className='container'>

      <div className='row mt-3 mb-2'>
        <div className='col-md-12 col-sm-6 text-center'>
          <h1>ValdiviaMedia</h1>
          <h2>Full Stack Developer</h2>
        </div>
      </div>

      <div className='row justify-content-center'>
        <div className='col col-md-8 mb-3'>
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

      <div className='row text-start mt-3'>
        <h2 id="projects">Projects</h2>
        <CardsList />
      </div>

      <div className='row text-start mt-3'>

        {/* CONTACT ME SECTION*/}
        <div className='mb-2 mt-5'>
          <h2 id="contact">Contact me</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form target="_blank" action="https://formsubmit.co/dluis.valdivia@gmail.com" method="POST">
              <div className="form-group">
                <div className="form-row">
                  <div className="col">
                    <input type="text" name="name" className="form-control my-2" placeholder="Your Name" required />
                  </div>
                  <div className="col">
                    <input type="email" name="email" className="form-control my-2" placeholder="Email Address" required />
                  </div>
                </div>
              </div>
              <div className="form-group text-center">
                <textarea placeholder="Your Message" className="form-control my-2" name="message" rows="10" required></textarea>
              </div>
              <div className="form-group text-center">
                <button
                  type="submit"
                  className="btn btn-lg btn-dark btn-block"
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
          className="text-center d-block"
        >
          <img className='custom-icons' src={linkedinIcon} alt='Linkedin Icon' />
          <h5>LinkedIn</h5>
        </a>


        <a href='https://github.com/dluisvaldivia'
          target='blank'
          aria-label="new-tab-link to danny's Github"
          className="text-center d-block"
        ><img src={githubIcon} alt='github icon' className='custom-icons' />
          <h5>LinkedIn</h5>
        </a>

        <div className="text-center my-3">
          <h5>Schedule time with me:</h5>
        </div>

        <a
          href='https://calendly.com/dluis-valdivia/30min'
          target='blank'
          aria-label="new-tab-link to danny's calendly"
          className="text-center d-block">
          <img src={calendlyIcon} alt='Calendly icon' className='custom-icons' />
          <h5>Calendly</h5>
        </a>

      </div>
    </div>
  );
}
