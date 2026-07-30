import type { PortfolioContent } from "./types";

/**
 * Single source of truth for portfolio copy.
 * Search for TODO_PORTFOLIO to find facts that still need real values.
 */
export const portfolio: PortfolioContent = {
  person: {
    name: "Sam Parhimchik",
    shortName: "Sam",
    brandName: "parhim",
    location:
      "US citizen · Remote preferred · Open to relocation within the United States",
    currentLocation: "Currently based in Los Angeles",
    email: "s@parhim.dev",
    centralMessage:
      "Hands on engineering manager with a senior product engineering background in fintech, blockchain infrastructure, developer tooling, and AI enabled delivery.",
    supportingMessage:
      "I lead small cross functional teams from product discovery through implementation and measurement while remaining technically involved in architecture, critical code, analytics, and developer infrastructure.",
    roleBadge: "Engineering Manager @ Orca · Aug 2024–Jul 2026",
    photoSrc: "/images/me.png",
    photoAlt: "Portrait of Sam Parhimchik",
    resumeHref: "/Resume2024.pdf",
    resumeFilename: "Sam-Parhimchik-Resume.pdf",
    canonicalUrl: "https://parhim.dev/",
  },

  social: [
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/parhim/",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sam-parhimchik-b4a88a106/",
    },
    {
      id: "email",
      label: "Email",
      href: "mailto:s@parhim.dev",
    },
  ],

  nav: [
    { id: "experience", label: "Experience", href: "#experience" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "contact", label: "Contact", href: "#contact" },
  ],

  experience: [
    {
      id: "orca",
      company: "Orca",
      companyUrl: "https://www.orca.so",
      location: "Los Angeles | New York | Miami",
      startDate: "Aug 2024",
      endDate: "Jul 2026",
      roles: ["Senior Software Engineer", "Engineering Manager"],
      progression: {
        from: "Senior Software Engineer",
        to: "Engineering Manager",
        fromStart: "Aug 2024",
        fromEnd: "Mar 2025",
        toStart: "Mar 2025",
        toEnd: "Jul 2026",
      },
      summary:
        "Solana's premier liquidity layer. Hands on Engineering Manager leading a small product team across discovery, delivery, analytics, partner integrations, and public developer tooling.",
      featured: true,
      logoSrc: "/images/logos/orca.png",
      teamSize:
        "Managed three engineers · led cross functional product team with one designer",
      impactBullets: [
        "Senior Software Engineer → Engineering Manager while leading a team of three engineers and one product designer",
        "Owned discovery, prioritization, planning, delivery, and post release evaluation for liquidity and trading products",
        "Shipped public Solana SDKs (@orca-so/tx-sender, orca_tx_sender) integrated into the Whirlpools ecosystem",
        "Built Mixpanel instrumentation and funnels; used behavioral analysis to improve concentrated liquidity deposit retention",
      ],
      managementEvidence: {
        title: "People management",
        bullets: [
          "Hiring and interviewing for engineering roles",
          "Regular one on ones and performance feedback with direct reports",
          "Career development planning and coaching for engineers on the team",
          "Project staffing and cycle planning across engineering and design",
          "Delivery risk management during partner integrations and product launches",
          "Team process improvements including LLM assisted TDD and PR review workflows",
          "Collaboration with leadership on priorities, resourcing, and partner opportunities",
        ],
      },
      accordions: [
        {
          id: "team-product",
          title: "Team and product ownership",
          body: [
            "Managed three engineers and led a cross functional product team with one designer. Owned discovery, prioritization, planning, delivery, and post release evaluation.",
            "Led Wavebreak — Orca's meme token trading platform — from market research and user interviews through shipping, including infrastructure for vanity key generation.",
          ],
        },
        {
          id: "technical",
          title: "Technical contribution",
          body: [
            "Designed and shipped public TypeScript and Rust transaction SDKs. Remained involved in architecture, implementation, integration, and partner delivery.",
          ],
          bullets: [
            "Authored @orca-so/tx-sender (TypeScript) with priority fees, Jito tips, compute unit estimation, and retry logic",
            "Contributed companion Rust crate orca_tx_sender in the same public monorepo",
            "Integrated transaction tooling within the orca-so/whirlpools SDK ecosystem",
          ],
          links: [
            {
              label: "GitHub: orca-so/tx-sender",
              href: "https://github.com/orca-so/tx-sender",
              analyticsEvent: "sdk_github_click",
            },
            {
              label: "npm: @orca-so/tx-sender",
              href: "https://www.npmjs.com/package/@orca-so/tx-sender",
              analyticsEvent: "sdk_npm_click",
            },
            {
              label: "crates.io: orca_tx_sender",
              href: "https://crates.io/crates/orca_tx_sender",
              analyticsEvent: "sdk_crates_click",
            },
            {
              label: "Whirlpools (tx-sender PR)",
              href: "https://github.com/orca-so/whirlpools/pull/667",
              analyticsEvent: "sdk_whirlpools_pr_click",
            },
          ],
        },
        {
          id: "analytics",
          title: "Analytics and outcomes",
          body: [
            "Built Mixpanel instrumentation, funnels, and dashboards. Used behavioral analysis to identify abandonment and retention opportunities in liquidity workflows.",
          ],
        },
      ],
    },
    {
      id: "openhaus",
      company: "OpenHaus",
      companyUrl: "https://openhaus.ca",
      location: "Vancouver, BC",
      startDate: "Jan 2022",
      endDate: "2024",
      roles: ["Technical Founder · Part time"],
      summary:
        "Commission-free real estate platform I co-founded — zero realtor commissions, owner-empowered listings, and end-to-end deal tooling from offer flow through closing. I owned the full stack as technical founder: product, backend, infrastructure, and go-to-market surfaces.",
      featured: false,
      spotlight: true,
      logoSrc: "/images/logos/openhaus.png",
      highlights: [
        "Technical founder owning product vision, full-stack development, infrastructure, and deployment",
        "Facilitated over $25 million in active property listings on the platform",
        "Built OfferFlow, live messaging, scheduling, KYC, and MLS listing distribution to Realtor.ca, Zillow, and REW",
        "Integrated automated property valuation estimates through offerland.ca; CI/CD via GitHub Actions on AWS",
        "Demonstrates zero-to-one ownership — the same outcome-driven approach I bring to engineering leadership",
      ],
      technologies: [
        "React",
        "Recoil",
        "Node.js",
        "PostgreSQL",
        "Docker",
        "AWS",
        "Stripe",
        "Mapbox",
      ],
    },
    {
      id: "psyfi",
      company: "PsyFi",
      location: "Los Angeles, CA",
      startDate: "Mar 2022",
      endDate: "Aug 2024",
      roles: ["Senior Full Stack Engineer"],
      summary:
        "Core product engineer for PsyFi and the PsyOptions protocol — built the primary surfaces for options trading, token launches, liquidity management, airdrops, staking, and mobile lending across the Solana DeFi stack.",
      featured: false,
      logoSrc: "/images/logos/psy.png",
      highlights: [
        "Built and shipped core PsyOptions trading experiences — American-style options on Solana including minting, collateral management, and order flow UX",
        "Designed and built Fusion — collateralized options airdrops using Merkle trees for claim verification at protocol scale",
        "Led frontend development of Armada — LBP curve auctions for token launches and CLMM vaults built on Orca Whirlpools; CLMM vaults reached over $1M TVL without marketing",
        "Built a white-label staking frontend used by large Solana teams including Bonk, with over $25M in staked assets",
        "Led DeMUX — tokenomics revenue allocation tooling used by multiple Solana teams",
        "Ported PsyLend borrow/lend flows to React Native days after Solana Mobile launch (Pyth / Switchboard oracles, DOV collateral)",
      ],
      technologies: [
        "TypeScript",
        "React",
        "Next.js",
        "React Native",
        "Rust",
        "Anchor",
        "Solana",
        "PsyOptions",
        "Orca Whirlpools",
      ],
    },
    {
      id: "ontraccr",
      company: "OnTraccr",
      location: "San Francisco, CA",
      startDate: "Aug 2020",
      endDate: "Mar 2022",
      roles: ["Full Stack Engineer"],
      summary:
        "First engineer on a SaaS platform for construction contractors — labor tracking, forecasting, data sharing, and automated workflows.",
      featured: false,
      logoSrc: "/images/logos/ontraccr.png",
      highlights: [
        "Built timecard management with dynamic OT and pay calculation",
        "Designed and implemented end-to-end multi-stage timecard approval plus budget and payroll analysis — core product features",
        "Developed core React Native mobile features including dynamic forms, guides, and document center",
      ],
      technologies: [
        "React",
        "Redux",
        "React Native",
        "Node.js",
        "Hapi",
        "MySQL",
        "AWS",
        "Socket.io",
      ],
    },
    {
      id: "atlas-one",
      company: "Atlas One",
      location: "San Francisco, CA",
      startDate: "Oct 2020",
      endDate: "Jan 2021",
      roles: ["Full Stack Engineer (Contract)"],
      summary:
        "Research portal for asset-backed digital securities with live pricing and a composite index.",
      featured: false,
      logoSrc: "/images/logos/atlas.webp",
      highlights: [
        "Designed and developed the research portal for digital securities offerings",
        "Built cron jobs that pull live price data from issuers and calculate an index from historical token price changes",
      ],
      technologies: [
        "React",
        "Redux",
        "Node.js",
        "Express",
        "Keystone",
        "PostgreSQL",
        "GraphQL",
        "CircleCI",
      ],
    },
    {
      id: "wizehire",
      company: "WizeHire",
      location: "San Francisco, CA",
      startDate: "May 2020",
      endDate: "Aug 2020",
      roles: ["Software Engineer (Contract)"],
      summary:
        "Hiring platform work spanning customer support workflows and automated engineer onboarding infrastructure.",
      featured: false,
      logoSrc: "/images/logos/wize.png",
      highlights: [
        "Built job-posting management components that sped up customer and support workflows",
        "Automated VM development stack — reduced new-engineer environment setup from about a week to a few minutes",
      ],
      technologies: ["React", "Django", "PHP", "Jenkins", "GCP", "Bash"],
    },
    {
      id: "philips",
      company: "Philips",
      location: "Vancouver, BC",
      startDate: "May 2019",
      endDate: "May 2020",
      roles: ["Software Developer"],
      summary:
        "Distributed smart senior-home system — IoT device integration, event handling, and facility monitoring dashboards.",
      featured: false,
      logoSrc: "/images/logos/philips.png",
      highlights: [
        "Integrated third-party IoT devices and built apps to manage them and handle events",
        "Built responsive dashboard components for monitoring device status across facilities",
        "Mentored interns and new hires in a team of about ten while helping scale the product",
      ],
      technologies: [
        "Node.js",
        "Angular",
        "TypeScript",
        "Python",
        "Kubernetes",
        "RabbitMQ",
        "MySQL",
        "DynamoDB",
        "AWS S3",
      ],
    },
    {
      id: "terramera",
      company: "Terramera",
      location: "Vancouver, BC",
      startDate: "Sep 2017",
      endDate: "Aug 2018",
      roles: ["Software Engineer"],
      summary:
        "AgTech engineering across data pipelines, internal analytics dashboards, plant imaging hardware software, and computer vision.",
      featured: false,
      logoSrc: "/images/logos/terramera.png",
      highlights: [
        "Built cron-activated inventory download jobs across major retailers into PostgreSQL, saving hours of weekly manual work for sales analysts",
        "Developed statistical and administrative tools for an internal dashboard used by sales and chemistry research teams",
        "Trained a stained-egg segmentation model with 96% accuracy",
      ],
      technologies: [
        "Vue.js",
        "D3.js",
        "Java",
        "PostgreSQL",
        "Docker",
        "Python",
        "Keras",
        "OpenCV",
        "MQTT",
      ],
    },
    {
      id: "iba",
      company: "IBA Group",
      location: "Minsk, Belarus",
      startDate: "Jul 2016",
      endDate: "Aug 2016",
      roles: ["Java Developer (Summer Internship)"],
      summary:
        "Android app for a supermarket network that scans passports via OCR to fill rewards documents.",
      featured: false,
      logoSrc: "/images/logos/iba.png",
      highlights: [
        "Built Android OCR flow using Google Vision and Tesseract for passport scanning",
      ],
      technologies: ["Java", "Android", "Maven"],
    },
  ],

  projects: [
    {
      id: "tx-sender",
      name: "Orca TX Sender",
      summary:
        "Public TypeScript and Rust SDKs for building and sending Solana transactions with priority fees, Jito tips, compute estimation, and retries.",
      problem:
        "Application developers need reliable, ergonomic abstractions for modern Solana transaction submission without reinventing fee estimation, tips, and confirmation logic.",
      contribution:
        "Designed, implemented, and shipped the public packages; integrated transaction tooling into the Whirlpools SDK ecosystem.",
      approach: [
        "TypeScript package @orca-so/tx-sender for build-and-send workflows",
        "Companion Rust crate orca_tx_sender",
        "Support for priority fees, Jito tips, address lookup tables, and compute-unit margins",
        "Documentation and testing oriented toward integration readiness",
      ],
      outcome: [
        "Published on npm and crates.io for public consumption",
        "Merged into the broader Orca developer tooling surface via whirlpools contributions",
      ],
      technologies: ["TypeScript", "Rust", "Solana Kit", "Solana"],
      links: [
        {
          label: "GitHub repository",
          href: "https://github.com/orca-so/tx-sender",
        },
        {
          label: "npm package",
          href: "https://www.npmjs.com/package/@orca-so/tx-sender",
        },
        {
          label: "Rust crate",
          href: "https://crates.io/crates/orca_tx_sender",
        },
      ],
      weight: "primary",
      relatedCompany: "Orca",
    },
    {
      id: "orca-liquidity-retention",
      name: "Improving liquidity deposit retention at Orca",
      summary:
        "Product leadership case study — discovery, analytics, and delivery to reduce abandonment in concentrated liquidity deposit workflows.",
      problem:
        "Users abandoned or failed to complete important concentrated liquidity workflows, limiting retention in a core liquidity product.",
      contribution:
        "Led discovery, analytics, prioritization, planning, implementation, and evaluation across engineering and design.",
      approach: [
        "Defined Mixpanel event instrumentation and built funnels for deposit and liquidity workflows",
        "Investigated behavioral patterns to identify abandonment points and form product hypotheses",
        "Scoped and delivered product changes with engineering and design; evaluated results after release",
      ],
      outcome: [
        "Instrumented key liquidity journeys with Mixpanel dashboards and funnels",
        "Used behavioral analysis to prioritize retention improvements in CLMM deposit flows",
      ],
      technologies: ["Mixpanel", "TypeScript", "React", "Solana"],
      links: [],
      weight: "primary",
      relatedCompany: "Orca",
    },
    {
      id: "openhaus",
      name: "openhaus.ca",
      summary:
        "Commission-free real estate platform for direct buyer–seller transactions. Product has since been sunset.",
      problem:
        "High transaction costs from realtor commissions and limited seller control over the sales process.",
      contribution:
        "Technical founder — built core product surfaces including messaging, offer flows, scheduling, KYC, and cloud deployment.",
      approach: [
        "Live messaging and step-by-step offer/counteroffer builder",
        "Scheduling and KYC integrations",
        "Backend integration with offerland.ca for automated property valuation estimates",
        "CI/CD via GitHub Actions; AWS deployment stack",
      ],
      outcome: [
        "Facilitated over $25 million in active property listings",
        "Reduced transaction costs by eliminating realtor commissions",
        "Product has since been sunset",
      ],
      technologies: [
        "React",
        "Recoil",
        "Node.js",
        "PostgreSQL",
        "Docker",
        "AWS",
        "Stripe",
        "Mapbox",
      ],
      links: [],
      imageSrc: "/images/projects/openhaus.png",
      imageAlt: "openhaus.ca property listing interface",
      weight: "primary",
      relatedCompany: "OpenHaus",
    },
    {
      id: "armada",
      name: "Armada and staking infrastructure",
      summary:
        "Solana token launch, liquidity management, and white label staking infrastructure — LBP auctions, CLMM vaults, and a staking frontend used by major teams.",
      problem:
        "Teams needed versatile ways to launch tokens, manage concentrated liquidity, and operate staking programs on Solana.",
      contribution:
        "Led frontend development for Armada and built a white label staking frontend used by large Solana teams including Bonk.",
      approach: [
        "Web app for LBP curve auctions and active concentrated liquidity management via Orca Whirlpools based vaults",
        "White label staking frontend supporting multiple protocol deployments",
      ],
      outcome: [
        "CLMM vaults reached over $1M TVL without marketing efforts",
        "Staking frontend supported over $25M in staked assets across partner deployments",
      ],
      technologies: ["TypeScript", "React", "Rust", "Solana", "Orca Whirlpools"],
      links: [],
      imageSrc: "/images/projects/armada.png",
      imageAlt: "Armada product interface screenshot",
      weight: "primary",
      relatedCompany: "PsyFi",
    },
    {
      id: "psyoptions",
      name: "PsyOptions Trading Platform",
      summary:
        "Core product surfaces for American-style options on Solana — minting, collateral, trading flows, and protocol integrations.",
      problem:
        "PsyOptions needed usable, production-grade interfaces for a complex on-chain options protocol — from minting and collateral management to order flow and portfolio views.",
      contribution:
        "Built and shipped primary PsyOptions trading experiences and related protocol integrations across the PsyFi product suite.",
      approach: [
        "Options minting and collateral management UX",
        "Trading and order flow interfaces on Solana",
        "Integration with PsyOptions American-style options protocol",
        "Extended into Fusion airdrops, staking, and lending surfaces across the same stack",
      ],
      outcome: [
        "Production options trading experiences used across the PsyFi ecosystem",
        "Foundation for Fusion airdrops and downstream DeFi products built on PsyOptions",
      ],
      technologies: ["TypeScript", "React", "Next.js", "Rust", "Anchor", "Solana", "PsyOptions"],
      links: [
        { label: "PsyFi app", href: "https://app.psyfi.io/" },
      ],
      weight: "archive",
      relatedCompany: "PsyFi",
    },
    {
      id: "wavebreak",
      name: "Wavebreak",
      summary:
        "Orca's meme token trading platform — product led development from market research and user interviews through shipping.",
      problem:
        "Meme token trading moves fast; the product needed to reflect real user behavior, market trends, and competitive dynamics without sacrificing engineering quality.",
      contribution:
        "Led product and engineering — market research, InsightsStream integration, user interviews, feature prioritization, and infrastructure including automated vanity key generation.",
      approach: [
        "Product decisions grounded in market research, trend analysis, and direct user interview feedback",
        "InsightsStream partnership for market intelligence",
        "CUDA vanity key grinding script on an on demand AWS GPU instance to control cost on expensive compute",
      ],
      outcome: [
        "Shipped a trading surface aligned with market timing and user validated flows",
        "Automated vanity key pipeline that spins up grinding only when needed",
      ],
      technologies: ["TypeScript", "React", "Solana", "CUDA", "AWS"],
      links: [],
      imageSrc: "/images/projects/wavebreak.png",
      imageAlt:
        "Wavebreak meme token trading platform showing token marketplace and premier launches",
      weight: "archive",
      relatedCompany: "Orca",
    },
    {
      id: "fusion",
      name: "Fusion — Decentralized Airdrop Platform",
      summary:
        "Mass airdrops of fully collateralized options on Solana with Merkle-tree claim verification.",
      problem:
        "No reliable decentralized platform for distributing options as airdrops, creating inefficiency and centralized control.",
      contribution:
        "Designed the architecture and built the web application for collateralized options airdrops on PsyOptions.",
      approach: [
        "PsyOptions American-style options protocol for minting",
        "Merkle trees for claim handling",
        "First-come, first-served mechanism for limited airdrops",
      ],
      outcome: [
        "Enabled mass airdrops for fully collateralized options on Solana assets",
      ],
      technologies: ["TypeScript", "Next.js", "Rust", "Solana", "PsyOptions"],
      links: [
        {
          label: "Documentation (deprecated)",
          href: "https://docs.psyfi.io/build-with-psyfi/fusion-airdropping-options-deprecated",
        },
      ],
      imageSrc: "/images/projects/fusion1.png",
      imageAlt: "Fusion airdrop platform interface",
      weight: "archive",
      relatedCompany: "PsyFi",
    },
    {
      id: "psylend-mobile",
      name: "PsyLend Mobile",
      summary:
        "React Native borrow/lending app for decentralized option vault positions on Solana.",
      problem:
        "Borrow/lending against DOV positions lacked a mobile experience when Solana Mobile launched.",
      contribution:
        "Led Android development and ported the lending front end to React Native days after Solana Mobile release.",
      approach: [
        "Borrow and lend flows with Pyth and Switchboard oracle price data",
        "Reserve ratio maintenance for leveraged DOV positions",
      ],
      outcome: [
        "Enabled mobile liquidity against DOV positions and USDC/SOL lending yield",
      ],
      technologies: ["React Native", "TypeScript", "Solana"],
      links: [
        { label: "Lending app", href: "https://app.psyfi.io/lending" },
      ],
      imageSrc: "/images/projects/psyfimob.png",
      imageAlt: "PsyLend mobile app screens",
      weight: "archive",
      relatedCompany: "PsyFi",
    },
    {
      id: "demux",
      name: "DeMUX",
      summary:
        "Tokenomics management web app for Solana DeFi protocol revenue allocation.",
      problem:
        "Projects needed flexible tools for holders to allocate protocol revenues toward buybacks, rewards, and related actions.",
      contribution: "Led development of the web application for revenue allocation strategies.",
      approach: [
        "Holder-driven allocation workflows for Solana DeFi protocols",
      ],
      outcome: ["Used by multiple teams building on Solana"],
      technologies: ["TypeScript", "React", "Solana"],
      links: [],
      imageSrc: "/images/projects/demux.png",
      imageAlt: "DeMUX tokenomics management interface",
      weight: "archive",
      relatedCompany: "PsyFi",
    },
    {
      id: "rps",
      name: "Decentralized Rock-Paper-Scissors",
      summary:
        "Personal project — trustless Rock-Paper-Scissors on Solana with an Anchor on-chain program, commit–reveal proofs, and a hot-wallet manager.",
      problem:
        "Classic RPS requires trust; on-chain play needs cheating resistance without poor wallet UX.",
      contribution:
        "Solo build of the Solana program (Anchor/Rust) and React front end — commit–reveal fairness, game state on-chain, and hot-wallet UX.",
      approach: [
        "Anchor program for game state and commit–reveal verification",
        "Hashed commitment scheme with random seeds",
        "Reveal phase for verifiable fairness",
        "Hot wallet manager to reduce signing friction",
      ],
      outcome: ["Playable trustless game at rockps.parhim.dev"],
      technologies: ["Rust", "Anchor", "React", "TypeScript", "Solana"],
      links: [{ label: "Play the game", href: "https://rockps.parhim.dev" }],
      imageSrc: "/images/projects/rps.png",
      imageAlt: "Decentralized Rock-Paper-Scissors interface",
      weight: "archive",
    },
    {
      id: "ontraccr-timecards",
      name: "Employee Timecard System",
      summary:
        "Live timecard submission, multi-stage approval, OT calculation, and payroll export for construction teams.",
      problem:
        "Timecards needed budgeting, role-based approval chains, task notes, and live sync across users.",
      contribution:
        "Designed and implemented the end-to-end approval system and live sync — a core OnTraccr feature set.",
      approach: [
        "Aggregated daily tasks with optional notes into timecards",
        "Dynamic pay periods with anchor days",
        "Submission and approval logging",
        "Socket.io for live updates across sessions",
      ],
      outcome: [
        "Enabled viewing, editing, approving timesheets and exporting payroll with granular data",
      ],
      technologies: ["React", "Node.js", "Socket.io", "MySQL"],
      links: [{ label: "OnTraccr", href: "https://ontraccr.com/" }],
      imageSrc: "/images/projects/ontraccr.png",
      imageAlt: "OnTraccr timecard system interface",
      weight: "archive",
      relatedCompany: "OnTraccr",
    },
    {
      id: "wize-env",
      name: "Automated Dev Environment VMs",
      summary:
        "One click GCP VM provisioning that cut engineer onboarding setup from about a week to minutes.",
      problem:
        "Multi language distributed systems made local setup fragile and time consuming for new hires.",
      contribution:
        "Built the Django API, frontend trigger, and bash provisioning for identical cloud instances.",
      approach: [
        "Templated Google Cloud compute instances",
        "Automated firewall setup from client IP",
        "nginx served SQL dumps for consistent data",
      ],
      outcome: [
        "Onboarding setup reduced from ~1 week to a few minutes",
        "Identical instances for dependency consistency with production",
      ],
      technologies: ["Django", "Bash", "nginx", "GCP"],
      links: [],
      imageSrc: "/images/projects/env.png",
      imageAlt: "Automated development environment setup interface",
      weight: "primary",
      relatedCompany: "WizeHire",
    },
    {
      id: "atlas-research",
      name: "Digital Securities Research Dashboard",
      summary:
        "Unified research portal and live index for asset-backed digital securities.",
      problem:
        "Issuers were fragmented across APIs and niche venues with no vetted research home for investors.",
      contribution:
        "Designed and developed the portal plus pricing/index cron pipelines.",
      approach: [
        "Graphs, analytics, news, and token directory",
        "Cron jobs for live trade data from multiple sources",
        "Running index from historical trading data",
      ],
      outcome: [
        "Subscription access to exports and financials in a single research surface",
      ],
      technologies: ["React", "Node.js", "Keystone", "GraphQL", "PostgreSQL"],
      links: [{ label: "Atlas One", href: "https://atlasone.ca/" }],
      imageSrc: "/images/projects/atlas_one.gif",
      imageAlt: "Atlas One research dashboard",
      weight: "archive",
      relatedCompany: "Atlas One",
    },
    {
      id: "wize-templates",
      name: "Job Template Duplication",
      summary:
        "Support tooling to duplicate job templates and deep-link them, saving hours of daily manual work.",
      problem:
        "Support had to manually copy qualifications and descriptions into empty templates.",
      contribution:
        "Shipped Django REST duplication API and React Router deep-linking.",
      approach: [
        "Replicate template structure while reusing shared features to limit DB growth",
        "Deep links for viewing and editing templates",
      ],
      outcome: ["Hours of daily support work saved via duplication and sharing"],
      technologies: ["Django", "React"],
      links: [],
      imageSrc: "/images/projects/template-dup.gif",
      imageAlt: "Job template duplication workflow",
      weight: "archive",
      relatedCompany: "WizeHire",
    },
    {
      id: "wize-invite",
      name: "Legacy Invite Workflow Port",
      summary:
        "Replaced a legacy PHP invite flow so customers no longer switched dashboards.",
      problem:
        "Candidates under a billing plan could only be invited from a legacy PHP dashboard.",
      contribution:
        "Wrote the Django REST API and React component with validation and error handling.",
      approach: [
        "New API covering the missing workflow",
        "React form with validation to retire legacy switching",
      ],
      outcome: [
        "Reduced product complexity and improved UX by consolidating into the modern dashboard",
      ],
      technologies: ["Django", "React", "PHP"],
      links: [],
      imageSrc: "/images/projects/invite.gif",
      imageAlt: "Candidate invite workflow",
      weight: "archive",
      relatedCompany: "WizeHire",
    },
    {
      id: "wize-tsv",
      name: "TSV Candidate Import",
      summary:
        "Format-tolerant TSV importer for bulk candidate onboarding used by customer support.",
      problem:
        "Import formats changed frequently; pipeline breaks blocked customer onboarding.",
      contribution:
        "Built a PHP TSV parser with format validation and auto-detection across sources.",
      approach: [
        "Regex-oriented parsing for large datasets",
        "Arbitrary column support and format validators",
        "Auto-detect formats such as Indeed and Breezy",
        "Documented on Slab",
      ],
      outcome: [
        "Bulk import without code changes for minor format shifts; hours of manual work removed",
      ],
      technologies: ["PHP"],
      links: [],
      weight: "archive",
      relatedCompany: "WizeHire",
    },
  ],

  capabilities: [
    {
      id: "product-engineering",
      title: "Product engineering",
      items: [
        "TypeScript",
        "React",
        "Frontend architecture",
        "Backend systems and APIs",
        "Mobile applications",
        "Dashboards",
        "User experience implementation",
      ],
    },
    {
      id: "systems",
      title: "Systems and infrastructure",
      items: [
        "Distributed systems",
        "Cloud infrastructure (AWS, GCP)",
        "Databases (PostgreSQL, MySQL, DynamoDB)",
        "Messaging (RabbitMQ, Socket.io)",
        "Containers and Kubernetes",
        "Deployment and CI/CD",
        "Reliability-minded delivery",
      ],
    },
    {
      id: "solana",
      title: "Solana and decentralized finance",
      items: [
        "Solana transactions and modern client APIs",
        "Public SDKs (@orca-so/tx-sender, orca_tx_sender)",
        "Integrations and partner tooling",
        "Liquidity products and CLMM workflows",
        "DeFi application development",
      ],
    },
    {
      id: "analytics",
      title: "Data and product analytics",
      items: [
        "Mixpanel",
        "Event instrumentation",
        "Funnels and cohorts",
        "Retention analysis",
        "Dashboard development",
        "Experiment planning",
        "Product insights",
      ],
    },
    {
      id: "ai",
      title: "AI enabled development",
      items: [
        "LLM assisted engineering workflows",
        "Structured context for code generation",
        "Automated test scaffolding and review",
        "Human in the loop validation",
      ],
    },
    {
      id: "leadership",
      title: "Leadership and product delivery",
      items: [
        "Engineering management",
        "Technical direction",
        "Cycle planning and scoping",
        "Prioritization",
        "Stakeholder communication",
        "Partner alignment and BD",
        "Cross-functional execution",
      ],
    },
  ],

  additionalExperience: [
    "Node.js / Express / Hapi",
    "Next.js",
    "React Native",
    "Redux / Recoil",
    "Vue.js",
    "Angular / AngularJS",
    "Django",
    "PHP",
    "Rust / Anchor",
    "Python / Keras / OpenCV",
    "Java / Android",
    "GraphQL",
    "D3.js",
    "Docker",
    "MQTT",
    "Jenkins / CircleCI / GitHub Actions",
  ],

  aiEngineering: {
    title: "AI accelerated engineering workflow",
    caseStudy: {
      title: "LLM assisted TDD and PR review at Orca",
      problem:
        "Growing product surfaces and partner deliverables increased test and review overhead without proportional headcount growth.",
      workflowBefore:
        "Engineers wrote tests manually after implementation. Pull request reviews relied on ad hoc checklists and reviewer memory of edge cases.",
      contextProvided:
        "Module boundaries, existing test patterns in the repo, acceptance criteria, and the full diff under review.",
      contextStructure:
        "Repo conventions, related test files, interface contracts, and task specific constraints bundled into structured prompts rather than open ended questions.",
      modelOutput:
        "Unit test scaffolds, edge case suggestions, and PR review comments highlighting risk, missing coverage, and consistency issues.",
      testingAndReview:
        "All generated tests run in CI. Engineers review assertions, fixtures, and async behavior before merge. Review comments are validated against the actual diff.",
      failureModes:
        "Overfit tests that mirror implementation too closely, missed race conditions in async Solana code, and occasional hallucinated APIs that do not exist in the codebase.",
      humanResponsibility:
        "Architecture decisions, merge approval, production behavior validation, and final judgment on test quality and review findings.",
      result:
        "Faster test coverage on new features and partner integrations without lowering the review bar. The workflow is used across the team for TDD assistance and PR review.",
    },
  },

  lookingFor:
    "I am looking for a hands on Engineering Manager, Tech Lead Manager, or Engineering Lead role where I can lead a small product or platform team while remaining involved in architecture, technical decisions, and critical implementation. I am particularly interested in fintech, blockchain infrastructure, developer tools, and applied AI products. I prefer remote work and am open to relocation within the United States.",

  education: [
    {
      id: "ubc",
      institution: "The University of British Columbia",
      institutionUrl: "https://ubc.ca",
      degree: "Bachelor of Science in Computer Science",
      startYear: "2015",
      endYear: "2020",
      awards: ["Outstanding International Student Award"],
      logoSrc: "/images/logos/ubc.webp",
      logoSrcDark: "/images/logos/ubc_white.webp",
    },
  ],
};
