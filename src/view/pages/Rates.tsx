import React, { useState } from 'react';
import whatsappIcon from '../../assets/icons8-whatsapp.svg';

export default function Rates() {
  const [basePrice, setBasePrice] = useState(150); // Default base price
  const [extras, setExtras] = useState<any[]>([]); // Track selected extras
  const [lockedExtras, setLockedExtras] = useState<any[]>([]); // Track locked extras

  const basePackages = [
    {
      price: 150,
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
      price: 200,
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

  // Handle selecting a base package
  const selectBasePackage = (price: number) => {
    setBasePrice(price);

    // Reset extras and lock specific ones based on the selected package
    if (price === 150) {
      setExtras([]); // Unselect all extras
      setLockedExtras([]); // No locked extras
    } else if (price === 200) {
      setExtras([
        { label: '🧑‍🦯 WCAG Deep Audit', price: 80 },
        { label: 'Accessibility Statement', price: 20 },
      ]);
      setLockedExtras([
        { label: '🧑‍🦯 WCAG Deep Audit', price: 80 },
        { label: 'Accessibility Statement', price: 20 },
      ]);
    } else if (price === 300) {
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

  // Handle toggling extras
  const toggleExtra = (extra: any) => {
    // Prevent toggling locked extras
    if (lockedExtras.some((e) => e.label === extra.label)) {
      return;
    }

    setExtras((prevExtras) => {
      const isSelected = prevExtras.some((e) => e.label === extra.label);
      if (isSelected) {
        return prevExtras.filter((e) => e.label !== extra.label);
      } else {
        return [...prevExtras, extra];
      }
    });
  };

  // Calculate the total price
  const calculateTotal = () => {
    const extrasTotal = extras.reduce((sum, extra) => sum + extra.price, 0);
    return basePrice + extrasTotal;
  };

  // Get the description of the selected base package
  const selectedPackage = basePackages.find((pkg) => pkg.price === basePrice);

  return (
    <div className="rates-container">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-2/3 mx-auto">

          <h1>Need a site?</h1>

          <h3>Select a Base Package:</h3>

          <div className="flex flex-row flex-wrap gap-3">
            {basePackages.map((pkg) => (
              <button
                key={pkg.price}
                className={`tier-button my-3 me-3 ${basePrice === pkg.price ? 'checked' : ''}`}
                onClick={() => selectBasePackage(pkg.price)}
              >
                {pkg.label}
              </button>
            ))}
          </div>

          {/* Description Box */}
          <div className="description-box">
            <h5>Selected Package:</h5>
            <p>
              {selectedPackage?.description.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line.trim()}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>


          <h3 className="text-xl font-semibold mb-2 mt-4">Add Extras:</h3>
          <div className="flex flex-wrap">
            {extraOptions.map((extra, index) => (
              <button
                key={index}
                className={`rate-button mr-2 mb-2 ${extras.some((e) => e.label === extra.label) ? 'checked' : ''
                  } ${lockedExtras.some((e) => e.label === extra.label) ? 'locked' : ''}`}
                onClick={() => toggleExtra(extra)}
                disabled={lockedExtras.some((e) => e.label === extra.label)} // Disable locked extras
              >
                <span>{`${extra.label} +€${extra.price}`}</span>
              </button>
            ))}
          </div>
          <div id="floating-total" className="text-right mr-5 mt-5">
            <strong>Total: €{calculateTotal()}</strong>
          </div>
          <div className="flex flex-col mb-5">
            <button
              className="whatsapp-button mt-5"
              onClick={() => {
                // @ts-ignore
                const stripEmojis = (text) => text.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, '').trim();
                const cleanLabel = selectedPackage ? stripEmojis(selectedPackage.label) : '';
                const extrasList = extras.map((e) => stripEmojis(e.label)).join(', ') || 'No extras selected';
                const message = `Hi Danny! I'm interested in your ${cleanLabel}. Selected extras: ${extrasList}. Total price: €${calculateTotal()}.`;

                const whatsappURL = `https://wa.me/34615193280?text=${encodeURIComponent(message)}`;
                window.open(whatsappURL, '_blank');
              }}
            >
              <img
                src={whatsappIcon}
                alt="WhatsApp Icon"
                style={{ width: '32px', height: '32px', marginRight: '15px' }} // Increased icon size
              />
              Get in contact with me through WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}