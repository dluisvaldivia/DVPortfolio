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

    return (
        <div className="accessibility-checker-container">
            <h1>Accessibility Checker</h1>
            <div className="ac-input-group">
                <input
                    type="text"
                    placeholder="https://example.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
                <button className="button-primary" onClick={handleCheck} disabled={loading}>
                    {loading ? "Checking..." : "Check the accessibility of your site"}
                </button>
            </div>

            {error && <div className="ac-error-message">{error}</div>}

            {report && (
                <div className="report-results">
                    <h2>Report for: {url}</h2>
                    <div className="ac-summary-cards">
                        <div className="ac-card error">
                            <h4>Errors</h4>
                            <p>{report.categories?.error?.count || 0}</p>
                        </div>
                        <div className="ac-card alert">
                            <h4>Alerts</h4>
                            <p>{report.categories?.alert?.count || 0}</p>
                        </div>
                        <div className="ac-card contrast">
                            <h4>Contrast Errors</h4>
                            <p>{report.categories?.contrast?.count || 0}</p>
                        </div>
                        <div className="ac-card feature">
                            <h4>Features</h4>
                            <p>{report.categories?.feature?.count || 0}</p>
                        </div>
                    </div>
                    {/* Detailed results could go here, for now just summary */}
                    <div className="ac-detailed-json">
                        <details>
                            <summary>View Raw Report JSON</summary>
                            <pre>{JSON.stringify(report, null, 2)}</pre>
                        </details>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AccessibilityChecker;
