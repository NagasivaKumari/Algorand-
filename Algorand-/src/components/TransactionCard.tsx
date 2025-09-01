import React from 'react';

interface TransactionCardProps {
    txId: string;
    amount: number;
    recipient: string;
    status: 'pending' | 'completed' | 'failed';
    timestamp: Date;
}

const TransactionCard: React.FC<TransactionCardProps> = ({
    txId,
    amount,
    recipient,
    status,
    timestamp
}) => {
    return (
        <div className={`transaction-card status-${status}`}>
            <div className="transaction-header">
                <span className="amount">{amount} ALGO</span>
                <span className="status">{status}</span>
            </div>
            <div className="transaction-details">
                <p>To: {recipient}</p>
                <p>TxID: {txId.substring(0, 8)}...</p>
                <p>Time: {timestamp.toLocaleString()}</p>
            </div>
        </div>
    );
};

export default TransactionCard;
