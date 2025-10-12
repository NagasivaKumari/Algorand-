import React, { useState } from 'react';
import { useWalletConnection } from '../hooks/useWalletConnection';
import { initializeWalletConnect } from '../utils/algorand';

const WalletConnectButton: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [connected, setConnected] = useState(false);
    const [walletAddress, setWalletAddress] = useState<string | null>(null);

    const handleConnect = () => {
        setLoading(true);
        try {
            const connector = initializeWalletConnect();
            console.log('WalletConnect initialized:', connector);
            setConnected(true);
            setWalletAddress('0x1234...abcd'); // Mock wallet address for now
        } catch (error) {
            console.error('Error initializing WalletConnect:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDisconnect = () => {
        setConnected(false);
        setWalletAddress(null);
        console.log('Wallet disconnected');
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
                    <p>Connected as: {walletAddress}</p>
                    <button
                        onClick={handleDisconnect}
                        className="wallet-disconnect-button"
                        title="Click to disconnect your wallet"
                    >
                        Disconnect Wallet
                    </button>
                </div>
            )}
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
