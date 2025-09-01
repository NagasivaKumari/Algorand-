import algosdk from 'algosdk';
import { AlgoSafeError, ErrorCodes } from './errors';

export interface TransactionParams {
    sender: string;
    receiver: string;
    amount: number;
    note?: Uint8Array;
    closeRemainderTo?: string;
}

export class TransactionHelper {
    private algodClient: algosdk.Algodv2;

    constructor(
        algodClient: algosdk.Algodv2 = new algosdk.Algodv2(
            '',
            'https://testnet-api.algonode.cloud',
            ''
        )
    ) {
        this.algodClient = algodClient;
    }

    async createPaymentTransaction(params: TransactionParams): Promise<algosdk.Transaction> {
        try {
            const suggestedParams = await this.algodClient.getTransactionParams().do();
            
            return algosdk.makePaymentTxnWithSuggestedParamsFromObject({
                suggestedParams,
                sender: params.sender,
                receiver: params.receiver,
                amount: params.amount,
                note: params.note,
                closeRemainderTo: params.closeRemainderTo
            });
        } catch (error) {
            throw new AlgoSafeError(
                'Failed to create payment transaction',
                ErrorCodes.TRANSACTION_FAILED
            );
        }
    }

    async waitForConfirmation(txId: string): Promise<boolean> {
        try {
            const status = await this.algodClient.status().do();
            const lastRound = status.lastRound;
            
            // Wait for confirmation or timeout after 5 rounds
            for (let i = 0; i < 5; i++) {
                const pendingInfo = await this.algodClient
                    .pendingTransactionInformation(txId)
                    .do();
                
                if (pendingInfo.confirmedRound) {
                    return true;
                }
                
                await this.algodClient.statusAfterBlock(Number(lastRound) + i).do();
            }
            
            throw new Error('Transaction not confirmed after timeout');
        } catch (error) {
            throw new AlgoSafeError(
                'Failed to confirm transaction',
                ErrorCodes.TRANSACTION_FAILED
            );
        }
    }

    async sendTransaction(
        signedTxn: Uint8Array | Uint8Array[]
    ): Promise<string> {
        try {
            const response = await this.algodClient.sendRawTransaction(signedTxn).do();
            return response.txid;
        } catch (error) {
            throw new AlgoSafeError(
                'Failed to send transaction',
                ErrorCodes.TRANSACTION_FAILED
            );
        }
    }
}
