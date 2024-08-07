const projects = [
  {
    title: "Decentralized Rock-Paper-Scissors",
    value: [
      "Provides a trustless, decentralized version of the classic game on Solana",
      "Ensures fair play by leveraging verifiable proofs for transparent gameplay",
      "Enhances user experience with a hot-wallet manager",
    ],
    problem:
      "Traditional Rock-Paper-Scissors games require trust between players, which is challenging to establish in a decentralized setting due to the potential for cheating.",
    solution: [
      "Implemented a hashed commitment scheme where players submit hashed choices along with a random seed, ensuring choices remain secret until the reveal phase",
      "Used a reveal phase where players send proof of their choice by revealing their seed and choice, allowing for verification of fairness",
      "Developed a hot wallet system to streamline the user experience, enabling transactions without constant wallet prompts for signing",
    ],
    techStack: [
      "Rust, Anchor",
      "React, typescript",
      "Tailwind CSS for styling",
      "Solana/Web3.js for blockchain interactions",
    ],
    link: "https://rockps.parhim.dev",
    image: "images/projects/rps.png",
  },

  {
    title: "openhaus.ca",
    value: [
      "A commission-free real estate platform facilitating direct property transactions between buyers and sellers",
      "Facilitated over $25 million in active property listings",
      "Reduced transaction costs by eliminating realtor commissions",
    ],
    problem:
      "High real estate transaction costs due to realtor commissions and limited control for sellers over the sales process",
    solution: [
      "Developed a platform for commission-free real estate transactions",
      "Implemented live messaging and an intuitive offer/counteroffer flow system with a step-by-step builder",
      "Integrated scheduling and KYC capabilities for enhanced user experience",
      "Backend integration with offerland.ca for AI-driven property value estimates",
      "Automated CI/CD pipeline with GitHub workflows",
    ],
    techStack: [
      "React, recoil",
      "Node.js, PostgreSQL",
      "Docker",
      "AWS EC2, ECR, Amplify, S3, ELB, ElastiCache",
      "Stripe",
      "Mapbox",
      "GitHub workflows",
    ],
    link: "https://openhaus.ca",
    image: "images/projects/openhaus.png",
  },
  {
    title: "PsyLend Mobile App",
    value: [
      "Enables instant liquidity by allowing users to borrow against their positions in decentralized option vaults (DOVs)",
      "Provides the ability to lever up DOV positions, creating synthetic hedges against underlying price movements",
      "Offers a platform for lending assets like USDC and SOL to generate low-risk yield",
    ],
    problem: "Lack of a mobile app for decentralized borrow/lending platforms",
    solution: [
      "Led the development of the PsyLend mobile app for Android",
      "Implemented borrowing and lending functionalities using real time price data from pyth and switchboard oracles for maintaining reserve ratios",
      "Integrated user-friendly features to manage and monitor investments directly from mobile devices, increasing accessibility and convenience",
    ],
    techStack: ["React Native", "TypeScript", "Solana/Web3.js"],
    link: "https://app.psyfi.io/lending",
    image: "images/projects/psyfimob.png",
  },
  {
    title: "Fusion - Decentralized Airdrop Platform",
    value: [
      "Enables the creation of mass airdrops for fully collateralized options on top of any asset on Solana",
      "Features a first-come, first-served mechanism for limited airdrops",
    ],
    problem:
      "Lack of a decentralized and reliable platform for distributing options as airdrops, leading to inefficiencies and centralized control in token distribution.",
    solution: [
      "Built a fully decentralized platform on Solana using PsyOptions American-style options protocol to mint the options",
      "Using Merkle trees for handling claims",
    ],
    techStack: ["TypeScript", "Next.js", "Rust", "Solana/Web3.js"],
    link: "https://docs.psyfi.io/build-with-psyfi/fusion-airdropping-options-deprecated",
    image: "images/projects/fusion1.png",
  },
  {
    title: "Armada - Solana Token Launch and Liquidity Management Platform",
    value: [
      "Supports token launches using LBP (Liquidity Bootstrapping Pool) curve auctions",
      "Manages actively concentrated liquidity in market making vaults built atop Orca",
      "CLMM vaults reached over $1M TVL without any marketing efforts",
    ],
    problem:
      "The need for a versatile platform capable of supporting new token launches and efficient liquidity management on the Solana blockchain.",
    solution: [
      "Led the front end development of a web app that integrates LBP curve auctions for token launches and manages liquidity through Orca's concentrated liquidity vaults",
    ],
    techStack: ["TypeScript", "React", "Rust", "Solana/Web3.js"],
    link: "",
    image: "images/projects/armada.png",
  },
  {
    title: "DeMUX - Tokenomics Management Web App",
    value: [
      "Facilitates management of tokenomics for projects on Solana",
      "Allows defi protocol token holders to allocate funds for specific purposes such as buybacks or rewarding holders",
      "Currently being used by multiple teams building on solana",
    ],
    problem:
      "Projects need a flexible tool to manage and execute decisions on how revenues are allocated and used within the DeFi ecosystem.",
    solution: [
      "Led the development of a web application that enables token holders to implement revenue allocation strategies",
    ],
    techStack: ["TypeScript", "React", "Solana/Web3.js"],
    link: "",
    image: "images/projects/demux.png",
  },
  {
    title: "Employee timecard system",
    value: [
      "Makes viewing/editing/approving employee timesheets possible",
      "Can track budget across all projects on a custom pay period",
      "Calculates overtime either daily or weekly",
      "Allows exporting employee payroll sheets with granular data",
    ],
    problem:
      "Employee timecards need to be budgeted accordingly, signed off and approved. The approval process needs to work through a custom chain of users/roles. Additionally, employees should be able to leave notes about the tasks they're working on. Finally, the data has to be live across all logged in users.",
    solution: [
      "Aggregated tasks with optional notes across a particular day into a timecard",
      "Dynamic calculation of pay periods based on settings with an anchor day",
      "Built a system for submitting and approving timecards with logging",
      "Set up socket.io to push updates across logged in users",
    ],
    techStack: [
      "Node/Express back-end",
      "Socket.io",
      "MySQL DB",
      "React front-end",
      "Moment.js/Luxon",
    ],
    link: "https://ontraccr.com/",
    image: "images/projects/ontraccr.png",
  },
  {
    title: "Research dashboard for digital securities",
    value: [
      "Organizes digital security offerings from different platforms into one comprehensive dashboard",
      "Index for live traded offerings",
      "Subscription-based access to csv export features and financials",
    ],
    problem:
      "The market of asset-backed digital securities is fairly new, hence it exists in a wild state where some issuers only appear on their respective APIs, and others on a multitude of niche trading platforms. There wasn't a platform that carefully vetted the issuers, giving investors a go-to place for doing investment research.",
    solution: [
      "Developed the research portal with graphs/analytics/news, list/grid token directory with insights based on selected industry",
      "Wrote cronjobs for pulling live trade data from multiple sources",
      "Wrote an algorithm for calculating a running index based on historical trading data",
    ],
    techStack: [
      "Backend using Node and Keystone + GraphQL",
      "React with material UI",
    ],
    link: "https://atlasone.ca/",
    image: "images/projects/atlas_one.gif",
  },
  {
    title: "Job template duplication ability",
    value: [
      "Made it possible for customer support to seamlessly duplicate templates saving hours of daily work",
      "Deeplinking made it easier for customer support to share templates saving even more time",
    ],
    problem:
      "WizeHire customer support team had no way of duplicating an existing job posting template, to make a similar one. They had to manually copy each qualification and description into an empty template",
    solution: [
      "Wrote a new Django REST Api that would replicate the structure of a template, while reusing existing template features (qualifications, descriptions, ...) to significantly reduce DB growth",
      "Added deep-linking support for those viewing/editing the job templates using React-Router",
    ],
    techStack: ["Django REST Apis", "React with material UI"],
    link: "",
    image: "images/projects/template-dup.gif",
  },
  {
    title: "Automated dev environment VM setup script",
    value: [
      "Allowed onboarding setup for new hires to take a couple minutes with one click instead of a week",
      "Enabled creating identical cloud instances for dependency consistency across the whole team and the production servers",
    ],
    problem:
      "It would generally take around a week for a new hire to get the development environment up and running. Due to the distributed, multi-lingual nature of the system, and the amount of controlled dependencies, figuring out what went wrong with some step took valuable time away from engineers.",
    solution: [
      "Built a Django REST Api that spins up a templated Google Cloud compute instance, along with a front end that makes it possible in one click.",
      "Wrote a complex environment setup bash script that works consistently by relying on identical VM instances",
      "The Django endpoint pipes clients ip data into the template settings making the firewall setup fully automated",
      "Serves SQL dump files for the VMs using nginx",
    ],
    techStack: ["Django", "Bash", "nginx", "gcloud cli"],
    link: "",
    image: "images/projects/env.png",
  },
  {
    title: "Porting a functional component from legacy system",
    value: [
      "Reduced the complexity of the product enabling the removal of the legacy system",
      "Eliminated the need for customers to switch between the new and legacy dashboards improving UX",
    ],
    problem:
      "WizeHire uses a legacy PHP system for some of the features. In this case, customers would have to switch to the legacy dashboard to invite candidates under a specific billing plan. Maintaining it adds unnecessary complexity to the overall product, requiring more engineering training.",
    solution: [
      "Wrote a new Django REST Api to add the missing workflow",
      "Built a React component with error handling and form data validation",
    ],
    techStack: ["Django REST Apis", "React with material UI", "PHP routing"],
    link: "",
    image: "images/projects/invite.gif",
  },
  {
    title: "TSV data import support",
    value: [
      "Made it possible for customer support to import candidates in bulk, saving hours of manual work",
      "Eliminated the need to change the code every time a small format change occurs",
    ],
    problem:
      "WizeHire customer support team must be able to import job candidates from a variety of different sources. The format of the import data changes frequently, but the if data pipeline stops flowing, they cannot onboard new customers.",
    solution: [
      "Developed a file parser that would handle changes to the format, leaving the workflow uninterrupted.",
      "Built a TSV parser in PHP, utilizing regex for faster performance on large datasets",
      "Added a format validator with support for arbitrary number of columns",
      "Automated the process of checking whichever format is being uploaded (old Indeed, Breezy, etc...)",
      "Documented the code with a detailed article on Slab",
    ],
    techStack: [
      "PHP string parsing",
      "Modulo-based arbitrary column data extraction",
    ],
    link: "",
    image: "",
  },
];
