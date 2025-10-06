<div align="center">

# AlgoSafe

Secure, collaborative multi‑signature & time‑locked asset management on the **Algorand** blockchain.

</div>

## ✨ Overview
AlgoSafe is a React + TypeScript powered dApp that helps teams, DAOs, and power users manage Algorand accounts requiring multiple approvals and optional execution delays. It abstracts Algorand multi-signature logic and future‑time guarded transactions behind a clean, auditable interface.

## 🔑 Core Features
| Category | Capabilities |
| -------- | ------------ |
| Multi‑Signature | Up to 5 signers, configurable M-of-N threshold, coordinated signing workflow |
| Time Locks | Schedule transactions with enforced unlock windows (1h → 30d) |
| Security Controls | Daily send limits, enforced min balance checks, network selection (TestNet/MainNet) |
| UX | Dashboard, transaction timeline, signer status indicators, light/dark theme |
| Transaction Management | Draft, queue, sign, broadcast, status confirmation & error handling |

## 🧱 Tech Stack
- Framework: React 18 + TypeScript
- Blockchain SDK: `algosdk`
- Styling: CSS (component‑scoped styles)
- Build Tooling: CRA / React scripts (modifiable)

## 🏗 Architecture (High Level)
```
UI Layer (components, pages)
	↳ Hooks (wallet connection, transaction history)
			↳ Domain Logic (multi-sig builder, time-lock validator)
					↳ Algorand Utilities (algosdk wrappers, error helpers)
							↳ Algorand Network (TestNet/MainNet via AlgoNode endpoints)
```

### Key Concepts
**Multi-Signature Model**
- Each wallet defines: `N` total signers, `M` required signatures.
- Transactions are prepared → partially signed → aggregated → submitted.

**Time-Locked Execution**
- A transaction draft can specify a Unix round/approx time unlock.
- The app tracks readiness and only enables broadcast when condition satisfied.

## 📂 Project Structure
```
algosafe/
	public/                # Static assets & HTML template
	src/
		components/          # Reusable UI building blocks (Layout, Navigation, etc.)
		contracts/           # Multi-sig + time-lock abstractions / future smart logic
		contexts/            # Global React contexts (settings, theming)
		hooks/               # Reusable stateful logic (wallet, transactions)
		pages/               # Page-level views (Dashboard, etc.)
		styles/              # CSS modules / global style assets
		utils/               # Helper functions (algorand wrappers, errors, helpers)
		index.tsx            # App bootstrap
		App.tsx              # Root component composition
	package.json
	README.md
```

## ⚙️ Getting Started
### Prerequisites
- Node.js 18+ (recommended)
- Yarn or npm
- Algorand account(s) (TestNet for development)

### Install & Run
```bash
# Install dependencies
npm install

# Start dev server
npm start

# Build production bundle
npm run build
```

### (Planned) Environment Configuration
Create `.env` (example):
```
REACT_APP_ALGONODE_MAINNET=https://mainnet-api.algonode.cloud
REACT_APP_ALGONODE_TESTNET=https://testnet-api.algonode.cloud
REACT_APP_DEFAULT_NETWORK=TESTNET
```

## 🚀 Usage Flow (Conceptual)
1. Connect / configure signers (import / list public keys)
2. Set threshold (e.g., 2 of 3)
3. Draft transaction (amount, receiver, optional time-lock)
4. Collect required signatures
5. Broadcast when ready (and unlocked if time-locked)
6. Monitor confirmation status

## 🛡 Security Notes
- This is an early-stage project; not yet audited.
- Never expose private keys in the browser—prefer wallet connectors (future roadmap).
- Enforce minimum Algorand balance to avoid accidental account closure.

## 🗺 Roadmap (Suggested Next Steps)
- [ ] Wallet provider integration (Pera / Defly / Web Wallet)
- [ ] Offline signing flow
- [ ] Transaction simulation / dry-run
- [ ] Persistent storage (local encryption or backend)
- [ ] Unit + integration test suite
- [ ] Smart contract TEAL templates (for advanced constraints)
- [ ] UI signer invite links

## 🤝 Contributing
Contributions welcome once base is stabilized. Planned: add `CONTRIBUTING.md` with commit style, branching, and review process.

## 📄 License
License to be defined (MIT recommended). Add a `LICENSE` file before public release.

## 🙏 Acknowledgements
- Algorand Developer Docs
- AlgoNode for public endpoints

---
Made for learning & secure collaborative asset management on Algorand.
