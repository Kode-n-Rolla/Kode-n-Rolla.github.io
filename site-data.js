window.PORTFOLIO = {
  identity: {
    name: "Pavel Egin",
    alias: "Kode-n-Rolla",
    headline: "Penetration Tester | Web, API, AWS & AI Security",
    intro: "Offensive security specialist with 3+ years of experience in web and API penetration testing, AWS assessments, vulnerability validation, PoC development and security reporting. I combine a tester's mindset with hands-on security tooling in Rust, C# and Python.",
    availability: "Open to remote roles and contract engagements",
    location: "Armenia · Remote worldwide"
  },
  contact: {
    email: "pavel.egin@kodenrolla.com",
    linkedin: "https://www.linkedin.com/in/pavel-egin/",
    telegram: "https://t.me/kode_n_rolla",
    github: "https://github.com/Kode-n-Rolla"
  },
  services: [
    {
      icon: "[+]", category: "01 / TEST", name: "Web & API Penetration Testing",
      description: "Black-, grey- and white-box security testing, including authentication, authorization, business logic and API attack surfaces. Reproducible findings, impact assessment, remediation guidance and retesting.",
      skills: ["Web Apps", "REST APIs", "AuthN / AuthZ", "Burp Suite", "PoCs", "Reporting"]
    },
    {
      icon: "$_", category: "02 / ASSESS", name: "Cloud, Infrastructure & AI Security",
      description: "Security assessments of AWS configurations, permissions and exposed services, supported by hands-on reconnaissance and Linux/Windows penetration tests.",
      skills: ["AWS", "IAM", "S3", "Network Recon", "Linux", "Windows", "AI"]
    },
    {
      icon: "</>", category: "03 / RESEARCH", name: "Security Research & Tooling",
      description: "Manual analysis, focused scripting and custom tools for reconnaissance, vulnerability research and proof-of-concept development. Exploring security testing of LLM applications and AI agents.",
      skills: ["Rust", "C#", "Python", "Code Review", "Security Tooling", "AI Security Research"]
    }
  ],
  projects: [
    {
      id: "rolla-node", featured: true, number: "01", name: "rolla-node", type: "Rust / Network protocols",
      description: "An early-stage Rust project exploring bounded protocol frames and security-oriented P2P messaging architecture. Not yet a usable encrypted messenger.",
      tech: ["Rust", "Networking", "Protocol Design"], github: "https://github.com/Kode-n-Rolla/rolla-node", status: "Early development"
    },
    {
      id: "sara", featured: true, number: "02", name: "SARA", type: "Web reconnaissance / CLI",
      description: "An asynchronous web crawler with enumeration capabilities to support security research workflows.",
      tech: ["Python", "Web", "Reconnaissance"], github: "https://github.com/Kode-n-Rolla/sara", status: "v1.1"
    },
    {
      id: "shuka", featured: true, number: "03", name: "shuka", type: "Security research / Rust CLI",
      description: "An extensible CLI toolkit for Web2 and Web3 application analysis and security research.",
      tech: ["Rust", "Research", "CLI"], github: "https://github.com/Kode-n-Rolla/shuka", status: "v0.2.0"
    },
    {
      id: "scarlet", featured: false, number: "04", name: "SCARLET", type: "Smart contract reconnaissance",
      description: "CLI tool for mapping Solidity entry points, transfer sinks and trust boundaries during audit preparation; not an automatic vulnerability detector.",
      tech: ["Python", "Solidity", "Static Analysis"], github: "https://github.com/Kode-n-Rolla/scarlet", status: "v0.1.0"
    },
    {
      id: "hacking-time", featured: true, number: "05", name: "hacking_time", type: "Offensive security / Knowledge base",
      description: "A practical offensive security cheat-sheet library for tools, commands and testing workflows.",
      tech: ["PowerShell", "Pentesting", "Reference"], github: "https://github.com/Kode-n-Rolla/hacking_time", status: "Public repository"
    },
    {
      id: "iyasense", featured: false, number: "06", name: "IyaSense", type: "IoT / Desktop Development",
      description: "A plant-monitoring and irrigation prototype using ESP32 simulation, MQTT and a C#/.NET WPF dashboard.",
      tech: ["C#", ".NET", "WPF", "ESP32", "MQTT"], github: "https://github.com/Kode-n-Rolla/IyaSense", status: "In development"
    },
    {
      id: "token-risk", featured: false, number: "07", name: "Solana Token Risk Lens", type: "Full-stack / Security tooling",
      description: "A Rust/Axum and React dashboard for reviewing observable token risk signals.",
      tech: ["Rust", "Axum", "TypeScript", "React"], github: "https://github.com/Kode-n-Rolla/solana-token-risk-lens", status: "v0.1.0"
    },
    {
      id: "destor", featured: false, number: "08", name: "DeStor", type: "Smart contracts",
      description: "A Solana prototype for asset ownership and history records.",
      tech: ["Rust", "Solana", "Anchor"], github: "https://github.com/Kode-n-Rolla/destor", status: "Prototype"
    },
    {
      id: "reflex", featured: false, number: "09", name: "Reflex", type: "Smart contracts",
      description: "An Anchor-based incentive pool prototype with lifecycle tests.",
      tech: ["Rust", "Solana", "Anchor"], github: "https://github.com/Kode-n-Rolla/reflex", status: "Prototype"
    },
    {
      id: "cerebro", featured: false, number: "10", name: "Cerebro", type: "Backend / Learning project",
      description: "A Rust backend learning project with PostgreSQL, migrations, tracing and integration tests.",
      tech: ["Rust", "Actix", "PostgreSQL", "SQLx"], github: "https://github.com/Kode-n-Rolla/cerebro", status: "In progress"
    }
  ],
  about: {
    heading: "Methodology over checklists.",
    text: "I approach penetration testing as a structured investigation: map the attack surface, form hypotheses, validate security weaknesses and communicate the real impact. My background includes web and API testing, AWS assessments, secure code review, proof-of-concept development, reporting and retesting.",
    capabilities: ["Web / API pentesting", "AWS security", "Reconnaissance", "PoCs & reporting", "Secure code review", "Rust / C# tooling", "AI security"]
  },
  human: {
    enabled: true,
    heading: "Proof of Humanity.",
    intro: "There's more to life than writing code. Here's a little about the human behind the terminal.",
    favorites: [
      { label: "Favorite multiplayer", name: "Team Fortress 2" },
      { label: "Currently playing", name: "MOUSE: P.I. For Hire" }
    ],
    music: ["Red Hot Chili Peppers", "Motörhead", "Eminem", "Inner Circle"],
    comment: "Powered by coffee, vibe playlists and good engineering."
  }
};
