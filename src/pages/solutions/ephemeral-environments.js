import React from 'react';
import Layout from '@theme/Layout';

const BoltIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
);

export default function EphemeralEnvironments() {
    return (
        <Layout title="Phoenix / Ephemeral Environments" description="On-demand environments that spin up per branch or PR and auto-destroy">
            <section className="hero-section">
                <div className="hero-inner">
                    <span className="hero-badge"><BoltIcon /> Solution</span>
                    <h1 className="hero-title">Phoenix / Ephemeral Environments</h1>
                    <p className="hero-subtitle">
                        On-demand environments that spin up per branch or PR and auto-destroy
                    </p>
                </div>
            </section>
        </Layout>
    );
}
