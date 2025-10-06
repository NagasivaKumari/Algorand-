import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="app-layout">
            <header className="app-header">
                <h1>AlgoSafe</h1>
            </header>
            <main className="app-main">
                {children}
            </main>
            <footer className="app-footer">
                <p>© 2025 AlgoSafe - Secure Multi-Signature Wallet</p>
            </footer>
        </div>
    );
};

export default Layout;
