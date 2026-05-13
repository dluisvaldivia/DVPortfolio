import React, { useState } from 'react';
import { motion } from 'framer-motion';
import whatsappIcon from '../../assets/icons8-whatsapp.svg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as any },
  }),
};

export default function Rates() {
  const [selectedId, setSelectedId] = useState('basic');
  const [extras, setExtras] = useState<any[]>([]);
  const [lockedExtras, setLockedExtras] = useState<any[]>([]);

  const basePackages = [
    {
      id: 'basic',
      price: 250,
      label: '🧱 Basic Site',
      description: `
        - Up to 5 pages (e.g., Home, About, Services, Contact)
        - Mobile-friendly responsive design
        - Clean, professional layout & typography
        - Basic SEO setup (titles, meta descriptions)
        - Contact form with email delivery
        - Includes stock images or your provided photos
        - Basic accessibility best practices (alt text, clear contrast)
      `,
    },
    {
      id: 'accessible',
      price: 250,
      label: '♿ Accessible-Friendly Site',
      description: `
    - A fully-featured website with advanced functionality
    - Integrations for e-commerce, booking, or other services
    - Comprehensive SEO setup
    - Custom design tailored to your brand
    - Advanced accessibility features (WCAG & EAA compliant)
    - WCAG/EAA-approved label displayed on the site
    - Helps avoid fines for non-compliance with the European Accessibility Act (EAA)
    - Learn more about the EAA here: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32019L0882
  `,
    },
    {
      id: 'full',
      price: 300,
      label: '🚀 Full Package',
      description: `
        - A fully-featured website with advanced functionality
        - Integrations for e-commerce, booking, or other services
        - Comprehensive SEO setup
        - Custom design tailored to your brand
        - Advanced accessibility features
      `,
    },
  ];

  const extraOptions = [
    { label: '🌗 Dark/ Light Mode', price: 50 },
    { label: '🔝 Back to Top Button', price: 20 },
    { label: '🧑‍🦯 WCAG Deep Audit', price: 80 },
    { label: '🧾 Cookie Consent Banner', price: 40 },
    { label: '📃 Legal Pages', price: 30 },
    { label: '📅 Calendly Integration', price: 30 },
    { label: '💳 Stripe Setup', price: 60 },
    { label: '🌍 Multilingual Setup', price: 100 },
    { label: '📧 Email Setup Help', price: 50 },
    { label: 'Accessibility Statement', price: 20 },
  ];

  const selectBasePackage = (id: string) => {
    setSelectedId(id);
    if (id === 'basic') {
      setExtras([]);
      setLockedExtras([]);
    } else if (id === 'accessible') {
      setExtras([
        { label: '🧑‍🦯 WCAG Deep Audit', price: 80 },
        { label: 'Accessibility Statement', price: 20 },
      ]);
      setLockedExtras([
        { label: '🧑‍🦯 WCAG Deep Audit', price: 80 },
        { label: 'Accessibility Statement', price: 20 },
      ]);
    } else if (id === 'full') {
      const fullPackageExtras = [
        { label: '📧 Email Setup Help', price: 50 },
        { label: '🧾 Cookie Consent Banner', price: 40 },
        { label: '📃 Legal Pages', price: 30 },
        { label: '💳 Stripe Setup', price: 60 },
        { label: '🔝 Back to Top Button', price: 20 },
      ];
      setExtras(fullPackageExtras);
      setLockedExtras(fullPackageExtras);
    }
  };

  const toggleExtra = (extra: any) => {
    if (lockedExtras.some((e) => e.label === extra.label)) return;
    setExtras((prevExtras) => {
      const isSelected = prevExtras.some((e) => e.label === extra.label);
      return isSelected
        ? prevExtras.filter((e) => e.label !== extra.label)
        : [...prevExtras, extra];
    });
  };

  const selectedPackage = basePackages.find((pkg) => pkg.id === selectedId);
  const calculateTotal = () => extras.reduce((sum, extra) => sum + extra.price, 0) + (selectedPackage?.price ?? 0);

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      {/* Ambient glow */}
      <div
        aria-hidden
        style={{
          position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: -1,
          background: 'radial-gradient(ellipse 60% 40% at 80% 20%, rgba(0,103,79,0.07) 0%, transparent 70%), radial-gradient(ellipse 50% 35% at 20% 80%, rgba(34,34,247,0.06) 0%, transparent 70%)',
        }}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        className="px-4 md:px-8 py-8 mx-auto w-full max-w-[900px]"
      >
        <motion.h1
          variants={fadeUp}
          custom={0}
          className="gradient-text font-black tracking-tight text-center"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.1, marginBottom: '0.5rem' }}
        >
          Need a site?
        </motion.h1>
        <div className="shimmer-line mb-10" />

        <motion.h3
          variants={fadeUp}
          custom={1}
          className="text-white mb-4"
          style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}
        >
          Select a Base Package
        </motion.h3>

        <motion.div variants={fadeUp} custom={2} className="flex flex-row flex-wrap gap-3 mb-6">
          {basePackages.map((pkg) => (
            <button
              key={pkg.id}
              className={`tier-button my-2 ${selectedId === pkg.id ? 'checked' : ''}`}
              onClick={() => selectBasePackage(pkg.id)}
            >
              {pkg.label}
            </button>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} custom={3} className="description-box mb-8">
          <h5>Selected Package:</h5>
          <p>
            {selectedPackage?.description.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line.trim()}
                <br />
              </React.Fragment>
            ))}
          </p>
        </motion.div>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mb-8"
        >
          <motion.h3
            variants={fadeUp}
            custom={0}
            className="text-white mb-4"
            style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}
          >
            Add Extras
          </motion.h3>
          <div className="shimmer-line mb-5" />
          <motion.div variants={fadeUp} custom={1} className="flex flex-wrap gap-2">
            {extraOptions.map((extra, index) => (
              <button
                key={index}
                className={`rate-button ${extras.some((e) => e.label === extra.label) ? 'checked' : ''} ${lockedExtras.some((e) => e.label === extra.label) ? 'locked' : ''}`}
                onClick={() => toggleExtra(extra)}
                disabled={lockedExtras.some((e) => e.label === extra.label)}
              >
                <span>{`${extra.label} +€${extra.price}`}</span>
              </button>
            ))}
          </motion.div>
        </motion.section>

        <div id="floating-total" className="text-right mr-5 mt-5">
          <strong>Total: €{calculateTotal()}</strong>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="flex flex-col items-center mt-8 mb-10"
        >
          <button
            className="whatsapp-button"
            onClick={() => {
              // @ts-ignore
              const stripEmojis = (text) => text.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, '').trim();
              const cleanLabel = selectedPackage ? stripEmojis(selectedPackage.label) : '';
              const extrasList = extras.map((e) => stripEmojis(e.label)).join(', ') || 'No extras selected';
              const message = `Hi Danny! I'm interested in your ${cleanLabel}. Selected extras: ${extrasList}. Total price: €${calculateTotal()}.`;
              window.open(`https://wa.me/34615193280?text=${encodeURIComponent(message)}`, '_blank');
            }}
          >
            <img src={whatsappIcon} alt="WhatsApp Icon" style={{ width: '32px', height: '32px', marginRight: '15px' }} />
            Get in contact with me through WhatsApp
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
