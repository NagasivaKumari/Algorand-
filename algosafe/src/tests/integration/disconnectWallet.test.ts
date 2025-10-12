import { render, screen, fireEvent } from '@testing-library/react';
import WalletConnectButton from '../../components/WalletConnect';

describe('Disconnect Wallet Button Integration', () => {
    it('should display the Disconnect Wallet button when connected', () => {
        render(<WalletConnectButton />);
        const connectButton = screen.getByText('Connect Wallet');
        fireEvent.click(connectButton);
        const disconnectButton = screen.getByText('Disconnect Wallet');
        expect(disconnectButton).toBeInTheDocument();
    });

    it('should revert to Connect Wallet button after disconnecting', () => {
        render(<WalletConnectButton />);
        const connectButton = screen.getByText('Connect Wallet');
        fireEvent.click(connectButton);
        const disconnectButton = screen.getByText('Disconnect Wallet');
        fireEvent.click(disconnectButton);
        expect(screen.getByText('Connect Wallet')).toBeInTheDocument();
    });
});