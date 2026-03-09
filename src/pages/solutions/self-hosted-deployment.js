import React from 'react';
import Layout from '@theme/Layout';

const HomeIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
);

export default function SelfHostedDeployment() {
    return (
        <Layout title="Self-Hosted Software Deployment" description="Give customers one-click self-hosted deployments of your product">
            <section className="hero-section">
                <div className="hero-inner">
                    <span className="hero-badge"><HomeIcon /> Solution</span>
                    <h1 className="hero-title">Self-Hosted Software Deployment</h1>
                    <p className="hero-subtitle">
                        Give customers one-click self-hosted deployments of your product
                    </p>
                </div>
            </section>
        </Layout>
    );
}
