import React from 'react';
import { useWalletConnection } from '../hooks/useWalletConnection';

const WalletConnect: React.FC = () => {
    const { address, connected, error, connectWallet, disconnectWallet } = useWalletConnection();

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
