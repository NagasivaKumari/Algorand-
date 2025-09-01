export class AlgoSafeError extends Error {
    code: string;
    
    constructor(message: string, code: string) {
        super(message);
        this.code = code;
        this.name = 'AlgoSafeError';
    }
}

export const handleError = (error: unknown): AlgoSafeError => {
    if (error instanceof AlgoSafeError) {
        return error;
    }

    if (error instanceof Error) {
        return new AlgoSafeError(error.message, 'UNKNOWN_ERROR');
    }

    return new AlgoSafeError('An unknown error occurred', 'UNKNOWN_ERROR');
};

export const ErrorCodes = {
    WALLET_CONNECTION_FAILED: 'WALLET_CONNECTION_FAILED',
    TRANSACTION_FAILED: 'TRANSACTION_FAILED',
    INSUFFICIENT_BALANCE: 'INSUFFICIENT_BALANCE',
    INVALID_ADDRESS: 'INVALID_ADDRESS',
    NETWORK_ERROR: 'NETWORK_ERROR',
} as const;

export const getErrorMessage = (code: keyof typeof ErrorCodes): string => {
    const messages: Record<keyof typeof ErrorCodes, string> = {
        WALLET_CONNECTION_FAILED: 'Failed to connect to wallet',
        TRANSACTION_FAILED: 'Transaction failed to process',
        INSUFFICIENT_BALANCE: 'Insufficient balance for transaction',
        INVALID_ADDRESS: 'Invalid Algorand address provided',
        NETWORK_ERROR: 'Network connection error',
    };

    return messages[code];
};
