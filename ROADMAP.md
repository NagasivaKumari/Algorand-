# AlgoSafe Roadmap

> This roadmap is iterative and may evolve. Contributions & suggestions welcome.

## ✅ Completed (Initial Phase)
- Core React + TypeScript scaffolding
- Multi-signature conceptual model (M-of-N abstraction)
- Time-lock transaction concept
- README restructure
- Repository flattening (removed nested git)

## 🟡 In Progress / Planned
| Area | Item | Priority |
|------|------|----------|
| Wallet | Integrate Algorand wallet connectors (Pera / Defly) | High |
| Security | Offline signing flow | High |
| Transactions | Transaction simulation / dry-run | High |
| Persistence | Local encrypted storage for drafts | Medium |
| Contracts | TEAL templates for advanced policies | Medium |
| DX | Jest + RTL test harness | High |
| CI | GitHub Actions (build, lint) | Medium |
| UX | Signer invitation links / QR | Medium |
| Docs | API / logic documentation | Medium |

## 🔮 Future Ideas
- Mobile-optimized signer approval view
- Threshold change governance flow
- Role-based spending limits
- Batch transaction builder
- Smart routing for fee optimization
- Multisig templates marketplace

## 🧪 Testing Strategy (Planned)
- Unit tests: utils & contracts logic
- Integration: multi-sig assembly & execution flow
- E2E (later): Cypress for signing scenarios

## 📊 Metrics (Future)
- Transaction success rate
- Avg confirmation time
- Multi-sig completion latency

## 🤝 Contributing to the Roadmap
Open an issue labeled `proposal` with:
- Problem / opportunity
- Proposed solution
- Risk / complexity notes

## 📅 Release Cadence (Target)
- Patch: ad hoc
- Minor: every 2–4 weeks
- Major: when architecture shifts

---
Feedback welcome. Help shape secure multi-sig on Algorand.
