import React from 'react';
import Layout from '@theme/Layout';

export default function Privacy() {
    return (
        <Layout
            title="Privacy Policy"
            description="Privacy Policy for Playgrounds.dev — how we collect, use, and protect your data."
        >
            <div className="legal-page">
                <div className="legal-container">
                    <h1>Privacy Policy</h1>
                    <p className="legal-updated">Last updated: March 6, 2026</p>

                    <p>
                        This Privacy Policy describes how Playgrounds.dev ("Company," "we," "us," or "our") collects, uses,
                        and shares information when you use our website, application, and services (collectively, the "Service").
                        By using the Service, you consent to the practices described in this policy.
                    </p>

                    <h2>1. Information We Collect</h2>

                    <h3>1.1 Information You Provide</h3>
                    <ul>
                        <li><strong>Account Information:</strong> When you sign in via GitHub OAuth, we receive your GitHub username,
                            email address, display name, and profile avatar from GitHub.</li>
                        <li><strong>Payment Information:</strong> If you subscribe to a paid plan, payment details (credit card
                            information, billing address) are collected and processed directly by Stripe. We do not store your
                            full payment card details on our servers.</li>
                        <li><strong>Content and Files:</strong> Source code, configuration files, Docker Compose definitions,
                            environment variables, and other files you upload or create within the Service.</li>
                        <li><strong>Communications:</strong> Any information you provide when contacting us for support or
                            feedback.</li>
                    </ul>

                    <h3>1.2 Information Collected Automatically</h3>
                    <ul>
                        <li><strong>Usage Data:</strong> Information about how you interact with the Service, including pages
                            visited, features used, actions taken, timestamps, and session duration.</li>
                        <li><strong>Device and Browser Information:</strong> IP address, browser type and version, operating
                            system, device type, screen resolution, and referring URLs.</li>
                        <li><strong>Cookies and Similar Technologies:</strong> We use cookies and similar tracking technologies
                            to maintain sessions, remember preferences (such as language), and analyze usage patterns.</li>
                        <li><strong>Log Data:</strong> Server logs that may include your IP address, request timestamps, URLs
                            accessed, HTTP status codes, and user agent strings.</li>
                    </ul>

                    <h3>1.3 Information from Third Parties</h3>
                    <ul>
                        <li><strong>GitHub:</strong> Profile information provided through OAuth authentication.</li>
                        <li><strong>Stripe:</strong> Subscription status, payment confirmations, and billing events for
                            subscription management.</li>
                        <li><strong>Analytics Providers:</strong> Aggregated and individual usage data from analytics services
                            we use to improve the Service.</li>
                    </ul>

                    <h2>2. How We Use Your Information</h2>
                    <p>We use collected information to:</p>
                    <ul>
                        <li>Provide, operate, and maintain the Service.</li>
                        <li>Process transactions, manage subscriptions, and send billing-related communications.</li>
                        <li>Authenticate your identity and manage your account.</li>
                        <li>Communicate with you about the Service, including updates, security alerts, and support messages.</li>
                        <li>Monitor and analyze usage trends to improve the Service, fix bugs, and develop new features.</li>
                        <li>Detect, prevent, and address fraud, abuse, security incidents, and technical issues.</li>
                        <li>Enforce our Terms of Service and comply with legal obligations.</li>
                        <li>Personalize your experience, including language preferences.</li>
                    </ul>

                    <h2>3. How We Share Your Information</h2>
                    <p>We do not sell your personal information. We may share information in the following circumstances:</p>
                    <ul>
                        <li><strong>Service Providers:</strong> We share information with third-party vendors who assist in
                            operating the Service (e.g., cloud hosting, payment processing, analytics, email delivery). These
                            providers are contractually obligated to use your information only as necessary to provide services
                            to us.</li>
                        <li><strong>Legal Requirements:</strong> We may disclose information if required by law, regulation,
                            legal process, or governmental request, or when we believe disclosure is necessary to protect our
                            rights, your safety, or the safety of others.</li>
                        <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, reorganization,
                            or sale of assets, your information may be transferred as part of the transaction. We will notify
                            you of any such change.</li>
                        <li><strong>With Your Consent:</strong> We may share information for purposes not described in this
                            policy with your explicit consent.</li>
                    </ul>

                    <h2>4. Third-Party Services</h2>
                    <p>The Service integrates with and relies on third-party services, including but not limited to:</p>
                    <ul>
                        <li><strong>GitHub</strong> — Authentication and repository access</li>
                        <li><strong>Stripe</strong> — Payment processing and subscription management</li>
                        <li><strong>PostHog</strong> — Product analytics</li>
                        <li><strong>New Relic</strong> — Performance monitoring</li>
                        <li><strong>Sentry</strong> — Error tracking</li>
                        <li><strong>Amazon Web Services (S3)</strong> — File storage</li>
                        <li><strong>Scaleway</strong> — Infrastructure provisioning</li>
                        <li><strong>Cloudflare</strong> — DNS and content delivery</li>
                    </ul>
                    <p>
                        Each third-party service has its own privacy policy governing how it collects and uses data. We
                        encourage you to review their respective policies. We are not responsible for the privacy practices
                        of third-party services.
                    </p>

                    <h2>5. Data Storage and Security</h2>
                    <p>
                        Your data is stored on servers operated by our infrastructure providers. We implement
                        industry-standard security measures to protect your information, including encryption of sensitive
                        data at rest and in transit, access controls, and regular security reviews. However, no method of
                        transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute
                        security.
                    </p>
                    <p>
                        Source code and files within your development environments are stored on remote servers and are
                        accessible only through authenticated sessions. Environment data may be deleted upon environment
                        expiration, termination, or account closure.
                    </p>

                    <h2>6. Data Retention</h2>
                    <p>
                        We retain your personal information for as long as your account is active or as needed to provide the
                        Service. Upon account termination, we may retain certain information as necessary to comply with legal
                        obligations, resolve disputes, and enforce agreements. Billing records and audit logs may be retained
                        for a longer period as required by applicable law.
                    </p>
                    <p>
                        Development environment data (source code, containers, configurations) may be automatically deleted
                        upon environment expiration or within 30 days of account termination.
                    </p>

                    <h2>7. Your Rights</h2>
                    <p>
                        Depending on your jurisdiction, you may have the following rights regarding your personal information:
                    </p>
                    <ul>
                        <li><strong>Access:</strong> Request a copy of the personal information we hold about you.</li>
                        <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information.</li>
                        <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal
                            retention requirements.</li>
                        <li><strong>Data Portability:</strong> Request a machine-readable copy of your data.</li>
                        <li><strong>Objection:</strong> Object to certain processing of your personal information.</li>
                        <li><strong>Withdrawal of Consent:</strong> Withdraw consent where processing is based on consent.</li>
                    </ul>
                    <p>
                        To exercise any of these rights, contact us at{' '}
                        <a href="mailto:privacy@playgrounds.dev">privacy@playgrounds.dev</a>. We will respond to requests
                        within 30 days or as required by applicable law.
                    </p>

                    <h2>8. Cookies</h2>
                    <p>
                        We use essential cookies to maintain your session and remember your preferences (such as locale
                        settings). We may also use analytics cookies to understand how the Service is used. You can control
                        cookie preferences through your browser settings. Disabling essential cookies may impair the
                        functionality of the Service.
                    </p>

                    <h2>9. Children's Privacy</h2>
                    <p>
                        The Service is not directed to individuals under 18 years of age. We do not knowingly collect
                        personal information from children. If we become aware that we have collected information from a
                        child without proper consent, we will take steps to delete that information promptly.
                    </p>

                    <h2>10. International Data Transfers</h2>
                    <p>
                        Your information may be transferred to and processed in countries other than your country of
                        residence. These countries may have data protection laws that differ from your jurisdiction. By
                        using the Service, you consent to the transfer of your information to such countries. We take
                        appropriate measures to ensure that your information receives an adequate level of protection.
                    </p>

                    <h2>11. Changes to This Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. We will notify you of material changes by
                        posting the updated policy on the Service and updating the "Last updated" date. Your continued use
                        of the Service after changes constitutes acceptance of the updated policy. We encourage you to
                        review this policy periodically.
                    </p>

                    <h2>12. Contact Us</h2>
                    <p>
                        If you have questions or concerns about this Privacy Policy or our data practices, please contact
                        us at <a href="mailto:privacy@playgrounds.dev">privacy@playgrounds.dev</a>.
                    </p>
                </div>
            </div>
        </Layout>
    );
}
