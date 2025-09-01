export interface MultiSigConfig {
    version: number;
    threshold: number;
    addresses: string[];
}

export interface MultiSigTransaction {
    txId: string;
    requiredSignatures: number;
    currentSignatures: number;
    signers: string[];
    status: 'pending' | 'executed' | 'failed';
    createdAt: Date;
    expiresAt?: Date;
}
