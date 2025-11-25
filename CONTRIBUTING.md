# Contributing to Next.js Starter

Thanks for taking the time to improve this starter! The goal of this repository is to provide a batteries-included yet lightweight baseline for Next.js 16 apps with PNPM, Tailwind CSS v4+, Next-Auth v5, and Docker. Follow the steps below to keep contributions consistent and easy to review.

## 1. Before You Start

- Read the [`README.md`](README.md) to understand the project goals.
- Review the [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md). All participants are expected to follow it in every project space.
- Check existing [issues](https://github.com/ehsanghaffarii/nextjs-starter/issues) and pull requests to avoid duplicates.

## 2. Development Environment

| Requirement | Minimum |
| --- | --- |
| Node.js | `>= 20` |
| PNPM | `>= 9` |
| Docker | Optional (for parity testing) |

### Setup

```bash
pnpm install
pnpm dev
# App runs at http://localhost:3000
```

### Available Scripts

```bash
pnpm lint        # ESLint (required before opening a PR)
pnpm typecheck   # TypeScript strict mode
pnpm test        # (add tests when they exist)
pnpm build       # Next.js production build
pnpm ci          # lint + typecheck + build (CI parity)
pnpm format      # Prettier
```

> If you add new scripts or tooling, update this file and the README accordingly.

## 3. Making Changes

1. **Fork** the repository (or create a feature branch if you have write access).
2. **Create a branch** using a descriptive name, e.g. `feat/api-rate-limits` or `fix/navbar-contrast`.
3. **Keep commits focused**. Use clear, present-tense messages. Conventional Commits are encouraged (`feat: add auth route`, `fix: handle proxy 500s`).
4. **Add tests or examples** when the change affects logic, APIs, or integrations.
5. **Update documentation** (README, comments, or inline docs) whenever behavior or configuration changes.

## 4. Submitting Pull Requests

Before opening a PR:

- Ensure `pnpm lint`, `pnpm typecheck`, and `pnpm build` succeed locally.
- Run Docker build/tests if your change affects containerization.
- Fill out the pull request template and link any related issues (`Fixes #123`).
- Be responsive to reviewer feedback; small follow-up commits are fine.

### Checklist

- [ ] Tests and linting pass locally.
- [ ] Docs/readme updated if needed.
- [ ] Screenshots or logs attached for UI or DX changes.
- [ ] No unrelated formatting or dependency churn.

## 5. Issue Reporting

- **Bug reports**: include reproduction steps, expected vs actual behavior, logs, and environment info (OS, Node, PNPM).
- **Feature requests**: describe the problem, why the existing starter does not cover it, and any constraints.
- **Security issues**: follow the [`SECURITY.md`](SECURITY.md) policy (do not open public issues for vulnerabilities).

## 6. Release & Maintenance Philosophy

This starter aims to stay close to the latest stable releases of Next.js, React, Tailwind, and Next-Auth. Contributions that simplify setup, improve DX, or harden production readiness are prioritized. Large framework-level opinionated changes (state management swaps, CSS frameworks) should be optional or documented so users can opt in.

Thank you for helping make this starter better!


