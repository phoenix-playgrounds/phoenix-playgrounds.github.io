import React from 'react';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';

const MailIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
);

const ChatIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
);

const AtSignIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" /></svg>
);

const PhoneIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);

const channels = [
    {
        icon: <ChatIcon />,
        titleId: 'contact.slack.title',
        titleDefault: 'Slack Community',
        descId: 'contact.slack.desc',
        descDefault: 'Join our Slack workspace to chat with the team and other developers.',
        linkText: 'Join Slack →',
        linkTextId: 'contact.slack.link',
        href: '#',
    },
    {
        icon: <AtSignIcon />,
        titleId: 'contact.email.title',
        titleDefault: 'Email Support',
        descId: 'contact.email.desc',
        descDefault: 'Reach out to our support team directly via email.',
        linkText: 'support@playgrounds.dev →',
        linkTextId: 'contact.email.link',
        href: 'mailto:support@playgrounds.dev',
    },
    {
        icon: <PhoneIcon />,
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
                        <MailIcon />
                        <Translate id="contact.badge">Contact</Translate>
                    </span>
                    <h1 className="hero-title">
                        <Translate id="contact.title.line1">Get in</Translate>{' '}
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
