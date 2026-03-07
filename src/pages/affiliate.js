import React from 'react';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';

export default function Affiliate() {
    return (
        <Layout
            title={translate({ id: 'affiliate.layout.title', message: 'Affiliate Program' })}
            description={translate({ id: 'affiliate.layout.description', message: 'Earn commissions by referring developers to Playgrounds.dev. Join our affiliate program today.' })}
        >
            <section className="placeholder-section">
                <div className="placeholder-inner">
                    <span className="hero-badge">
                        <Translate id="affiliate.badge">🤝 Affiliate</Translate>
                    </span>
                    <h1 className="hero-title">
                        <Translate id="affiliate.title.line1">Earn by</Translate>
                        <br />
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
