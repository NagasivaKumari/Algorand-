import React from 'react';

const Navigation: React.FC = () => {
    const navItems = [
        { label: 'Dashboard', path: '/' },
        { label: 'Transactions', path: '/transactions' },
        { label: 'Multi-Sig', path: '/multi-sig' },
        { label: 'Settings', path: '/settings' }
    ];

    return (
        <nav className="main-navigation">
            <ul>
                {navItems.map((item, index) => (
                    <li key={index}>
                        <a href={item.path}>{item.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
