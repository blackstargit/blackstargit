export type Accent = "cyan" | "violet" | "amber";

export const profile = {
	name: "Muhammad Sadiq Raza",
	shortName: "Sadiq Raza",
	role: "AI Developer",
	tagline: "Building intelligent systems.",
	location: "Islamabad, Pakistan",
	email: "blackst1rmail@gmail.com",
	github: "https://github.com/blackstargit",
	linkedin: "https://linkedin.com/in/msadiqraza",
	huggingface: "https://huggingface.co/blackstarai",

	intro: "I build intelligent systems — machine-learning pipelines, autonomous AI agents, and the real-time infrastructure that feeds them. My work sits where AI meets cybersecurity, with a decade's worth of side-quests through full-stack web and blockchain along the way.",
	about: [
		"I'm an AI developer. Most of my day is spent teaching software to reason over messy, real-world signals — language, telemetry, network traffic — and to act on what it finds.",
		"Right now I'm the Research Officer for AI at PAF Cyber Command, where my job is to make sure artificial intelligence is genuinely leveraged across the team's work, not bolted on. Before that I engineered real-time analytics systems at NASTP and shipped AI, blockchain, and web products at Alphabase.",
		"I care about clean, modular, well-documented code, and about systems that hold up when they meet real data and real users.",
	],
};

export type SkillGroup = {
  label: string;
  accent: Accent;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "AI / Machine Learning",
    accent: "cyan",
    items: [
      "PyTorch",
      "TensorFlow",
      "NLP & Transformers",
      "LLM agents (RAG, multi-agent)",
      "Ollama / llama.cpp",
      "Embeddings & clustering",
      "Explainable AI",
      "Computer vision & OCR",
    ],
  },
  {
    label: "Cybersecurity",
    accent: "violet",
    items: [
      "Offensive-security tooling",
      "VAPT automation",
      "OSINT analysis",
      "Autonomous security agents",
    ],
  },
  {
    label: "Web & Full-stack",
    accent: "amber",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js / FastAPI",
      "Redux Toolkit & RTK Query",
      "Tailwind / shadcn/ui",
    ],
  },
  {
    label: "Data & Real-time",
    accent: "cyan",
    items: [
      "PostgreSQL / TimescaleDB",
      "ZeroMQ streaming",
      "Supabase",
      "Redis",
    ],
  },
  {
    label: "Blockchain / Web3",
    accent: "violet",
    items: ["Solidity", "Ethereum", "Web3.js", "Mempool & DeFi tooling"],
  },
  {
    label: "Infrastructure",
    accent: "amber",
    items: ["Docker", "CI/CD — GitHub Actions", "Nginx", "n8n automation"],
  },
];

export type Project = {
  slug: string;
  name: string;
  descriptor: string; // official professional wording
  tags: string[];
  status: string;
  accent: Accent;
  card: string; // short summary for the grid
  featured: boolean;
  hasDetail: boolean;
  links?: { label: string; href: string }[];
  stack: string[];
  overview?: string[];
  highlights?: { title: string; body: string }[];
};

export const projects: Project[] = [
  {
    slug: "cortex-strike",
    name: "Cortex Strike",
    descriptor: "Autonomous Offensive Security Co-Pilot & VAPT Agent",
    tags: ["AI Agents", "Cybersecurity", "LLM"],
    status: "In active development",
    accent: "violet",
    featured: true,
    hasDetail: true,
    stack: [
      "Python",
      "FastAPI",
      "React / TypeScript",
      "Local LLM",
      "PostgreSQL",
    ],
    card: "An AI agent that plans and runs multi-step penetration tests, chaining a large library of offensive-security tools through a single conversation.",
    overview: [
      "Cortex Strike turns penetration testing into a conversation. You describe a target; an AI agent plans the assessment, chooses the right tools from a large offensive-security library, runs them in sequence, and reasons over the results — recon feeding exploitation feeding follow-up, without a human wiring each step by hand.",
      "It runs on a locally-hosted open-source model, so nothing about a target ever leaves the machine. Around the agent sits a full product: authentication, persistent chat history, per-user tool selection, and a live view of each tool as it executes.",
    ],
    highlights: [
      {
        title: "Long tool-chains without losing the thread",
        body: "Multi-step assessments generate enormous tool output that quickly overwhelms a model's memory. Cortex Strike keeps full results in external storage and gives the agent an on-demand way to look them up, so it can run long chains and still quote exact findings accurately instead of hallucinating them.",
      },
      {
        title: "Built on a hardened foundation",
        body: "Rather than start from zero, it stands on a substantially re-architected and hardened open-source security toolkit — refactored for modularity, stability, and safe deployment.",
      },
      {
        title: "A real product, not a script",
        body: "Auth, saved conversations, per-user tool personalization, and streamed live execution progress make it something a security team could actually sit down and use.",
      },
    ],
  },
  {
    slug: "echo-shield",
    name: "Echo Shield",
    descriptor: "AI Social Narrative Analysis & Counter-Intervention Platform",
    tags: ["NLP", "Multi-agent AI", "OSINT"],
    status: "Deployed & in use",
    accent: "cyan",
    featured: true,
    hasDetail: true,
    stack: [
      "Python",
      "FastAPI",
      "Local LLM",
      "React / TypeScript",
      "NLP models",
    ],
    card: "A platform that reads public social-media discourse, detects emerging narratives with NLP, and drafts counter-narratives through a team of AI agents.",
    overview: [
      "Echo Shield watches public conversation across major social platforms and makes sense of it at scale. A multi-stage NLP pipeline reads each post — detecting language, entities, sentiment, and stance — then groups related content into the narratives quietly forming underneath the noise.",
      "Once a narrative surfaces, a small crew of AI agents studies it and drafts a considered counter-narrative response. The whole system runs its own machine-learning models locally rather than leaning on hosted APIs.",
    ],
    highlights: [
      {
        title: "Real ML, end to end",
        body: "Language detection, entity recognition, sentiment, stance, embeddings, and clustering all run as local model inference — including support for Urdu and Roman Urdu, not just English.",
      },
      {
        title: "Sees past text",
        body: "Media enrichment pulls text out of images and speech out of video before analysis, so a narrative carried in a screenshot or a clip isn't invisible to the pipeline.",
      },
      {
        title: "Agents that respond, not just report",
        body: "A multi-agent system moves from analysis to action — studying a narrative and drafting a strategic counter-response rather than stopping at a dashboard.",
      },
    ],
  },
  {
    slug: "current",
    name: "Current",
    descriptor: "Multi-Source Property Energy Billing & Automated Ledger System",
    tags: ["SaaS", "Full-stack", "Automation"],
    status: "Live in production",
    accent: "amber",
    featured: true,
    hasDetail: true,
    stack: [
      "Next.js",
      "NextAuth",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Tailwind",
    ],
    card: "A production billing platform for a commercial property with 100+ tenants — meter readings in, bills and reconciled payments out, mostly on autopilot.",
    overview: [
      "Current runs the money for a commercial property with more than a hundred tenants across two sites. Admins upload monthly meter readings; the system calculates tiered bills, generates PDFs, dispatches them by email and SMS, and tracks who has paid.",
      "The part that saves the most time is reconciliation: a companion app forwards payment SMS messages, and the backend parses each one, matches it to the right tenant and bill, and applies confident matches automatically — leaving only the ambiguous ones for a human to confirm.",
    ],
    highlights: [
      {
        title: "Payments that reconcile themselves",
        body: "Bank payment alerts are parsed and fuzzy-matched to tenants and bills automatically; high-confidence matches post on their own, the rest queue for quick review.",
      },
      {
        title: "Self-service for tenants",
        body: "Tenants get passwordless links to view and pay bills and to upload proof of payment — no accounts to manage.",
      },
      {
        title: "Careful with money",
        body: "Every amount is stored as an integer in the smallest currency unit, sidestepping the rounding errors that quietly break financial software.",
      },
    ],
  },
  {
    slug: "psx-portfolio-tracker",
    name: "PSX Portfolio Tracker",
    descriptor: "Pakistan Stock Exchange Portfolio Tracker & Allocation Planner",
    tags: ["Full-stack", "Fintech", "Data"],
    status: "Live",
    accent: "cyan",
    featured: true,
    hasDetail: true,
    links: [
      {
        label: "GitHub",
        href: "https://github.com/blackstargit/psx-portfolio-tracker",
      },
    ],
    stack: [
      "Next.js",
      "React",
      "Supabase",
      "TypeScript",
      "Recharts",
      "Tailwind",
    ],
    card: "A personal investment tracker for the Pakistan Stock Exchange with live prices, multi-lot holdings, and a monthly allocation planner — no paid market data.",
    overview: [
      "PSX Portfolio Tracker is an investment tracker built for the Pakistan Stock Exchange, where clean market data is hard to come by. It scrapes live prices straight from the exchange instead of paying for an API, tracks holdings lot by lot, and helps plan where each month's contribution should go.",
    ],
    highlights: [
      {
        title: "Live prices, zero API cost",
        body: "A custom scraper pulls prices directly from the exchange, cached in two layers so the app stays fast without hammering the source.",
      },
      {
        title: "Lot-level accuracy",
        body: "Holdings are tracked per lot, and a partial sale splits the lot automatically — so cost basis and gains stay correct.",
      },
      {
        title: "Plans, not just tracks",
        body: "A monthly investment wizard turns a target allocation across sectors into concrete buys, alongside dividend and stop-loss tracking.",
      },
    ],
  },
  {
    slug: "xai-diabetic-retinopathy",
    name: "Explainable DR Detection",
    descriptor: "Explainable AI for Diabetic Retinopathy Diagnosis",
    tags: ["Deep Learning", "Explainable AI", "Healthcare"],
    status: "Final-year project",
    accent: "violet",
    featured: true,
    hasDetail: false,
    links: [{ label: "GitHub", href: "https://github.com/blackstargit" }],
    stack: ["PyTorch", "Deep Learning", "XAI", "React"],
    card: "My final-year project: a deep-learning model that detects diabetic retinopathy from retinal scans and explains its reasoning in plain language.",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const detailProjects = projects.filter((p) => p.hasDetail);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export type MoreProject = {
  name: string;
  blurb: string;
  tags: string[];
};

export const moreProjects: MoreProject[] = [
  {
    name: "RAG Chatbot Platform",
    blurb:
      "A retrieval-augmented chatbot with its own backend and frontend, wired into a document knowledge base.",
    tags: ["RAG", "LLM"],
  },
  {
    name: "Health Plan Generator",
    blurb:
      "An AI healthcare-plan generator with a self-evaluation loop that critiques and improves its own output.",
    tags: ["AI", "Agents"],
  },
  {
    name: "Novel-to-EPUB Automator",
    blurb:
      "Resume-safe web scraping that compiles web novels into EPUBs and emails them when they're done. Dockerized end to end.",
    tags: ["Automation", "FastAPI"],
  },
  {
    name: "Zenith Reader",
    blurb:
      "A full-stack web-novel reader shipped across web and Android from a single codebase.",
    tags: ["Cross-platform", "Mobile"],
  },
  {
    name: "DeFi & Balancer Tooling",
    blurb:
      "Real-time mempool trackers and Balancer protocol experiments — arbitrage strategies and on-chain data parsing.",
    tags: ["Web3", "DeFi"],
  },
  {
    name: "Resource Dashboard",
    blurb:
      "GPU, CPU, and memory monitoring for the ML workstations behind the heavier AI projects.",
    tags: ["Infra", "Monitoring"],
  },
];

export type Job = {
  role: string;
  org: string;
  period: string;
  location: string;
  current?: boolean;
  points: string[];
};

export const experience: Job[] = [
  {
    role: "Research Officer — AI in Cybersecurity",
    org: "PAF Cyber Command",
    period: "Oct 2025 — Present",
    location: "Islamabad, Pakistan",
    current: true,
    points: [
      "The team's AI specialist — responsible for making sure AI is genuinely leveraged across every project, not bolted on.",
      "Lead dedicated AI initiatives alongside embedding machine learning into existing cyber work.",
    ],
  },
  {
    role: "Intern — Real-Time Systems",
    org: "National Aerospace Science & Technology Park (NASTP)",
    period: "Jul 2025 — 2026",
    location: "Islamabad, Pakistan",
    points: [
      "Engineered a high-throughput aerospace analytics database — benchmarked and tuned TimescaleDB to roughly 95% higher throughput than the alternatives.",
      "Built a low-latency telemetry ingestion pipeline on ZeroMQ, validated at a sustained 100,000 messages per minute under stress.",
      "Designed the time-series data model, partitioning, and retention strategy, plus a cross-language UI for working with aircraft statistics.",
    ],
  },
  {
    role: "Junior Developer",
    org: "Alphabase",
    period: "Jul 2024 — Jun 2025",
    location: "Islamabad, Pakistan",
    points: [
      "Shipped 7+ production modules across AI, blockchain, and web — owning features from design through CI/CD.",
      "Architected RAG retrieval pipelines and integrated LLM APIs, cutting average query latency by 40% through prompt optimization.",
      "Built WebSocket mempool trackers for DeFi workflows and orchestrated multi-cloud automation with n8n, doubling internal throughput.",
    ],
  },
  {
    role: "Freelance Full-Stack Developer",
    org: "Fiverr",
    period: "Feb 2024 — Jun 2024",
    location: "Remote",
    points: [
      "Delivered 20+ business and e-commerce sites with React/Next.js and custom WordPress, focused on performance and conversion.",
      "Built NFT marketplace features — wallet integration, mint and listing flows, and smart-contract interaction pipelines.",
    ],
  },
  {
    role: "Web Developer",
    org: "Sigma Engineering Associates",
    period: "Jun 2023 — Oct 2023",
    location: "Taxila, Pakistan",
    points: [
      "Built the company's first dashboard and established its online presence.",
    ],
  },
];

export const education = {
  degree: "Bachelor's, Computer Software Engineering",
  school: "National University of Sciences & Technology (NUST)",
  period: "2021 — 2025",
  grade: "Grade: A",
};

export const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];
