import React from 'react';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';

const UserIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
);

export default function Single() {
    return (
        <Layout
            title={translate({ id: 'plans.single.layout.title', message: 'Single Player Plan' })}
            description={translate({ id: 'plans.single.layout.description', message: 'A dedicated environment for solo developers.' })}
        >
            <section className="placeholder-section">
                <div className="placeholder-inner">
                    <span className="hero-badge">
                        <UserIcon />
                        <Translate id="plans.single.badge">Single Player</Translate>
                    </span>
                    <h1 className="hero-title">
                        <Translate id="plans.single.title.line1">Your own</Translate>{' '}
                        <span className="accent">
                            <Translate id="plans.single.title.accent">playground</Translate>
                        </span>
                    </h1>
                    <p className="hero-subtitle">
                        <Translate id="plans.single.subtitle">
                            A dedicated environment for solo developers. Build, experiment, and ship — on your own terms.
                        </Translate>
                    </p>
                    <div className="placeholder-card">
                        <p className="placeholder-card-desc">
                            <Translate id="plans.single.card.desc">
                                Single player plan details coming soon. Get started today with our beta access.
                            </Translate>
                        </p>
                        <a className="hero-cta" href="https://my.playgrounds.dev">
                            <Translate id="plans.single.cta">Get Started →</Translate>
                        </a>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
