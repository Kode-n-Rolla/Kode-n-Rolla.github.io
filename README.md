# Kode-n-Rolla — Personal Portfolio

Personal portfolio of **Pavel Egin (aka Kode-n-Rolla)**, an independent software developer and application security practitioner.

**Build it right. Think like an attacker.**

I approach software development with security integrated into the engineering workflow — from understanding trust boundaries and designing APIs to testing how systems behave under unexpected conditions.

**Live website:** https://kode-n-rolla.github.io/

## Focus Areas

- **Backend & API Development** — backend services, API integrations, automation and developer tools.
- **Application Security Testing** — web and API security reviews, cloud security assessment, authentication and authorization testing, vulnerability research and remediation guidance.
- **Security-Aware Engineering** — secure design, input validation, threat modeling, testing and code quality.

## Selected Projects

The portfolio highlights open-source work across software engineering and security research, including:

- **[rolla-node](https://github.com/Kode-n-Rolla/rolla-node)** — an early-stage security-oriented P2P messaging project built with Rust.
- **[Solana Token Risk Lens](https://github.com/Kode-n-Rolla/solana-token-risk-lens)** — a Rust/Axum and React dashboard for reviewing observable token risk signals.
- **[SCARLET](https://github.com/Kode-n-Rolla/scarlet)** — a CLI tool for Solidity protocol reconnaissance and attack-surface mapping.
- **[SARA](https://github.com/Kode-n-Rolla/sara)** — an asynchronous web crawler with enumeration capabilities.
- **[shuka](https://github.com/Kode-n-Rolla/shuka)** — an extensible security research toolkit.
- **[DeStor](https://github.com/Kode-n-Rolla/destor)** — a Solana-based prototype for asset ownership and history records.

Project availability and descriptions can be updated independently of the page layout.

## Technology

The website is a lightweight static application built with:

- HTML5
- CSS3
- Vanilla JavaScript
- GitHub Pages

No frontend framework, build pipeline or paid hosting is required.

## Portfolio Maintenance

Website content is managed in **`site-data.js`**, separately from the HTML structure and CSS styles.

You can edit:

| Field | Purpose |
|---|---|
| `identity` | Name, headline, introduction and availability |
| `contact` | Email, LinkedIn, Telegram and GitHub |
| `services` | Services and technical skills |
| `projects` | Project cards and visibility |
| `about` | Background and engineering approach |

To add a project, copy an existing entry in the `projects` array, assign a unique `id`, and update its content.

Set `featured: true` to display a project or `featured: false` to hide it. The layout automatically adapts to the number of visible projects.

## Local Development

Clone the repository:

```bash
git clone https://github.com/Kode-n-Rolla/Kode-n-Rolla.github.io.git
cd Kode-n-Rolla.github.io
```

Start a local server:

```bash
python -m http.server 8000
```

Open http://localhost:8000 in your browser.

## Deployment

The website is hosted on GitHub Pages and deployed from the `main` branch.

Changes committed to the published branch are deployed automatically through GitHub Pages.

## Contact

- **Website:** https://kode-n-rolla.github.io/
- **Email:** pavel.egin@kodenrolla.com
- **LinkedIn:** https://www.linkedin.com/in/pavel-egin/
- **Telegram:** https://t.me/kode_n_rolla
- **GitHub:** https://github.com/Kode-n-Rolla

---

Built by Pavel Egin · Kode-n-Rolla
