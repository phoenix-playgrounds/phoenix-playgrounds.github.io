import React from 'react';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';

export default function PlansSingle() {
    return (
        <Layout
            title={translate({ id: 'plans.single.layout.title', message: 'Single Player Plan' })}
            description={translate({ id: 'plans.single.layout.description', message: 'A personal playground for solo developers. Build, test, and deploy on your own terms.' })}
        >
            <section className="placeholder-section">
                <div className="placeholder-inner">
                    <span className="hero-badge">
                        <Translate id="plans.single.badge">🧑‍💻 Single Player</Translate>
                    </span>
                    <h1 className="hero-title">
                        <Translate id="plans.single.title.line1">Your personal</Translate>
                        <br />
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
                                Single Player plan details and pricing coming soon. Start building with our beta access.
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
