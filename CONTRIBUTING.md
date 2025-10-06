# Contributing to AlgoSafe

Thank you for your interest in contributing! 🚀

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [Development Setup](#development-setup)
- [Branch Strategy](#branch-strategy)
- [Committing Rules](#committing-rules)
- [Pull Request Workflow](#pull-request-workflow)
- [Issue Guidelines](#issue-guidelines)
- [Testing](#testing)
- [Security](#security)

## Code of Conduct
This project follows the Contributor Covenant. By participating, you agree to uphold it. See `CODE_OF_CONDUCT.md`.

## Development Setup
```bash
npm install
npm start
```
Use TestNet while developing.

## Branch Strategy
- `main`: stable, deployable
- `feature/<name>`: new features
- `fix/<name>`: bug fixes
- `chore/<name>`: maintenance

## Committing Rules
Conventional Commit format:
```
<type>(optional-scope): <short summary>
```
Types: feat, fix, docs, style, refactor, test, chore, perf, build, ci.

Examples:
- `feat(wallet): add signer threshold selector`
- `fix(tx): correct round wait logic`

## Pull Request Workflow
1. Sync with `main`
2. Write/update tests (if available)
3. Lint & build locally
4. Open PR with clear description & screenshots (UI changes)
5. Address review feedback

## Issue Guidelines
Use templates when available. Provide:
- Summary
- Steps to reproduce (if bug)
- Expected vs actual
- Screenshots / logs

## Testing
Tests will be added (Jest + RTL). Future command:
```bash
npm test
```

## Security
Do not disclose vulnerabilities publicly. Email maintainer or open a private advisory (GitHub Security). Avoid committing keys.

## Attribution
Inspired by best practices from various open-source projects.
