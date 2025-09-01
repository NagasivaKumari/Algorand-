import algosdk from 'algosdk';

export interface MultiSigConfig {
    version: number;
    threshold: number;
    addresses: string[];
}

export class MultiSigContract {
    private config: MultiSigConfig;
    private multisig: algosdk.MultisigMetadata;

    constructor(config: MultiSigConfig) {
        this.config = config;
        this.multisig = {
            version: config.version,
            threshold: config.threshold,
            addrs: config.addresses
        };
    }

    createTransaction(
        sender: string,
        receiver: string,
        amount: number,
        params: algosdk.SuggestedParams
    ): algosdk.Transaction {
        return algosdk.makePaymentTxnWithSuggestedParamsFromObject({
            suggestedParams: params,
            sender: sender,
            receiver: receiver,
            amount: amount
        });
    }

    signTransaction(
        transaction: algosdk.Transaction,
        privateKey: Uint8Array
    ): Uint8Array {
        return algosdk.signMultisigTransaction(
            transaction,
            this.multisig,
            privateKey
        ).blob;
    }
}
