window.PORTFOLIO = {
  identity: {
    name: "Pavel Egin",
    alias: "Kode-n-Rolla",
    headline: "Software development, with security built into the workflow.",
    intro: "I build practical software, review applications for security weaknesses, and help teams move from an idea or issue to a clear technical solution.",
    availability: "Available for focused freelance projects",
    location: "Remote · Worldwide"
  },
  contact: {
    email: "pavel.egin@kodenrolla.com",
    linkedin: "https://www.linkedin.com/in/pavel-egin/",
    telegram: "https://t.me/kode_n_rolla",
    github: "https://github.com/Kode-n-Rolla"
  },
  services: [
    { icon: "</>", category: "01 / ENGINEER", name: "Backend & API Development", description: "Small backend services, API integrations, developer tools and practical automation. Clear scope, maintainable code, and sensible trade-offs.", skills: ["Rust", "C#/.NET", "REST APIs", "PostgreSQL", "Automation"] },
    { icon: "[+]", category: "02 / ASSESS", name: "Application Security Testing", description: "Focused reviews of application and API attack surfaces, authentication and authorization logic, and reproducible findings with remediation guidance.", skills: ["Web & API", "Cloud", "Threat Modeling", "Code Review", "PoCs"] },
    { icon: "{ }", category: "03 / IMPROVE", name: "Security-Aware Engineering", description: "Security isn't a final checkbox: I consider trust boundaries, error handling, input validation and misuse cases throughout the development workflow.", skills: ["Secure Design", "Testing", "Code Quality"] }
  ],
  projects: [
    { id: "rolla-node", featured: true, number: "01", name: "rolla-node", type: "Systems / Protocol design", description: "An early-stage Rust project exploring bounded protocol frames and security-oriented P2P messenger architecture. The current implementation is not yet a usable encrypted messenger.", tech: ["Rust", "Networking", "Protocol Design"], github: "https://github.com/Kode-n-Rolla/rolla-node", status: "Early development" },
    { id: "token-risk", featured: true, number: "02", name: "Solana Token Risk Lens", type: "Full-stack / Security tooling", description: "An explainable dashboard for reviewing observable Solana token risk signals. Rust/Axum API, React UI, Birdeye data integration and transparent scoring.", tech: ["Rust", "Axum", "React", "API"], github: "https://github.com/Kode-n-Rolla/solana-token-risk-lens", status: "v0.1.0" },
    { id: "scarlet", featured: true, number: "03", name: "SCARLET", type: "Security research / CLI", description: "A CLI tool for Solidity protocol reconnaissance: mapping entry points, transfer sinks and trust boundaries. It supports audit preparation, not automatic vulnerability detection.", tech: ["Python", "Solidity", "Static Analysis"], github: "https://github.com/Kode-n-Rolla/scarlet", status: "v0.1.0" },
    { id: "sara", featured: true, number: "04", name: "SARA", type: "Security research / CLI", description: "An asynchronous web crawler with enumeration capabilities.", tech: ["Python", "Web", "Static Analysis"], github: "https://github.com/Kode-n-Rolla/sara", status: "v1.1" },
    { id: "shuka", featured: true, number: "05", name: "shuka", type: "Security research / CLI", description: "Extensible CLI toolkit for Web2 and Web3 application analysis and security research.", tech: ["Rust", "Solidity", "Solana", "Decoder/Encoder"], github: "https://github.com/Kode-n-Rolla/shuka", status: "v0.2.0" },
    { id: "destor", featured: true, number: "06", name: "DeStor", type: "Smart contracts", description: "A Solana protocol for creating tamper-resistant ownership and history records for real-world assets, starting with second-hand vehicles", tech: ["Rust", "Solana", "Anchor"], github: "https://github.com/Kode-n-Rolla/destor", status: "Prototype" },
    { id: "reflex", featured: false, number: "07", name: "Reflex", type: "Smart contracts", description: "An Anchor-based incentive pool prototype with mock-market assumptions and lifecycle tests.", tech: ["Rust", "Solana", "Anchor"], github: "https://github.com/Kode-n-Rolla/reflex", status: "Prototype" },
    { id: "cerebro", featured: false, number: "08", name: "Cerebro", type: "Backend / Learning project", description: "An evolving Rust newsletter backend with subscriptions stored in PostgreSQL, migrations, tracing and integration tests, built while studying production-oriented backend practices.", tech: ["Rust", "Actix", "PostgreSQL", "SQLx"], github: "https://github.com/Kode-n-Rolla/cerebro", status: "In progress" },
  ],
  about: {
    heading: "A builder who thinks like a tester.",
    text: "My background in penetration testing shapes how I approach software: understand its boundaries, make assumptions explicit, and test what happens when systems are used in unexpected ways. I enjoy building the tools as much as breaking down the problems.",
    capabilities: ["Application security", "Backend APIs", "Rust & systems", "Security tooling", "Smart-contract research/development"]
  },
  human: {
    enabled: true,
    heading: "Proof of Humanity.",
    intro: "There's more to life than writing code. Here's a little about the human behind the terminal.",
  
    favorites: [
      {
        label: "Favorite multiplayer",
        name: "Team Fortress 2"
      },
      {
        label: "Currently playing",
        name: "MOUSE: P.I. For Hire"
      }
    ],
  
    music: [
      "Red Hot Chili Peppers",
      "Motörhead",
      "Eminem",
      "Inner Circle"
    ],
  
    comment: "Powered by coffee, vibe playlists and good engineering."
  }
};
