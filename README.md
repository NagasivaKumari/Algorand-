# AlgoSafe Monorepo Root

This repository hosts the **AlgoSafe** application (multi-signature + time-locked Algorand wallet UI) located in the `algosafe/` directory.

## Repository Layout
```
./
  algosafe/        # React + TypeScript dApp (main application)
  src/             # (Optional root-level placeholder or shared code for future expansion)
  ROADMAP.md       # High-level roadmap
  LICENSE          # MIT License
  CONTRIBUTING.md  # Contribution guidelines
  CODE_OF_CONDUCT.md
  .env.example     # Environment variable example
  .github/         # Issue / PR templates and funding config
```

## Quick Start (Application)
```
cd algosafe
npm install
npm start
```
The dev server will run on http://localhost:3000

## Key Features (See detailed README in `algosafe/`)
- Multi-signature (M-of-N) transaction coordination
- Time-lock scheduling (delayed execution)
- Threshold signer logic & approval workflow
- Algorand TestNet/MainNet support (AlgoNode endpoints)
- Roadmap-driven expansion (wallet integrations, offline signing, TEAL templates)

## Why Separate Folder?
`algosafe/` encapsulates the dApp allowing future additions (e.g., CLI tools, smart contract build pipeline, audit scripts) at the root without disrupting the frontend.

## Contributing
See `CONTRIBUTING.md` for branching, commit message format, and workflow.

## License
MIT — see `LICENSE`.

## Next Enhancements (Planned)
- Add architecture doc (`docs/ARCHITECTURE.md`)
- Wallet connector integrations
- CI workflow for build + (future) tests

## Ecosystem Mapping (Electric Capital)
If you plan to submit this project to the Electric Capital `crypto-ecosystems` repository, a prepared snippet is available in `electric-capital-snippet.toml`.

Submission steps summary:
1. Fork `electric-capital/crypto-ecosystems`
2. Locate the Algorand ecosystem TOML (e.g., `data/ecosystems/a/algorand.toml`)
3. Insert the appropriate block from the snippet (match existing style)
4. Commit with message: `feat(algorand): add AlgoSafe wallet project`
5. Open PR and respond to any reviewer feedback

Consider renaming this repository to `algosafe` before submission for clarity.

---
For the full application documentation, open `algosafe/README.md`.
