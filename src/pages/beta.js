import React from 'react';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';

const SparkleIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l3.09 8.26L24 9.27l-6.91 5.52L19.18 24 12 18.9 4.82 24l2.09-9.21L0 9.27l8.91-1.01L12 0z" /></svg>
);

const InboxIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12" /><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" /></svg>
);

const KeyIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" /></svg>
);

function BetaHero() {
    return (
        <section className="beta-section">
            <div className="beta-inner">
                <span className="hero-badge">
                    <SparkleIcon />
                    <Translate id="beta.badge">Early Access</Translate>
                </span>
                <h1 className="hero-title">
                    <Translate id="beta.title.line1">Be the first to</Translate>{' '}
                    <span className="accent">
                        <Translate id="beta.title.accent">experience it</Translate>
                    </span>
                </h1>
                <p className="hero-subtitle">
                    <Translate id="beta.subtitle">
                        Playgrounds.dev is launching soon. Subscribe to get notified when
                        we go live, or reach out directly for early beta access.
                    </Translate>
                </p>

                <div className="beta-cards">
                    <div className="beta-card">
                        <div className="beta-card-icon"><InboxIcon /></div>
                        <h2 className="beta-card-title">
                            <Translate id="beta.subscribe.title">Stay in the loop</Translate>
                        </h2>
                        <p className="beta-card-desc">
                            <Translate id="beta.subscribe.desc">
                                Get a one-time email when we launch. No spam, ever.
                            </Translate>
                        </p>
                        <form
                            action="https://buttondown.com/api/emails/embed-subscribe/playgrounds.dev"
                            method="post"
                            className="beta-form"
                            referrerPolicy="unsafe-url"
                        >
                            <input
                                type="email"
                                name="email"
                                id="bd-email"
                                placeholder={translate({ id: 'beta.email.placeholder', message: 'your@email.com' })}
                                className="beta-input"
                                required
                            />
                            <button type="submit" className="beta-submit">
                                <Translate id="beta.email.submit">Subscribe</Translate>
                            </button>
                        </form>
                    </div>

                    <div className="beta-divider">
                        <span className="beta-divider-text">
                            <Translate id="beta.divider">or</Translate>
                        </span>
                    </div>

                    <div className="beta-card">
                        <div className="beta-card-icon"><KeyIcon /></div>
                        <h2 className="beta-card-title">
                            <Translate id="beta.access.title">Request beta access</Translate>
                        </h2>
                        <p className="beta-card-desc">
                            <Translate id="beta.access.desc">
                                Want to start building now? Drop us a line and tell us about
                                your use case.
                            </Translate>
                        </p>
                        <a href="mailto:beta@playgrounds.dev" className="hero-cta beta-email-cta">
                            beta@playgrounds.dev <span className="beta-arrow">→</span>
                        </a>
                    </div>
                </div>

                <p className="beta-footnote">
                    <a href="https://buttondown.com/refer/playgrounds.dev" target="_blank" rel="noopener noreferrer">
                        <Translate id="beta.powered">Powered by Buttondown</Translate>
                    </a>
                </p>
            </div>
        </section>
    );
}

export default function Beta() {
    return (
        <Layout
            title={translate({ id: 'beta.layout.title', message: 'Beta — Early Access' })}
            description={translate({ id: 'beta.layout.description', message: 'Subscribe for launch updates or request early beta access to Playgrounds.dev.' })}
        >
            <BetaHero />
        </Layout>
    );
}
