import algosdk from 'algosdk';

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
