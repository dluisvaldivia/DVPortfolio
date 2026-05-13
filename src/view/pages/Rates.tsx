import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import whatsappIcon from '../../assets/icons8-whatsapp.svg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as any },
  }),
};

export default function Rates() {
  const { t } = useTranslation();
  const [selectedId, setSelectedId] = useState('basic');
  const [extras, setExtras] = useState<any[]>([]);
  const [lockedExtras, setLockedExtras] = useState<any[]>([]);

  const basePackages = [
    { id: 'basic',      price: 250, labelKey: 'rates.packages.basic_label',      descKey: 'rates.packages.basic_desc' },
    { id: 'accessible', price: 250, labelKey: 'rates.packages.accessible_label', descKey: 'rates.packages.accessible_desc' },
    { id: 'full',       price: 300, labelKey: 'rates.packages.full_label',        descKey: 'rates.packages.full_desc' },
  ];

  const extraOptions = [
    { key: 'dark_mode',      price: 50  },
    { key: 'back_to_top',    price: 20  },
    { key: 'wcag_audit',     price: 80  },
    { key: 'cookie_banner',  price: 40  },
    { key: 'legal_pages',    price: 30  },
    { key: 'calendly',       price: 30  },
    { key: 'stripe',         price: 60  },
    { key: 'multilingual',   price: 100 },
    { key: 'email_setup',    price: 50  },
    { key: 'a11y_statement', price: 20  },
  ];

  const selectBasePackage = (id: string) => {
    setSelectedId(id);
    if (id === 'basic') {
      setExtras([]);
      setLockedExtras([]);
    } else if (id === 'accessible') {
      const locked = [
        { key: 'wcag_audit',     price: 80 },
        { key: 'a11y_statement', price: 20 },
      ];
      setExtras(locked);
      setLockedExtras(locked);
    } else if (id === 'full') {
      const locked = [
        { key: 'email_setup',   price: 50 },
        { key: 'cookie_banner', price: 40 },
        { key: 'legal_pages',   price: 30 },
        { key: 'stripe',        price: 60 },
        { key: 'back_to_top',   price: 20 },
      ];
      setExtras(locked);
      setLockedExtras(locked);
    }
  };

  const toggleExtra = (extra: any) => {
    if (lockedExtras.some((e) => e.key === extra.key)) return;
    setExtras((prevExtras) => {
      const isSelected = prevExtras.some((e) => e.key === extra.key);
      return isSelected
        ? prevExtras.filter((e) => e.key !== extra.key)
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
          {t('rates.heading')}
        </motion.h1>
        <div className="shimmer-line mb-10" />

        <motion.h3
          variants={fadeUp}
          custom={1}
          className="text-white mb-4"
          style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}
        >
          {t('rates.select_package')}
        </motion.h3>

        <motion.div variants={fadeUp} custom={2} className="flex flex-row flex-wrap gap-3 mb-6">
          {basePackages.map((pkg) => (
            <button
              key={pkg.id}
              className={`tier-button my-2 ${selectedId === pkg.id ? 'checked' : ''}`}
              onClick={() => selectBasePackage(pkg.id)}
            >
              {t(pkg.labelKey)}
            </button>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} custom={3} className="description-box mb-8">
          <h5>{t('rates.selected_package')}</h5>
          <p>
            {selectedPackage && t(selectedPackage.descKey).split('\n').map((line, index) => (
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
            {t('rates.add_extras')}
          </motion.h3>
          <div className="shimmer-line mb-5" />
          <motion.div variants={fadeUp} custom={1} className="flex flex-wrap gap-2">
            {extraOptions.map((extra) => (
              <button
                key={extra.key}
                className={`rate-button ${extras.some((e) => e.key === extra.key) ? 'checked' : ''} ${lockedExtras.some((e) => e.key === extra.key) ? 'locked' : ''}`}
                onClick={() => toggleExtra(extra)}
                disabled={lockedExtras.some((e) => e.key === extra.key)}
              >
                <span>{`${t(`rates.extras.${extra.key}`)} +€${extra.price}`}</span>
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
              const stripEmojis = (text: string) => text.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, '').trim();
              const cleanLabel = selectedPackage ? stripEmojis(t(selectedPackage.labelKey)) : '';
              const extrasList = extras.map((e) => stripEmojis(t(`rates.extras.${e.key}`))).join(', ') || t('rates.no_extras');
              const message = t('rates.whatsapp_message', { package: cleanLabel, extras: extrasList, total: calculateTotal() });
              window.open(`https://wa.me/34615193280?text=${encodeURIComponent(message)}`, '_blank');
            }}
          >
            <img src={whatsappIcon} alt="WhatsApp Icon" style={{ width: '32px', height: '32px', marginRight: '15px' }} />
            {t('rates.whatsapp_cta')}
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
