import algosdk from 'algosdk';

export interface TimeLockConfig {
    unlockTime: number;
    recipient: string;
    amount: number;
}

export class TimeLockerContract {
    private config: TimeLockConfig;

    constructor(config: TimeLockConfig) {
        this.config = config;
    }

    async createLockTransaction(
        sender: string,
        params: algosdk.SuggestedParams
    ): Promise<algosdk.Transaction> {
        const tx = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
            suggestedParams: params,
            sender: sender,
            receiver: this.config.recipient,
            amount: this.config.amount
        });

        return tx;
    }

    isUnlockTime(): boolean {
        const currentTime = Math.floor(Date.now() / 1000);
        return currentTime >= this.config.unlockTime;
    }
}
