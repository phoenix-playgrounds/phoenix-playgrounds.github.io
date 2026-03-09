import React from 'react';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';

const UsersIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
);

export default function Multiplayer() {
    return (
        <Layout
            title={translate({ id: 'plans.multiplayer.layout.title', message: 'Multiplayer Plan' })}
            description={translate({ id: 'plans.multiplayer.layout.description', message: 'Full multiplayer environments for teams and collaboration.' })}
        >
            <section className="placeholder-section">
                <div className="placeholder-inner">
                    <span className="hero-badge">
                        <UsersIcon />
                        <Translate id="plans.multiplayer.badge">Multiplayer</Translate>
                    </span>
                    <h1 className="hero-title">
                        <Translate id="plans.multiplayer.title.line1">Build</Translate>{' '}
                        <span className="accent">
                            <Translate id="plans.multiplayer.title.accent">together</Translate>
                        </span>
                    </h1>
                    <p className="hero-subtitle">
                        <Translate id="plans.multiplayer.subtitle">
                            Full multiplayer environments where your entire team can collaborate in real-time.
                        </Translate>
                    </p>
                    <div className="placeholder-card">
                        <p className="placeholder-card-desc">
                            <Translate id="plans.multiplayer.card.desc">
                                Multiplayer plan details coming soon. Get started today with our beta access.
                            </Translate>
                        </p>
                        <a className="hero-cta" href="https://my.playgrounds.dev">
                            <Translate id="plans.multiplayer.cta">Get Started →</Translate>
                        </a>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
