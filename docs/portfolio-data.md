# Portfolio Data — M Sadiq Raza

Source material for building a personal portfolio landing page. Compiled from the GitHub account `blackstargit` (primary/current dev account), `msadiqraza` (legacy/earlier account), the GitHub profile README at `github.com/blackstargit/blackstargit`, and LinkedIn content extracted via Tavily from `linkedin.com/in/msadiqraza` — see **Gaps** at the bottom for what's still unconfirmed.

**Contact:** msadiqraza18@gmail.com (private repos use `blackst1rmail@gmail.com` as commit email — likely a second/dev address)
**GitHub (primary):** https://github.com/blackstargit
**GitHub (legacy):** https://github.com/msadiqraza
**LinkedIn:** https://linkedin.com/in/msadiqraza
**Personal domain:** blackstario.com — user owns it; doesn't resolve yet because **this landing page is what will go live there**. Not a dead domain, just pre-launch.
**Location:** Islamabad, Pakistan

---

## Certifications (build agent: implement the section, keep it hidden/commented out for now)

User explicitly wants a Certifications section built into the page's code, but not rendered/visible yet — no certifications to list currently. Comment it out rather than omitting it, so it's a one-line toggle to enable later.

## Other Profiles (build agent: implement the section; content pending from user)

User wants a section listing other professional/technical profiles (e.g. Hugging Face). **Needed from user:** actual handles/URLs — Hugging Face at minimum, plus anything else they want listed. Do not include the unverified Kaggle profile found during research — user explicitly said not to add it.

---

## Employment History (source: user-provided LinkedIn export, confirmed directly)

⚠️ **Important framing note from user:** the LinkedIn "About" blurb below was written in 2025 and is deprecated — he no longer identifies as a "web developer," he identifies as an **AI developer**. Do not use that About text verbatim on the new site; it needs a rewrite reflecting his current AI-first identity (see Identity/Positioning below).

**Current role (confirmed by user, not yet on LinkedIn) — always refer to this as the "PAF Cyber Command role," not "PAF role":** **Research Officer — AI in Cybersecurity, PAF Cyber Command.** Start date: **October 15, 2025**. This is his current, present-day job and should be the lead/most prominent entry on the site.
- Scope (user's own words, keep concise on the site — no more detail than this): he is the team's AI expert, responsible for ensuring AI is leveraged across all of the team's projects, plus working on dedicated AI-specific initiatives.

**Experience timeline (most recent LinkedIn-listed role first):**

1. **Intern — National Aerospace Science & Technology Park (NASTP)**, Islamabad, Pakistan (on-site). Jul 2025 – (LinkedIn says "Present," but has now been superseded by the PAF role above — treat as Jul 2025–2026, confirm end date). Confirmed by user: this is the **same work as the "vehicle tracker" project** referenced in repo descriptions.
   - Engineered a high-throughput real-time aerospace analytics database: benchmarked PostgreSQL/TimescaleDB vs. InfluxDB/Prometheus, selected and tuned TimescaleDB — ~95% higher throughput in benchmarks.
   - Built an end-to-end low-latency ingestion pipeline using ZeroMQ for telemetry; validated 100K messages/min sustained ingestion under stress test.
   - Architected the time-series data model, partitioning, retention, and compression policies for real-time analytics plus long-term storage.
   - Built a cross-system (JS + Python) UI app for aircraft statistics manipulation.
   - Built ingestion/processing automation for data validation, backpressure handling, and fault recovery.
   - Did capacity planning, performance profiling, operational runbooks, and HA/scaling recommendations.
   - Skills tagged: Real-time (ZeroMQ), Data Streaming (FastAPI), +18 more.

2. **Junior Developer — Alphabase®**, Islamabad, Pakistan (hybrid). Jul 2024 – Jun 2025 (1 yr). This is the **"old job"** referenced earlier (the Zaplead/cold-email-generator work falls here).
   - Developed and shipped 7+ production modules spanning AI, blockchain, and web platforms; owned features design→CI/CD.
   - Architected RAG retrieval pipelines, integrated OpenAI APIs; vectorized prompt optimization reduced average query latency by 40%.
   - Built a chatbot for customer retention/sales, plus several sales-automation modules.
   - Built modular backend microservices using FastAPI, Docker, GitHub Actions.
   - Implemented WebSocket-based mempool trackers (Alchemy APIs); real-time transaction parsing/sync for DeFi workflows.
   - Integrated n8n to orchestrate multi-cloud automation (ingestion, ETL, notifications) — doubled operational throughput for internal processes.
   - Improved cross-platform (Linux/Windows) reliability, observability, and production debugging practices.

3. **Freelancer — Fiverr**, Remote. Feb 2024 – Jun 2024 (5 mos).
   - Delivered 20+ business/e-commerce websites (React/Next.js, custom WordPress themes), focused on responsive design, SEO, conversion optimization.
   - Built backend services/APIs (Node/Express, FastAPI patterns), integrated Stripe/PayPal, inventory sync.
   - Designed/launched NFT marketplace features: MetaMask wallet integration, mint/listing flows, smart-contract interaction pipelines.
   - Docker-based deployment/maintenance; client intake, proposals, milestone management — repeat business and positive reviews.

4. **Web Developer — Sigma Engineering Associates**, Taxila, Punjab, Pakistan (part-time, on-site). Jun 2023 – Oct 2023 (5 mos).
   - Built a basic dashboard and digitized the company; helped establish its online presence. (Node.js, CSS + 3 more skills tagged.)

**Note on Logmate:** not present in the pasted LinkedIn export — still unclear whether it was employment, a client, or a personal venture. Still a gap, see below.

## Education (confirmed)

**National University of Sciences and Technology (NUST)** — Bachelor's degree, Computer Software Engineering. Oct 2021 – Jul 2025. Grade: A. Skills tagged: Back-End Web Development, Database Development, +5 more.

## Certifications

None found or provided — confirmed as a genuine gap, not a research miss. Fine to omit a Certifications section on the page, or note "in progress" if that changes.

---

## Identity / Positioning

From the user directly + GitHub bio:
- **Primary field:** AI & Machine Learning
- **Also works in:** Cybersecurity (AI-driven security tooling — current job title is literally "Research Officer, AI in Cybersecurity"), Blockchain/DeFi
- **Current self-identity (user's explicit correction):** goes by **"AI developer"** now, not "web developer." The GitHub bio's "Full-Stack Developer" framing below and the 2025 LinkedIn "About" blurb are both outdated — the build agent should write fresh hero/about copy centered on AI/ML, with cybersecurity and full-stack/web as supporting range, not the headline.
- **Old self-description (GitHub bio, deprecated framing, kept for reference only):** "Full-Stack Developer passionate about the intersection of Artificial Intelligence, Cybersecurity, and Modern Web Ecosystems. Work ranges from building explainable AI models for healthcare to architecting decentralized finance protocols."
- **Stated philosophy:** "Writing clean, documented, and modular code."

**Tech stack (from GitHub bio + repos):**
- Languages: TypeScript, JavaScript, Python, Solidity, Java, C++, MATLAB
- Frameworks: React, Next.js, Node.js, FastAPI, Express
- AI/ML: PyTorch, TensorFlow, Ollama, explainable AI (XAI)
- Web3/DeFi: Ethereum, Balancer Protocol, Web3.js, Solidity
- Infra: Docker, Supabase, PostgreSQL, MongoDB, Netlify

---

## Flagship Projects (user's own picks — lead with these)

**Naming note for the build agent:** the two projects below have been deliberately renamed and stripped of deep technical/architectural detail for public presentation, per the user's direction. Use the names, official descriptors, and sanitized write-ups exactly as given — do not reintroduce the internal repo names (`narrative-monitoring`, `hexstrike`) or the removed technical specifics (exact model names, line-count refactor stats, infra hostnames/ports, upstream open-source project names, exact tool counts) anywhere on the public site.

### 1. Echo Shield — AI Social Narrative Analysis & Counter-Intervention Platform
⚠️ Deliberately generalized description — deep operational and architectural detail has been withheld by design; do not add more specificity than this without the user's sign-off.

**What it is:** An AI-powered platform that monitors public social media discourse across major platforms, uses natural-language processing to detect emerging narrative patterns (sentiment, stance, entities, multilingual content), and generates counter-narrative content through a multi-agent AI system.

**Stack:** Python/FastAPI backend, multi-platform scraping layer, locally-hosted open-source LLM for agentic reasoning, React/TypeScript frontend.

**Highlights:** Real local ML inference across a multi-stage NLP pipeline (not just calls to a hosted API) — sentiment, stance, entity recognition, and multilingual support (including Urdu/Roman Urdu), plus a multi-agent system that plans and drafts counter-narrative responses. Deployed and actively used internally.

### 2. Cortex Strike — Autonomous Offensive Security Co-Pilot & VAPT Agent
⚠️ Deliberately generalized description — deep technical/architectural detail has been withheld by design; do not add more specificity than this without the user's sign-off.

**What it is:** An autonomous AI agent that chains together a large library of offensive-security tools (reconnaissance, exploitation, OSINT) through a conversational interface, letting an LLM plan and execute multi-step penetration-testing workflows.

**Stack:** Python/FastAPI backend, React/TypeScript frontend (desktop-capable), locally-hosted open-source LLM, PostgreSQL.

**Highlights:** The standout engineering piece is a custom memory-management system that lets the agent run long, multi-step tool chains without losing track of results or exhausting the model's context window — solved by storing full tool output externally and giving the agent an on-demand lookup capability instead of stuffing everything into the prompt. Also includes full auth, persistent chat history, per-user tool personalization, and live streamed execution progress. Actively developed; built on a substantially re-architected and hardened open-source foundation rather than from scratch.

### 3. Pakistan Stock Exchange (PSX) Portfolio Tracker & Asset Allocation Planner
Public repo, excellent README — this is publication-ready as-is.
- **What it is:** Personal investment tracker for the Pakistan Stock Exchange (PSX). Multi-lot holdings tracking, live price scraping directly from `dps.psx.com.pk` (no paid market-data API), sector allocation planning with a monthly investment wizard, dividend tracking, stop-loss tracking.
- **Stack:** Next.js 16 (App Router), React 19, Supabase (Postgres + Auth + RLS), Tailwind CSS v4, shadcn/ui, Recharts, custom TypeScript scraper (cheerio), deployed on Netlify.
- **Notable engineering details:** two-level (in-memory + Supabase) price cache, Row Level Security on every table, splits a partial sell of a stock lot automatically.
- Repo: https://github.com/blackstargit/psx-portfolio-tracker

### 4. Current — Multi-Source Property Energy Billing & Automated Ledger System
Built for **Logmate — confirmed as a client engagement**, not an owned venture. This is the project previously tracked internally as `bill-automation`.

**What it does:** admins upload monthly meter readings (Excel) → tiered bill calculation → PDF generation → email/SMS dispatch → payment tracking (cash/bank transfer) → automated bank-SMS payment reconciliation (an Android app forwards SMS → backend parses and fuzzy-matches payments to tenants/bills → auto-applies high-confidence matches, queues the rest for review) → tenant self-service portal (payment proof upload, passwordless bill-pay links) → recovery/consumption/profitability reporting. Live in production for a commercial property with 100+ tenants across two sites.

**Stack:** Next.js 16 (App Router), NextAuth v5, Prisma + PostgreSQL (Supabase), Supabase Storage, PDF generation, email/SMS dispatch, Redis rate limiting, Tailwind + shadcn/ui.

**Status:** live in production with real tenant/payment data — the only one of the four flagship projects that's a shipped, currently-operated product with real users and real money, not a technical demo. Notable correctness detail: money is stored as integer paisas throughout — good evidence of care with financial data.

---

## Other Strong Candidates Worth Featuring (not in your list, but portfolio-grade)

- **XAI Diabetic Retinopathy Detection** (Final Year Project) — explainable AI for medical diagnostics: deep learning detection + visualization + natural-language explanations for retinal image analysis. Backend + frontend + helper repos (`xai-dr-detection-backend`, `xai-dr-detection-frontend`, `explainable-dr-detection-fork`), all public. This is arguably your strongest *academic* AI credential and directly supports "AI/ML is my main field" — recommend including even though you didn't list it.
- **Chatbot (AnythingLLM-based RAG system)** — `chatbot-backend`/`chatbot-frontend` (+ beta versions), integrated with AnythingLLM for retrieval-augmented generation.
- **Health Care Plan Generator** — prompt-based AI healthcare plan generator with a self-evaluation/improvement loop.
- **ScribbleHub Novel-to-EPUB Automator** (`novel-scrapers-scribblehub`) — well-documented: nested git submodules, idempotent resume-safe scraping, FastAPI + React/Vite/Tailwind v4 frontend, Dockerized with FlareSolverr for Cloudflare bypass, emails finished EPUBs via SMTP. Genuinely polished README.
- **Resource Dashboard** — GPU/CPU/memory monitoring dashboard (own infra tooling, ties into Echo Shield's GPU workload).

## Secondary / Smaller Projects (for a "more projects" grid, brief mentions)

- **Beginner chat app projects** (`beginner-chat-app-projects`) — compilation of early MERN-stack chat apps (learning-stage, framed as such).
- **Blockchain / DeFi work** (`blockchain` repo + related): Balancer Protocol testnet forks (`balancer-gateway`, `balancer-gateway-2`, `balancer-deploy`, `balancer-subgraph-v3`), a Hummingbot arbitrage strategy (`hummingbot-balancer-arbitrage-strategy`, 2 stars — your only starred repo), Sky Money (MakerDAO) rewards program fork (`dex-token-rewards-backend/frontend`). Framed by you as "too big of a mess to unwind" — recommend picking 1-2 clean examples rather than the whole pile.
- **Templates repo** (`templates`) — reusable scaffolding/boilerplate collected across projects.
- **Zenith** (Webnovel Reader Mod, all private) — main + backend + frontend + Android app (via Capacitor) + scraper repos. A full-stack personal product with a mobile app, if you want a "shipped a real app across platforms" story.
- **Sales Cold Email Generator** (Zaplead-based, from "old job") — Chrome extension that reads Google Sheets contact data and generates cold email greetings, plus scrapes LinkedIn for lead data. ⚠️ possible IP/ownership concern — was this built for an employer? Confirm before publishing details.
- **Freelance client work:** e-commerce Android app, an NFT marketplace, and a WordPress site (PHP) for a client referred to as "Harbor London."
- **University coursework:** AI labs, Digital Image Processing labs (MATLAB), legacy Java/C++ coursework — useful for an "Education" section, not standalone project cards.

---

## Logmate — resolved

Logmate (logmatepvt.com) is a **client**. "Current" (flagship project #4 above) was built for them — frame it as client work, not an owned product.

---

## GitHub Access Limitation (important for future sessions)

The connected GitHub MCP token can only read **public** repositories — private repos 404 even though they belong to the authenticated user (`blackstargit`). Worked around for the four flagship projects by reading the local clones directly instead. If a future agent needs private-repo content via the GitHub API itself (not local files), it'll need a token with private-repo scope.

## Gaps — remaining after full user follow-up

Resolved: LinkedIn content, employment history, education, certifications (none yet), domain status, old portfolio (skip), all four flagship project write-ups and their public names/sanitization, Logmate (client), location, PAF Cyber Command role start date/scope, and the Kaggle question (explicitly excluded — not a gap, a decision). Still open:

1. **Resume/CV** — no PDF/resume file found anywhere. Decide if the landing page should link to a downloadable resume; if yes, needs to be supplied.
2. **Other profiles content** — user wants a section for other profiles (e.g. Hugging Face handle) — see "Other Profiles" section below; needs the actual handles/links.
3. **Certifications** — section should exist in the site's code but stay hidden/commented out for now (see "Certifications" section below) until the user has something to add.

---

## Suggested Page Structure (standard for an AI/ML + security portfolio, for the building agent)

1. Hero — name, one-line identity centered on **AI developer** (not "web developer" — see Identity/Positioning), CTA to projects/contact
2. About — fresh bio synthesized from "Identity/Positioning" + employment history (do not reuse the deprecated 2025 LinkedIn About text verbatim)
3. Skills — categorized stack (AI/ML, Security, Web3, Full-stack, Infra)
4. Featured Projects, in this order: **Cortex Strike** (strongest technical story), **Echo Shield**, **Current** (Logmate — strongest "shipped, real users" story), **PSX Portfolio Tracker & Asset Allocation Planner**, then XAI DR Detection as a bonus academic credential
5. More Projects — grid of secondary projects (chat apps, blockchain, templates, etc.)
6. Experience — lead with the PAF Cyber Command role, then NASTP, Alphabase, Fiverr freelance, Sigma Engineering (full detail above)
7. Education — NUST, BS Computer Software Engineering, 2021–2025, Grade A
8. Certifications — build the section, keep hidden/commented out (see above)
9. Other Profiles — Hugging Face etc., content pending (see above)
10. Contact — email, GitHub, LinkedIn, location (Islamabad, Pakistan), resume link if supplied

Note for the build agent: per this user's global CLAUDE.md, **all data fetching must use RTK Query** (`createApi`/`fetchBaseQuery`) — no raw `fetch`/`axios`/`useEffect` fetching. Relevant if the page pulls live GitHub stats or any other remote data.
