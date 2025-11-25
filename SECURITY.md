# Security Policy

We take the security of the Next.js Starter seriously. Thank you for responsibly disclosing vulnerabilities and helping us keep the template safe for everyone who builds on it.

## Supported Versions

| Version | Supported |
| --- | --- |
| `main` | ✅ Always supported |
| Tagged releases | ✅ Until a new tag replaces them |

Older commits are not maintained. Please test against the latest `main` branch before reporting issues.

## Reporting a Vulnerability

1. **Do not create a public issue** for security vulnerabilities.
2. Email `security@ehsanghaffarii.ir` with:
   - Description of the vulnerability and potential impact
   - Reproduction steps or proof-of-concept
   - Any logs, stack traces, or screenshots that help explain the issue
3. If email is unavailable, open a [GitHub Security Advisory](https://github.com/ehsanghaffarii/nextjs-starter/security/advisories/new) so the maintainers can discuss privately.

You will receive an acknowledgement within 72 hours, and updates will be provided as the investigation progresses.

## Disclosure Process

- Once the issue is confirmed, we will develop a fix, run `pnpm ci`, and validate Docker builds when relevant.
- A coordinated disclosure timeline will be agreed upon; we aim to release patches quickly but may delay public disclosure until a fix is available.
- You will be credited in the release notes unless you prefer to remain anonymous.

## Hardening Tips for Users

- Rotate environment secrets frequently and store them outside the repo.
- Use `pnpm audit` (or `pnpm audit --prod`) before deploying.
- Build production images using the provided `Dockerfile` to benefit from the hardened multi-stage setup.
- Enable Dependabot or Renovate to keep Next.js, Next-Auth, and Tailwind up to date.

Thank you for helping keep this project secure.


