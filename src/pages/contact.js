import React from 'react';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';

const channels = [
    {
        icon: '💬',
        titleId: 'contact.slack.title',
        titleDefault: 'Slack Community',
        descId: 'contact.slack.desc',
        descDefault: 'Join our Slack workspace to chat with the team and other developers.',
        linkText: 'Join Slack →',
        linkTextId: 'contact.slack.link',
        href: '#',
    },
    {
        icon: '📧',
        titleId: 'contact.email.title',
        titleDefault: 'Email Support',
        descId: 'contact.email.desc',
        descDefault: 'Reach out to our support team directly via email.',
        linkText: 'support@playgrounds.dev →',
        linkTextId: 'contact.email.link',
        href: 'mailto:support@playgrounds.dev',
    },
    {
        icon: '📞',
        titleId: 'contact.phone.title',
        titleDefault: 'Phone',
        descId: 'contact.phone.desc',
        descDefault: 'Prefer to talk? Give us a call during business hours.',
        linkText: '+1 (555) 000-0000 →',
        linkTextId: 'contact.phone.link',
        href: 'tel:+15550000000',
    },
];

export default function Contact() {
    return (
        <Layout
            title={translate({ id: 'contact.layout.title', message: 'Contact Us' })}
            description={translate({ id: 'contact.layout.description', message: 'Get in touch with the Playgrounds.dev team via Slack, email, or phone.' })}
        >
            <section className="placeholder-section">
                <div className="placeholder-inner">
                    <span className="hero-badge">
                        <Translate id="contact.badge">✉️ Contact</Translate>
                    </span>
                    <h1 className="hero-title">
                        <Translate id="contact.title.line1">Get in</Translate>
                        <br />
                        <span className="accent">
                            <Translate id="contact.title.accent">touch</Translate>
                        </span>
                    </h1>
                    <p className="hero-subtitle">
                        <Translate id="contact.subtitle">
                            Have a question, feedback, or want to explore a partnership? We'd love to hear from you.
                        </Translate>
                    </p>
                    <div className="contact-channels">
                        {channels.map(({ icon, titleId, titleDefault, descId, descDefault, linkText, linkTextId, href }) => (
                            <div className="placeholder-card contact-card" key={titleId}>
                                <div className="contact-card-icon">{icon}</div>
                                <h2 className="contact-card-title">
                                    <Translate id={titleId}>{titleDefault}</Translate>
                                </h2>
                                <p className="contact-card-desc">
                                    <Translate id={descId}>{descDefault}</Translate>
                                </p>
                                <a className="hero-cta contact-card-link" href={href}>
                                    <Translate id={linkTextId}>{linkText}</Translate>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}
