import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import CardsList from '../components/cardList';
import linkedinIcon from '../../assets/linkedin.svg';
import githubIcon from '../../assets/github-light.svg';
import calendlyIcon from '../../assets/calendly.svg';
import { useTranslation } from 'react-i18next';
import laptopBg from '../../assets/image-of-laptop-screen-with-computer-code.webp';
import DataGridHero from '../../components/data-grid-hero';

declare global {
  interface Window { Calendly: any; }
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/dannyvaldivia/',
    label: "Danny's LinkedIn",
    icon: linkedinIcon,
    alt: 'LinkedIn',
    title: 'LinkedIn',
    sub: 'Professional profile',
  },
  {
    href: 'https://github.com/dluisvaldivia',
    label: "Danny's GitHub",
    icon: githubIcon,
    alt: 'GitHub',
    title: 'GitHub',
    sub: 'Open source work',
  },
  {
    href: 'https://calendly.com/dluis-valdivia/30min',
    label: 'Schedule time with Danny',
    icon: calendlyIcon,
    alt: 'Calendly',
    title: 'Calendly',
    sub: 'Book a 30-min call',
    isCalendly: true,
  },
];

export default function Home() {
  const { t } = useTranslation();

  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    window.Calendly.initPopupWidget({ url: 'https://calendly.com/dluis-valdivia/30min' });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') window.Calendly.closePopupWidget();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="px-4 md:px-8 py-8 mx-auto w-full max-w-[1400px]" style={{ position: 'relative', zIndex: 1 }}>

      {/* ── HERO ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-14"
        style={{ borderRadius: '6px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)' }}
      >
        <DataGridHero
          rows={22}
          cols={40}
          spacing={3}
          duration={5.0}
          color="#00674F"
          animationType="pulse"
          pulseEffect={true}
          mouseGlow={true}
          opacityMin={0.05}
          opacityMax={0.55}
          background="#0a0a0f"
        >
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="h1hero gradient-text font-bold tracking-tight mb-5 text-left w-fit mx-10 px-10"
            style={{ fontFamily: "'Zen Dots', sans-serif", textTransform: 'uppercase' }}
          >
            {t('hero.name')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl font-light mb-3"
            style={{ color: '#ffffff' }}
          >
            {t('hero.tagline1')}
          </motion.p>

        </DataGridHero>
      </motion.div>

      <div className="shimmer-line mb-14" />

      {/* ── PROJECTS ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="mb-14 relative overflow-hidden"
        style={{ borderRadius: '6px' }}
      >
        <div
          aria-hidden
          style={{
            backgroundImage: `url(${laptopBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(8px) brightness(0.12) saturate(0.4)',
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            transform: 'scale(1.05)',
          }}
        />
        <div
          aria-hidden
          style={{
            position: 'absolute', inset: 0, zIndex: 1,
            background: 'linear-gradient(135deg, rgba(0,103,79,0.07) 0%, rgba(34,34,247,0.05) 100%)',
          }}
        />
        <div className="relative z-10 p-4 sm:p-6 md:p-8">
          <motion.h2
            variants={fadeUp}
            id="projects"
            className="text-white mb-2"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            {t('headings.projects')}
          </motion.h2>
          <div className="shimmer-line mb-6" />
          <CardsList />
        </div>
      </motion.section>

      <div className="shimmer-line mb-14" />

      {/* ── CONTACT ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="mb-8"
      >
        <motion.h2
          variants={fadeUp}
          id="contact"
          className="text-white mb-2"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
        >
          {t('headings.contact')}
        </motion.h2>
        <div className="shimmer-line mb-10" />

        <div className="flex justify-center">
          <motion.div variants={fadeUp} custom={1} className="w-full md:w-[560px]">
            <form target="_blank" action="https://formsubmit.co/dluis.valdivia@gmail.com" method="POST">
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <label htmlFor="contact-name" className="sr-only">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  style={{
                    flex: 1, padding: '12px 16px', borderRadius: '4px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.09)',
                    color: '#e8e8f0', outline: 'none',
                  }}
                  onFocus={e => { e.currentTarget.style.borderColor = '#00674F'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,103,79,0.15)'; }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)'; e.currentTarget.style.boxShadow = 'none'; }}
                />
                <label htmlFor="contact-email" className="sr-only">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  style={{
                    flex: 1, padding: '12px 16px', borderRadius: '4px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.09)',
                    color: '#e8e8f0', outline: 'none',
                  }}
                  onFocus={e => { e.currentTarget.style.borderColor = '#00674F'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,103,79,0.15)'; }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)'; e.currentTarget.style.boxShadow = 'none'; }}
                />
              </div>
              <label htmlFor="contact-message" className="sr-only">Your Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Your Message"
                rows={7}
                required
                style={{
                  width: '100%', padding: '12px 16px', borderRadius: '4px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  color: '#e8e8f0', resize: 'vertical', outline: 'none',
                  marginBottom: '16px',
                }}
                onFocus={e => { e.currentTarget.style.borderColor = '#00674F'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,103,79,0.15)'; }}
                onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)'; e.currentTarget.style.boxShadow = 'none'; }}
              />
              <button
                type="submit"
                className="w-full py-3 px-4 font-semibold text-sm uppercase tracking-widest transition-all duration-200"
                style={{
                  background: 'linear-gradient(135deg, #00674F, #2222F7)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  boxShadow: '0 0 30px rgba(0,103,79,0.3)',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 40px rgba(34,34,247,0.45)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 30px rgba(0,103,79,0.3)'; }}
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* ── SOCIAL LINKS ── */}
        <div className="mt-16 mb-4">
          <p
            className="text-center text-xs uppercase tracking-widest mb-8"
            style={{ color: '#ffffff' }}
          >
            or find me on
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            {socialLinks.map((s, i) => (
              <motion.a
                key={s.title}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                onClick={s.isCalendly ? openCalendly : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.45, ease: 'easeOut' }}
                className="flex items-center gap-4 px-6 py-4 w-full sm:w-auto sm:min-w-[180px]"
                style={{
                  background: '#111118',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(0,103,79,0.7)';
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 0 1px rgba(0,103,79,0.15), 0 4px 24px rgba(0,103,79,0.12)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.1)';
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
                }}
              >
                <img src={s.icon} alt={s.alt} className="w-9 h-9 shrink-0" />
                <div>
                  <p className="font-bold text-white text-sm">{s.title}</p>
                  <p className="text-xs" style={{ color: 'rgba(232,232,240,0.45)' }}>{s.sub}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
