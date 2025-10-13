# Algorand Safe

A TypeScript/React toolkit to manage Algorand wallets and secure transactions with Multi‑Sig and Timelock contracts. Includes an “AlgoSafe” sub‑app for wallet connection, transaction history, and secure execution flows.

## Features
- Wallet connection and session management (WalletConnect/Pera-compatible)
- Multi‑signature transactions (M‑of‑N) helpers
- Timelock contract utilities for scheduled execution windows
- Transaction preparation, review, and history UI
- Reusable components: `WalletConnect`, `TransactionCard`, `Navigation`, `Layout`
- Settings and Theme contexts for app configuration and theming
- Modular architecture separating core services, features, and shared UI

## Tech Stack
- React + TypeScript
- React Context (Theme, Settings)
- CSS (see `algosafe/src/styles/components.css`)
- Algorand integration via:
  - `src/core/services/algorand/AlgorandService.ts`
  - `algosafe/src/utils/algorand.ts`
- Contract helpers:
  - `algosafe/src/contracts/MultiSigContract.ts`
  - `algosafe/src/contracts/TimeLockerContract.ts`
- Testing: React Testing Library (`algosafe/src/App.test.tsx`)
- Build/Config: TypeScript (`tsconfig.json` in root and `algosafe/`), per-app `package.json`

## Repo Structure
- Root app
  - `src/core/services/algorand/AlgorandService.ts` — Algorand client/service layer
  - `src/features/multi-sig` — Multi‑sig types and structures
  - `src/features/wallet` — Wallet types
  - `src/shared/contexts/ThemeContext.tsx` — Theming
  - `src/layouts/MainLayout.tsx` — App layout
  - `src/routes.tsx` — Routing
  - `src/App.tsx`, `src/index.tsx` — Entry points
- AlgoSafe sub‑app (`algosafe/`)
  - `src/components/WalletConnect.tsx` — Wallet connect UI
  - `src/components/TransactionCard.tsx` — Transaction display
  - `src/components/Navigation.tsx`, `src/components/Layout.tsx` — App shell
  - `src/contracts/MultiSigContract.ts` — Multi‑sig helpers
  - `src/contracts/TimeLockerContract.ts` — Timelock helpers
  - `src/utils/algorand.ts` — Algorand utilities
  - `src/pages/Dashboard.tsx` — Main dashboard
  - `src/hooks/useWalletConnection.ts`, `src/hooks/useTransactionHistory.ts` — Hooks


## Project Goals

- Provide secure multi-signature wallet management for Algorand users
- Enable time-locked transactions for advanced asset control
- Offer a user-friendly dashboard for transaction monitoring
- Support wallet connection via WalletConnect and other providers
- Maintain modular, testable, and well-documented code

## Getting Started

Prerequisites:
- Node.js 18+
- npm or yarn
- An Algorand wallet (e.g., Pera, WalletConnect-compatible)

Install and run:

```bash

# AlgoSafe sub‑app
cd algosafe
npm install
npm start
```

## WalletConnect Usage

The application supports WalletConnect for connecting and disconnecting wallets. Follow these steps:

1. Click the **Connect Wallet** button to initiate a connection.
2. Scan the QR code using a WalletConnect-compatible wallet.
3. Once connected, you can interact with the application.
4. To disconnect, click the **Disconnect Wallet** button.

### Features
- Secure wallet connection using WalletConnect.
- Easy disconnection with a single click.
- Accessible button styles for better usability.

## Contributing
See `CONTRIBUTING.md` for the workflow and guidelines.

## License
See `LICENSE`.
## Code of Conduct
See `CODE_OF_CONDUCT.md`.
