import React from 'react';
import { RouteObject } from 'react-router-dom';

// Pages
import Dashboard from '@features/dashboard/pages/Dashboard';
import WalletPage from '@features/wallet/pages/WalletPage';
import MultiSigPage from '@features/multi-sig/pages/MultiSigPage';
import TransactionsPage from '@features/transactions/pages/TransactionsPage';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Dashboard />
  },
  {
    path: '/wallet',
    element: <WalletPage />
  },
  {
    path: '/multi-sig',
    element: <MultiSigPage />
  },
  {
    path: '/transactions',
    element: <TransactionsPage />
  }
];
