import React from 'react';
import Layout from '@theme/Layout';

const WrenchIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
);

export default function InternalTools() {
    return (
        <Layout title="Internal Tools" description="Host internal dashboards, admin panels, and back-office tooling">
            <section className="hero-section">
                <div className="hero-inner">
                    <span className="hero-badge"><WrenchIcon /> Solution</span>
                    <h1 className="hero-title">Internal Tools</h1>
                    <p className="hero-subtitle">
                        Host internal dashboards, admin panels, and back-office tooling
                    </p>
                </div>
            </section>
        </Layout>
    );
}
