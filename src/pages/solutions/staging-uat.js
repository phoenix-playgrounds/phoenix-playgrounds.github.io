import React from 'react';
import Layout from '@theme/Layout';

const FlaskIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h6" /><path d="M10 9V3" /><path d="M14 9V3" /><path d="M7.5 21h9" /><path d="M5.2 21a2 2 0 0 1-.8-3.5L10 12V9h4v3l5.6 5.5a2 2 0 0 1-.8 3.5" /></svg>
);

export default function StagingUat() {
    return (
        <Layout title="Staging / UAT Environment" description="Spin up isolated staging environments for QA and acceptance testing">
            <section className="hero-section">
                <div className="hero-inner">
                    <span className="hero-badge"><FlaskIcon /> Solution</span>
                    <h1 className="hero-title">Staging / UAT Environment</h1>
                    <p className="hero-subtitle">
                        Spin up isolated staging environments for QA and acceptance testing
                    </p>
                </div>
            </section>
        </Layout>
    );
}
