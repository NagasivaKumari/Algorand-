import { useState, useCallback } from 'react';
import QRCodeModal from '@walletconnect/qrcode-modal';
import { initializeWalletConnect } from '../utils/algorand';

interface WalletState {
    address: string | null;
    connected: boolean;
    error: string | null;
}

export const useWalletConnection = () => {
    const [walletState, setWalletState] = useState<WalletState>({
        address: null,
        connected: false,
        error: null,
    });

    const connectWallet = useCallback(async () => {
        try {
            const connector = initializeWalletConnect();

            connector.on('connect', (error, payload) => {
                if (error) {
                    throw error;
                }

                const { accounts } = payload.params[0];
                setWalletState({
                    address: accounts[0],
                    connected: true,
                    error: null,
                });
            });

            connector.on('disconnect', () => {
                setWalletState({
                    address: null,
                    connected: false,
                    error: null,
                });
            });
        } catch (error) {
            setWalletState((prev) => ({
                ...prev,
                error: 'Failed to connect wallet',
            }));
        }
    }, []);

    const disconnectWallet = useCallback(() => {
        setWalletState({
            address: null,
            connected: false,
            error: null,
        });
    }, []);

    return {
        ...walletState,
        connectWallet,
        disconnectWallet,
    };
};
