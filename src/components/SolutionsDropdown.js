import React, { useState, useRef, useEffect } from 'react';

const solutions = [
    {
        icon: '🌐',
        title: 'Production Deployment',
        description: 'Deploy and run production workloads with zero-downtime updates',
        href: '/solutions/production-deployment',
    },
    {
        icon: '🧪',
        title: 'Staging / UAT Environment',
        description: 'Spin up isolated staging environments for QA and acceptance testing',
        href: '/solutions/staging-uat',
    },
    {
        icon: '⚡',
        title: 'Phoenix / Ephemeral Environments',
        description: 'On-demand environments that spin up per branch or PR and auto-destroy',
        href: '/solutions/ephemeral-environments',
    },
    {
        icon: '📦',
        title: 'Software Distribution',
        description: 'Package and distribute your software to customers effortlessly',
        href: '/solutions/software-distribution',
    },
    {
        icon: '🤖',
        title: 'Agent Environments',
        description: 'Isolated runtime sandboxes for AI agents and autonomous workflows',
        href: '/solutions/agent-environments',
    },
    {
        icon: '🏠',
        title: 'Self-Hosted Software Deployment',
        description: 'Give customers one-click self-hosted deployments of your product',
        href: '/solutions/self-hosted-deployment',
    },
    {
        icon: '🔧',
        title: 'Internal Tools',
        description: 'Host internal dashboards, admin panels, and back-office tooling',
        href: '/solutions/internal-tools',
    },
    {
        icon: '⚙️',
        title: 'Build & Test During CI/CD',
        description: 'Spin up full-stack environments as part of your CI/CD pipeline',
        href: '/solutions/ci-cd',
    },
    {
        icon: '📡',
        title: 'Build in Public',
        description: 'Share live progress with your audience as you build',
        href: '/solutions/build-in-public',
    },
    {
        icon: '🎸',
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
