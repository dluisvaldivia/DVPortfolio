import { useState } from 'react';

const AccessibilityChecker = () => {
    const [url, setUrl] = useState('');
    const [report, setReport] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleCheck = async () => {
        if (!url) return;

        setLoading(true);
        setError(null);
        setReport(null);

        const apiKey = import.meta.env.VITE_WAVE_API_KEY;
        const apiUrl = `https://wave.webaim.org/api/request?key=${apiKey}&url=${encodeURIComponent(url)}&reporttype=2`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (data.status?.success === false) {
                setError(data.status.error || "An error occurred");
            } else {
                setReport(data);
            }
        } catch (err) {
            setError("Failed to fetch report. Please check the URL and try again. (CORS might be an issue if running locally without a proxy)");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const scrollToSection = (id: string) => {
        const el = document.getElementById(`section-${id}`);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const colors: any = {
        error: "border-red-500 text-red-500 hover:bg-red-500/20",
        contrast: "border-orange-500 text-orange-500 hover:bg-orange-500/20",
        alert: "border-yellow-500 text-yellow-500 hover:bg-yellow-500/20",
        feature: "border-green-500 text-green-500 hover:bg-green-500/20",
        structure: "border-blue-500 text-blue-500 hover:bg-blue-500/20",
        aria: "border-purple-500 text-purple-500 hover:bg-purple-500/20"
    };

    const sectionAccent: any = {
        error: "text-red-400",
        contrast: "text-orange-400",
        alert: "text-yellow-400",
        feature: "text-green-400",
        structure: "text-blue-400",
        aria: "text-purple-400"
    };

    return (
        <div className="accessibility-checker-container">
            <h1>Accessibility Checker</h1>
            <div className="ac-input-group">
                <input
                    type="text"
                    placeholder="https://example.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
                />
                <button className="button-primary" onClick={handleCheck} disabled={loading}>
                    {loading ? "Checking..." : "Check the accessibility of your site"}
                </button>
            </div>

            {/* Loading Spinner */}
            {loading && (
                <div className="flex flex-col items-center justify-center mt-12 gap-4 text-text">
                    <div className="w-14 h-14 rounded-full border-4 border-gray-700 border-t-accent animate-spin"></div>
                    <p className="text-lg text-gray-400 animate-pulse">Scanning accessibility…</p>
                </div>
            )}

            {error && <div className="ac-error-message">{error}</div>}

            {report && report.categories && (
                <div className="mt-8 w-full max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6 text-center text-text">Report for: <span className="font-normal text-accent">{url}</span></h2>

                    {/* High Level Summary Grid — clickable, anchors to section */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                        {Object.entries(report.categories).map(([key, category]: [string, any]) => {
                            const colorClass = colors[key] || "border-gray-500 text-gray-500 hover:bg-gray-500/20";
                            const hasItems = category.items && Object.keys(category.items).length > 0;

                            return (
                                <button
                                    key={key}
                                    onClick={() => hasItems && scrollToSection(key)}
                                    disabled={!hasItems}
                                    title={hasItems ? `Jump to ${key} details` : `No ${key} items found`}
                                    className={`border p-6 rounded-xl flex flex-col items-center justify-center text-center shadow-sm transition-all duration-200 bg-[#111827] ${colorClass} ${hasItems ? 'cursor-pointer' : 'opacity-60 cursor-default'}`}
                                >
                                    <h4 className="text-lg font-bold capitalize mb-2">{key.replace('_', ' ')}</h4>
                                    <p className="text-4xl font-black">{category.count || 0}</p>
                                    {hasItems && <span className="text-xs mt-2 opacity-70">↓ See details</span>}
                                </button>
                            );
                        })}
                    </div>

                    <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">Detailed Breakdown</h3>

                    {/* Detailed Issues List */}
                    <div className="space-y-6">
                        {Object.entries(report.categories).map(([catKey, category]: [string, any]) => {
                            if (!category.items || Object.keys(category.items).length === 0) return null;
                            const accent = sectionAccent[catKey] || "text-gray-300";

                            return (
                                <div id={`section-${catKey}`} key={catKey} className="bg-[#111827] border border-gray-700 rounded-lg p-5 shadow-sm scroll-mt-20">
                                    <h4 className={`text-lg font-bold capitalize mb-4 flex items-center ${accent}`}>
                                        <span className="w-2 h-2 rounded-full bg-current mr-2"></span>
                                        {catKey.replace('_', ' ')} Issues ({category.count})
                                    </h4>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {Object.entries(category.items).map(([itemKey, item]: [string, any]) => (
                                            <div key={itemKey} className="border border-gray-700 rounded p-4 bg-gray-900/60">
                                                <div className="flex justify-between items-start mb-2">
                                                    <strong className="text-gray-100 text-sm font-mono">{item.id || itemKey.replace(/_/g, ' ')}</strong>
                                                    <span className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded font-mono ml-2 shrink-0">×{item.count}</span>
                                                </div>
                                                <p className="text-sm text-gray-400">{item.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* WhatsApp CTA */}
                    <div className="flex flex-col items-center mt-10 mb-4">
                        <button
                            className="whatsapp-button"
                            onClick={() => {
                                const cats = report.categories;
                                const summary = Object.entries(cats)
                                    .map(([k, v]: [string, any]) => `${v.count} ${k}`)
                                    .join(', ');
                                const message = `Hi Danny! I just scanned ${url} with your Accessibility Checker. The report returned: ${summary}. Can you help me improve it?`;
                                window.open(`https://wa.me/34615193280?text=${encodeURIComponent(message)}`, '_blank');
                            }}
                        >
                            <img
                                src="/src/assets/icons8-whatsapp.svg"
                                alt="WhatsApp"
                                style={{ width: '32px', height: '32px', marginRight: '15px' }}
                            />
                            See how I can help you
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AccessibilityChecker;
