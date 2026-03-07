import React from 'react';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';

export default function PlansMultiplayer() {
    return (
        <Layout
            title={translate({ id: 'plans.multiplayer.layout.title', message: 'Multiplayer Plan' })}
            description={translate({ id: 'plans.multiplayer.layout.description', message: 'Collaborate in real-time with shared cloud environments for your entire team.' })}
        >
            <section className="placeholder-section">
                <div className="placeholder-inner">
                    <span className="hero-badge">
                        <Translate id="plans.multiplayer.badge">👥 Multiplayer</Translate>
                    </span>
                    <h1 className="hero-title">
                        <Translate id="plans.multiplayer.title.line1">Build</Translate>
                        <br />
                        <span className="accent">
                            <Translate id="plans.multiplayer.title.accent">together</Translate>
                        </span>
                    </h1>
                    <p className="hero-subtitle">
                        <Translate id="plans.multiplayer.subtitle">
                            Shared cloud environments for your whole team. Collaborate in real-time, review together, and ship faster.
                        </Translate>
                    </p>
                    <div className="placeholder-card">
                        <p className="placeholder-card-desc">
                            <Translate id="plans.multiplayer.card.desc">
                                Multiplayer plan details and pricing coming soon. Start collaborating with our beta access.
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
