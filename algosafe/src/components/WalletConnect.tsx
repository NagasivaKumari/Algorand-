
import React, { useState } from 'react';
import { useWalletConnection } from '../hooks/useWalletConnection';

export const WalletConnectButton: React.FC = () => {
    const { address, connected, error, connectWallet, disconnectWallet } = useWalletConnection();
    const [loading, setLoading] = useState(false);

    const handleConnect = async () => {
        setLoading(true);
        await connectWallet();
        setLoading(false);
    };

    return (
        <div>
            {!connected ? (
                <button
                    onClick={handleConnect}
                    className="wallet-connect-button"
                    disabled={loading}
                    title="Click to connect your wallet"
                >
                    {loading ? 'Connecting...' : 'Connect Wallet'}
                </button>
            ) : (
                <div>
                    <p>Connected as: {address}</p>
                    <button
                        onClick={disconnectWallet}
                        className="wallet-disconnect-button"
                        title="Click to disconnect your wallet"
                    >
                        Disconnect Wallet
                    </button>
                </div>
            )}
            {error && <p className="error">{error}</p>}
        </div>
    );
};

const WalletConnect: React.FC = () => {
    const { address, connected, error, connectWallet, disconnectWallet } = useWalletConnection();
    const [loading, setLoading] = useState(false);

    const handleConnect = () => {
        setLoading(true);
        try {
            const connector = initializeWalletConnect();
            console.log('WalletConnect initialized:', connector);
        } catch (error) {
            console.error('Error initializing WalletConnect:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="wallet-connect">
            {!connected ? (
                <button
                    onClick={handleConnect}
                    className="wallet-connect-button"
                    disabled={loading}
                    title="Click to connect your wallet"
                >
                    {loading ? 'Connecting...' : 'Connect Wallet'}
                </button>
            ) : (
                <div className="wallet-info">
                    <span className="address">{address}</span>
                    <button onClick={disconnectWallet}>Disconnect</button>
                </div>
            )}
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default WalletConnect;
