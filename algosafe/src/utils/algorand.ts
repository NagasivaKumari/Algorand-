import algosdk from 'algosdk';
import WalletConnect from '@walletconnect/client';
import QRCodeModal from '@walletconnect/qrcode-modal';
import { logError } from './errorLogger';

const algodClient = new algosdk.Algodv2(
    '',
    'https://testnet-api.algonode.cloud',
    ''
);

export const getAccountBalance = async (address: string): Promise<number> => {
    try {
        const accountInfo = await algodClient.accountInformation(address).do();
        return accountInfo.amount;
    } catch (error) {
        console.error('Error fetching balance:', error);
        throw error;
    }
};

export const createTransaction = async (
    sender: string,
    receiver: string,
    amount: number
): Promise<algosdk.Transaction> => {
    try {
        const params = await algodClient.getTransactionParams().do();
        return algosdk.makePaymentTxnWithSuggestedParamsFromObject({
            suggestedParams: params,
            sender: sender,
            receiver: receiver,
            amount: amount
        });
    } catch (error) {
        console.error('Error creating transaction:', error);
        throw error;
    }
};

/**
 * Initializes a WalletConnect session.
 * @returns {WalletConnect} The WalletConnect instance.
 */
export function initializeWalletConnect() {
    const connector = new WalletConnect({
        bridge: 'https://bridge.walletconnect.org',
    });

    try {
        if (!connector.connected) {
            connector.createSession();
            QRCodeModal.open(connector.uri, () => {
                console.log('QR Code Modal closed');
            });
        }
    } catch (error) {
        if (error instanceof Error) {
            logError(error);
        } else {
            console.error('Unknown error:', error);
        }
        throw error;
    }

    return connector;
}
