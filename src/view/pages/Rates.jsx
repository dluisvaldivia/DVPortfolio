import React, { useState } from 'react';

export default function Rates() {
    const [basePrice, setBasePrice] = useState(150); // Default base price
    const [extras, setExtras] = useState([]);

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

    const toggleExtra = (extra) => {
        setExtras((prevExtras) =>
            prevExtras.includes(extra)
                ? prevExtras.filter((e) => e !== extra)
                : [...prevExtras, extra]
        );
    };

    const calculateTotal = () => {
        const extrasTotal = extras.reduce((sum, extra) => sum + extra.price, 0);
        return basePrice + extrasTotal;
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-8">
                    <h1>Need a site?</h1>
                    <h2>Select a Base Package:</h2>
                    <div className="col">
                        <button
                            className={`tier-button my-3 me-3 ${basePrice === 150 ? 'checked' : ''}`}
                            onClick={() => setBasePrice(150)}
                        >
                            🧱 Basic Site
                        </button>
                        <button
                            className={`tier-button my-3 me-3 ${basePrice === 200 ? 'checked' : ''}`}
                            onClick={() => setBasePrice(200)}
                        >
                            ♿ Accessible-Friendly Site
                        </button>
                        <button
                            className={`tier-button my-3 me-3 ${basePrice === 300 ? 'checked' : ''}`}
                            onClick={() => setBasePrice(300)}
                        >
                            🚀 Full Package
                        </button>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Add Extras:</h3>
                    <div className="col">
                        {extraOptions.map((extra, index) => (
                            <button
                                key={index}
                                className={`rate-button me-2 mb-2 ${extras.includes(extra) ? 'checked' : ''}`}
                                onClick={() => toggleExtra(extra)}
                            >
                                <span>{`${extra.label} +€${extra.price}`}</span>
                            </button>
                        ))}
                    </div>
                    <div className="text-end me-5 mt-5" id="total-result">
                        <strong>Total: €{calculateTotal()}</strong>
                    </div>
                    <div className="col mb-5">
                        <button
                            className="btn btn-primary"
                            onClick={() => window.alert('Contact form coming soon!')}
                        >
                            Get in contact with me
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}