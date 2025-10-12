import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { WalletConnectButton } from '../../components/WalletConnect';

describe('WalletConnectButton Integration', () => {
    it('should display loading state when clicked', () => {
        render(<WalletConnectButton />);
        const button = screen.getByText('Connect Wallet');
        fireEvent.click(button);
        expect(button).toHaveTextContent('Connecting...');
    });

    it('should revert to default state after connection attempt', async () => {
        render(<WalletConnectButton />);
        const button = screen.getByText('Connect Wallet');
        fireEvent.click(button);
        await screen.findByText('Connect Wallet');
        expect(button).toHaveTextContent('Connect Wallet');
    });
});