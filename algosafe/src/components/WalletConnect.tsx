import React from 'react';
import { useWalletConnection } from '../hooks/useWalletConnection';
import { initializeWalletConnect } from '../utils/algorand';

const WalletConnect: React.FC = () => {
    const { address, connected, error, connectWallet, disconnectWallet } = useWalletConnection();

    const handleConnect = () => {
        const connector = initializeWalletConnect();
        console.log('WalletConnect initialized:', connector);
    };

    return (
        <div className="wallet-connect">
            {!connected ? (
                <button onClick={connectWallet}>Connect Wallet</button>
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
