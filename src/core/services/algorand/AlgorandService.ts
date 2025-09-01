import algosdk from 'algosdk';
import { AlgoSafeError, ErrorCodes } from '../../../shared/utils/errors';

export class AlgorandService {
    private client: algosdk.Algodv2;
    private network: 'MainNet' | 'TestNet';

    constructor(network: 'MainNet' | 'TestNet' = 'TestNet') {
        this.network = network;
        const server = network === 'MainNet' 
            ? 'https://mainnet-api.algonode.cloud'
            : 'https://testnet-api.algonode.cloud';
            
        this.client = new algosdk.Algodv2('', server, '');
    }

    async getAccountInfo(address: string) {
        try {
            return await this.client.accountInformation(address).do();
        } catch (error) {
            throw new AlgoSafeError(
                'Failed to fetch account information',
                ErrorCodes.NETWORK_ERROR
            );
        }
    }

    async getTransactionParams(): Promise<algosdk.SuggestedParams> {
        try {
            return await this.client.getTransactionParams().do();
        } catch (error) {
            throw new AlgoSafeError(
                'Failed to get transaction parameters',
                ErrorCodes.NETWORK_ERROR
            );
        }
    }

    async sendTransaction(signedTxn: Uint8Array): Promise<string> {
        try {
            const response = await this.client.sendRawTransaction(signedTxn).do();
            return response.txid;
        } catch (error) {
            throw new AlgoSafeError(
                'Failed to send transaction',
                ErrorCodes.TRANSACTION_FAILED
            );
        }
    }

    async waitForConfirmation(txId: string): Promise<boolean> {
        try {
            const status = await this.client.status().do();
            const lastRound = status.lastRound;

            for (let i = 0; i < 5; i++) {
                const pendingInfo = await this.client
                    .pendingTransactionInformation(txId)
                    .do();

                if (pendingInfo.confirmedRound) {
                    return true;
                }

                await this.client.statusAfterBlock(Number(lastRound) + i).do();
            }

            throw new Error('Transaction not confirmed after timeout');
        } catch (error) {
            throw new AlgoSafeError(
                'Failed to confirm transaction',
                ErrorCodes.TRANSACTION_FAILED
            );
        }
    }
}
