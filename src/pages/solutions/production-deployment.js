import React from 'react';
import Layout from '@theme/Layout';

const GlobeIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
);

export default function ProductionDeployment() {
    return (
        <Layout title="Production Deployment" description="Deploy and run production workloads with Playgrounds">
            <section className="hero-section">
                <div className="hero-inner">
                    <span className="hero-badge"><GlobeIcon /> Solution</span>
                    <h1 className="hero-title">Production Deployment</h1>
                    <p className="hero-subtitle">
                        Run production-grade workloads in isolated, fully-built Docker environments
                    </p>
                </div>
            </section>
            <section className="content-section">
                <div className="content-inner">
                    <h2>How Production Services Work</h2>
                    <p>
                        When a dynamic service is toggled to <strong>Production mode</strong>, Playgrounds builds a Docker
                        image from your Dockerfile at Playground creation time and runs your service from that image — no
                        source code mounting, no browser IDE.
                    </p>
                    <p>
                        This gives you a stable, reproducible environment that mirrors what you ship, ideal for front-end
                        services with build steps, compiled languages, or CI/CD validation.
                    </p>

                    <h2>Updates Require Manual Re-creation</h2>
                    <p>
                        Production services are <strong>pinned to the image built at creation time</strong>. Pushing new
                        commits to the branch does <em>not</em> automatically trigger a rebuild or restart. To pick up new
                        code you must manually re-create the Playground (destroy and re-provision, or use the Recreate
                        action in the UI).
                    </p>
                    <p>
                        This is by design — production environments should be predictable and only change when you
                        explicitly decide to update them.
                    </p>

                    <h2>Use Cases</h2>
                    <ul>
                        <li>Front-end services requiring a build step (React, Next.js, Vue)</li>
                        <li>Services with long compilation times (Go, Rust, JVM languages)</li>
                        <li>Simulating a production-like deployment for QA or stakeholder demos</li>
                        <li>CI/CD validation — verifying that the built image starts and responds correctly</li>
                    </ul>
                </div>
            </section>
        </Layout>
    );
}
