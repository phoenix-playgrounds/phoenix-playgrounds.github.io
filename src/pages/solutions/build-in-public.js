import React from 'react';
import Layout from '@theme/Layout';

const RadioIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.87" /><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" /><circle cx="12" cy="20" r="2" /><path d="M12 14v4" /><path d="M20.5 7.28a16 16 0 0 0-17 0" /><path d="M12 2v3" /></svg>
);

export default function BuildInPublic() {
    return (
        <Layout title="Build in Public" description="Share live progress with your audience as you build">
            <section className="hero-section">
                <div className="hero-inner">
                    <span className="hero-badge"><RadioIcon /> Solution</span>
                    <h1 className="hero-title">Build in Public</h1>
                    <p className="hero-subtitle">
                        Share live progress with your audience as you build
                    </p>
                </div>
            </section>
        </Layout>
    );
}
