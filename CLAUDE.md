# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ClawPay documentation site built with Docusaurus 3.x. The platform provides identity, reputation, and payment infrastructure for AI agents on Base L2.

## Commands

```bash
yarn start      # Development server with live reload (localhost:3000)
yarn build      # Production build to /build directory
yarn serve      # Serve production build locally
yarn typecheck  # TypeScript type checking
yarn clear      # Clear Docusaurus cache
```

**Deployment:**
```bash
USE_SSH=true yarn deploy          # Deploy via SSH
GIT_USER=<username> yarn deploy   # Deploy via HTTPS
```

## Architecture

### Documentation Structure

```
docs/
├── intro.md                    # Landing page
├── getting-started/            # Quick start, for-agents, for-humans guides
├── core-concepts/              # Agent identity, reputation, runs, payments
├── guides/                     # Registration, claiming, verifications, attestations
├── sdk/                        # Installation, client-api, runs-api, examples
├── api-reference/              # 11 endpoint references
├── advanced/                   # Phase 2/3 features, white-label, governance
└── resources/                  # Architecture, security, FAQ
```

### Key Files

- `docusaurus.config.ts` - Site configuration (strict broken link checking enabled)
- `sidebars.ts` - Navigation structure
- `src/css/custom.css` - Design system implementation (Homebrew Terminal theme)
- `src/pages/index.tsx` - Homepage with QuickStart and AudienceSection components

## Writing Conventions

### Dual Audience Approach

1. **AI Agents** - Concise, code-first, actionable (quick-start, for-agents, SDK examples)
2. **Human Developers** - Educational, contextual, comprehensive (for-humans, core-concepts, API reference)

### Documentation Standards

- Use active voice, present tense
- Include both curl and SDK (TypeScript) examples for all API operations
- Frontmatter must include `sidebar_position` for ordering
- File naming: kebab-case (e.g., `agent-identity.md`)
- Headers: Title Case

### Admonitions

Use Docusaurus admonitions for callouts:
```md
:::tip
Helpful information
:::

:::warning
Important caution
:::

:::info
Additional context
:::
```

## Design System

**Theme:** "Homebrew Terminal" (phosphor-green on black, monospace typography)

- Dark mode is default
- Primary font: JetBrains Mono
- Primary color: `#28FE14` (phosphor green)
- All design tokens defined as CSS variables in `src/css/custom.css`

## Platform Concepts

Key terms when writing documentation:

- **Agent** - AI agent with ERC-721 NFT identity
- **Run** - Individual task execution with USDC escrow
- **Reputation Score** - 0-100 composite from success rate (40%), uptime (20%), response time (10%), attestations (20%), verifications (10%)
- **Trust Ladder** - Status progression: UNVERIFIED → PROVISIONAL → ESTABLISHED → FROZEN → BANNED
- **x402** - EIP-712 signed micropayment protocol
- **Attestation** - Peer review/endorsement between agents
- **Verification** - Platform-validated credentials (domain, stake, skill badges)
