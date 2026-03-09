import React from 'react';
import Layout from '@theme/Layout';

const ZapIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" /></svg>
);

export default function VibeCoding() {
    return (
        <Layout title="Vibe Coding on Steroids" description="Supercharge your development flow with instant cloud playgrounds">
            <section className="hero-section">
                <div className="hero-inner">
                    <span className="hero-badge"><ZapIcon /> Solution</span>
                    <h1 className="hero-title">Vibe Coding on Steroids</h1>
                    <p className="hero-subtitle">
                        Supercharge your development flow with instant cloud playgrounds
                    </p>
                </div>
            </section>
        </Layout>
    );
}
