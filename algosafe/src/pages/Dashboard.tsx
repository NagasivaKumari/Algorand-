import React from 'react';
import Layout from '../components/Layout';

const Dashboard: React.FC = () => {
    return (
        <Layout>
            <div className="dashboard">
                <h2>Welcome to AlgoSafe</h2>
                <div className="dashboard-content">
                    <section className="wallet-overview">
                        <h3>Wallet Overview</h3>
                        {/* Wallet content will be added here */}
                    </section>
                    <section className="recent-transactions">
                        <h3>Recent Transactions</h3>
                        {/* Transaction list will be added here */}
                    </section>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
