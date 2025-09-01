export const ALGORAND_CONFIG = {
    NETWORKS: {
        MAINNET: {
            API_URL: 'https://mainnet-api.algonode.cloud',
            INDEXER_URL: 'https://mainnet-idx.algonode.cloud',
            EXPLORER_URL: 'https://algoexplorer.io'
        },
        TESTNET: {
            API_URL: 'https://testnet-api.algonode.cloud',
            INDEXER_URL: 'https://testnet-idx.algonode.cloud',
            EXPLORER_URL: 'https://testnet.algoexplorer.io'
        }
    },
    CONTRACTS: {
        MULTISIG: {
            VERSION: 1,
            DEFAULT_THRESHOLD: 2,
            MAX_SIGNERS: 5
        },
        TIMELOCK: {
            MIN_DELAY: 3600, // 1 hour in seconds
            MAX_DELAY: 2592000 // 30 days in seconds
        }
    },
    TRANSACTION: {
        CONFIRMATION_ROUNDS: 5,
        TIMEOUT_ROUNDS: 10,
        DEFAULT_NOTE: 'AlgoSafe Transaction'
    },
    WALLET: {
        MIN_BALANCE: 100000, // 0.1 ALGO
        SUGGESTED_FEES: {
            LOW: 1000,
            MEDIUM: 2000,
            HIGH: 3000
        }
    }
};
