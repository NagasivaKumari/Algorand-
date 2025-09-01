export interface WalletState {
    address: string | null;
    connected: boolean;
    error: string | null;
}

export interface WalletBalance {
    algo: number;
    assets: Array<{
        id: number;
        amount: number;
    }>;
}

export interface WalletTransaction {
    txId: string;
    amount: number;
    type: 'send' | 'receive';
    timestamp: Date;
    status: 'pending' | 'confirmed' | 'failed';
}
