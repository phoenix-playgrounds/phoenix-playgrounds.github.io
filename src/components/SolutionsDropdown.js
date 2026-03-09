import React, { useState, useRef, useEffect } from 'react';

const GlobeIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
);

const FlaskIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h6" /><path d="M10 9V3" /><path d="M14 9V3" /><path d="M7.5 21h9" /><path d="M5.2 21a2 2 0 0 1-.8-3.5L10 12V9h4v3l5.6 5.5a2 2 0 0 1-.8 3.5" /></svg>
);

const BoltIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
);

const PackageIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16.5 9.4l-9-5.19" /><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
);

const CpuIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M15 2v2" /><path d="M15 20v2" /><path d="M2 15h2" /><path d="M2 9h2" /><path d="M20 15h2" /><path d="M20 9h2" /><path d="M9 2v2" /><path d="M9 20v2" /></svg>
);

const HomeIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
);

const WrenchIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
);

const GearIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
);

const RadioIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.87" /><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" /><circle cx="12" cy="20" r="2" /><path d="M12 14v4" /><path d="M20.5 7.28a16 16 0 0 0-17 0" /><path d="M12 2v3" /></svg>
);

const ZapIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" /></svg>
);

const solutions = [
    {
        icon: <GlobeIcon />,
        title: 'Production Deployment',
        description: 'Deploy and run production workloads with zero-downtime updates',
        href: '/solutions/production-deployment',
    },
    {
        icon: <FlaskIcon />,
        title: 'Staging / UAT Environment',
        description: 'Spin up isolated staging environments for QA and acceptance testing',
        href: '/solutions/staging-uat',
    },
    {
        icon: <BoltIcon />,
        title: 'Phoenix / Ephemeral Environments',
        description: 'On-demand environments that spin up per branch or PR and auto-destroy',
        href: '/solutions/ephemeral-environments',
    },
    {
        icon: <PackageIcon />,
        title: 'Software Distribution',
        description: 'Package and distribute your software to customers effortlessly',
        href: '/solutions/software-distribution',
    },
    {
        icon: <CpuIcon />,
        title: 'Agent Environments',
        description: 'Isolated runtime sandboxes for AI agents and autonomous workflows',
        href: '/solutions/agent-environments',
    },
    {
        icon: <HomeIcon />,
        title: 'Self-Hosted Software Deployment',
        description: 'Give customers one-click self-hosted deployments of your product',
        href: '/solutions/self-hosted-deployment',
    },
    {
        icon: <WrenchIcon />,
        title: 'Internal Tools',
        description: 'Host internal dashboards, admin panels, and back-office tooling',
        href: '/solutions/internal-tools',
    },
    {
        icon: <GearIcon />,
        title: 'Build & Test During CI/CD',
        description: 'Spin up full-stack environments as part of your CI/CD pipeline',
        href: '/solutions/ci-cd',
    },
    {
        icon: <RadioIcon />,
        title: 'Build in Public',
        description: 'Share live progress with your audience as you build',
        href: '/solutions/build-in-public',
    },
    {
        icon: <ZapIcon />,
        title: 'Vibe Coding on Steroids',
        description: 'Supercharge your development flow with instant cloud playgrounds',
        href: '/solutions/vibe-coding',
    },
];

export default function SolutionsDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const timeoutRef = useRef(null);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
    };

    const handleClick = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div
            ref={dropdownRef}
            className={`navbar__item dropdown dropdown--hoverable solutions-dropdown-wrapper ${isOpen ? 'dropdown--show' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <a
                href="#"
                className="navbar__link solutions-dropdown-trigger"
                onClick={(e) => {
                    e.preventDefault();
                    handleClick();
                }}
            >
                Solutions <span className="solutions-dropdown-arrow">▾</span>
            </a>
            {isOpen && (
                <div className="solutions-mega-dropdown">
                    <div className="solutions-mega-grid">
                        {solutions.map((solution) => (
                            <a
                                key={solution.href}
                                href={solution.href}
                                className="solutions-mega-card"
                                onClick={() => setIsOpen(false)}
                            >
                                <span className="solutions-mega-icon">{solution.icon}</span>
                                <div className="solutions-mega-content">
                                    <span className="solutions-mega-title">{solution.title}</span>
                                    <span className="solutions-mega-desc">{solution.description}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
