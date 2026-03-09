import React from 'react';
import Layout from '@theme/Layout';

const CpuIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M15 2v2" /><path d="M15 20v2" /><path d="M2 15h2" /><path d="M2 9h2" /><path d="M20 15h2" /><path d="M20 9h2" /><path d="M9 2v2" /><path d="M9 20v2" /></svg>
);

export default function AgentEnvironments() {
    return (
        <Layout title="Agent Environments" description="Isolated runtime sandboxes for AI agents and autonomous workflows">
            <section className="hero-section">
                <div className="hero-inner">
                    <span className="hero-badge"><CpuIcon /> Solution</span>
                    <h1 className="hero-title">Agent Environments</h1>
                    <p className="hero-subtitle">
                        Isolated runtime sandboxes for AI agents and autonomous workflows
                    </p>
                </div>
            </section>
        </Layout>
    );
}
