import { initializeWalletConnect } from '../../utils/algorand';

describe('initializeWalletConnect', () => {
    it('should initialize WalletConnect and return a connector instance', () => {
        const connector = initializeWalletConnect();
        expect(connector).toBeDefined();
        expect(connector.connected).toBe(false);
    });

    it('should open the QR Code modal when creating a session', () => {
        const mockQRCodeModal = jest.spyOn(require('@walletconnect/qrcode-modal'), 'open');
        initializeWalletConnect();
        expect(mockQRCodeModal).toHaveBeenCalled();
    });
});