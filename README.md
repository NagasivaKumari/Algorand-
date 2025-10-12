# Algorand Safe

A TypeScript/React toolkit to manage Algorand wallets and secure transactions with Multi‑Sig and Timelock contracts. Includes an “AlgoSafe” sub‑app for wallet connection, transaction history, and secure execution flows.

## Features

## Tech Stack
  - `src/core/services/algorand/AlgorandService.ts`
  - `algosafe/src/utils/algorand.ts`
  - `algosafe/src/contracts/MultiSigContract.ts`
  - `algosafe/src/contracts/TimeLockerContract.ts`

## Repo Structure
  - `src/core/services/algorand/AlgorandService.ts` — Algorand client/service layer
  - `src/features/multi-sig` — Multi‑sig types and structures
  - `src/features/wallet` — Wallet types
  - `src/shared/contexts/ThemeContext.tsx` — Theming
  - `src/layouts/MainLayout.tsx` — App layout
  - `src/routes.tsx` — Routing
  - `src/App.tsx`, `src/index.tsx` — Entry points
  - `src/components/WalletConnect.tsx` — Wallet connect UI
  - `src/components/TransactionCard.tsx` — Transaction display
  - `src/components/Navigation.tsx`, `src/components/Layout.tsx` — App shell
  - `src/contracts/MultiSigContract.ts` — Multi‑sig helpers
  - `src/contracts/TimeLockerContract.ts` — Timelock helpers
  - `src/utils/algorand.ts` — Algorand utilities
  - `src/pages/Dashboard.tsx` — Main dashboard
  - `src/hooks/useWalletConnection.ts`, `src/hooks/useTransactionHistory.ts` — Hooks

## Getting Started

Prerequisites:

Install and run:

```bash
# Root app
npm install
npm run dev

# AlgoSafe sub‑app
cd algosafe
npm install
npm start
```

The dev server will run on http://localhost:3000

- Algorand TestNet/MainNet support (AlgoNode endpoints)
- Roadmap-driven expansion (wallet integrations, offline signing, TEAL templates)

## Why Separate Folder?
## License
MIT — see `LICENSE`.
- Wallet connector integrations
- CI workflow for build + (future) tests

## Ecosystem Mapping (Electric Capital)

Submission steps summary:
1. Fork `electric-capital/crypto-ecosystems`
2. Locate the Algorand ecosystem TOML (e.g., `data/ecosystems/a/algorand.