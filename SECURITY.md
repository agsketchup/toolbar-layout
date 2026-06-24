# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in the **AGS Toolbar Layout** SketchUp
extension or in the [www.toolbarlayout.com](https://www.toolbarlayout.com)
website, please report it responsibly.

- **Email:** [agsketchup@proton.me](mailto:agsketchup@proton.me)
- **Preferred languages:** English, French
- **Please do not** open a public GitHub issue for security reports.

Include as much information as possible so we can reproduce and fix quickly:

- Affected component (extension version / website URL).
- Steps to reproduce, proof-of-concept, or exploit details.
- Impact you believe the issue has.
- Your name / handle if you want public acknowledgment.

## Supported Versions

Only the latest released version of the extension receives security fixes.
Older versions should be upgraded.

| Version | Supported          |
| ------- | ------------------ |
| 2.0.x   | Yes                |
| < 2.0   | No                 |

## Scope

In scope:

- The Ruby/JS source shipped inside `ags_toolbar_layout_*.rbz`.
- The `www.toolbarlayout.com` static website and its `.well-known/`,
  `_headers`, `robots.txt`, and Vercel configuration.

Out of scope:

- Vulnerabilities in SketchUp itself or in third-party extensions.
- Issues that require physical access to the user's machine.
- Reports based solely on automated scanners with no exploit chain.
- Social engineering, phishing, or denial-of-service attempts against
  shared infrastructure.

## Response Times

| Action                   | Target                  |
| ------------------------ | ----------------------- |
| Initial acknowledgment   | within 72 hours         |
| Triage / severity rating | within 7 days           |
| Fix or mitigation        | depends on severity     |

## Disclosure Policy

We follow coordinated disclosure:

1. You report privately via email.
2. We confirm, triage, and work on a fix.
3. Once a fix is released, we publish a security note and credit the
   reporter (with permission).

Please give us reasonable time to ship a fix before any public
disclosure. We aim to resolve critical issues within 30 days.

## Acknowledgments

Researchers who report valid vulnerabilities and follow this policy will
be listed below (with their consent).

<!-- Add entries as: - YYYY-MM-DD — Name / handle — short summary -->

_No entries yet._
