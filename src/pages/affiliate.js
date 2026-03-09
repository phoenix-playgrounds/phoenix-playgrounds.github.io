import React from 'react';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';

const HandshakeIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 17a1 1 0 0 1-1 1H6l-4 4V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6" /><path d="M14 9h2a2 2 0 0 1 2 2v1l3-3 4 4-3 3h-1a2 2 0 0 1-2 2h-6" /></svg>
);

export default function Affiliate() {
    return (
        <Layout
            title={translate({ id: 'affiliate.layout.title', message: 'Affiliate Program' })}
            description={translate({ id: 'affiliate.layout.description', message: 'Earn commissions by referring developers to Playgrounds.dev. Join our affiliate program today.' })}
        >
            <section className="placeholder-section">
                <div className="placeholder-inner">
                    <span className="hero-badge">
                        <HandshakeIcon />
                        <Translate id="affiliate.badge">Affiliate</Translate>
                    </span>
                    <h1 className="hero-title">
                        <Translate id="affiliate.title.line1">Earn by</Translate>{' '}
                        <span className="accent">
                            <Translate id="affiliate.title.accent">sharing</Translate>
                        </span>
                    </h1>
                    <p className="hero-subtitle">
                        <Translate id="affiliate.subtitle">
                            Love Playgrounds.dev? Refer developers and earn commissions on every subscription. It's that simple.
                        </Translate>
                    </p>
                    <div className="placeholder-card">
                        <p className="placeholder-card-desc">
                            <Translate id="affiliate.card.desc">
                                Affiliate program details and commission structure coming soon. Get started today with our beta access.
                            </Translate>
                        </p>
                        <a className="hero-cta" href="https://my.playgrounds.dev">
                            <Translate id="affiliate.cta">Get Started →</Translate>
                        </a>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
