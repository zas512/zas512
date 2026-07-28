export const profile = {
  name: "Zain Ali",
  handle: "zain.dev",
  role: "Full Stack AI Engineer",
  shortName: "Zain",
  tagline:
    "Full Stack AI Engineer with 5+ years building production-grade SaaS, AI-native platforms, and real-time systems.",
  location: "Pakistan · Remote worldwide",
  email: "zainalis.914@gmail.com",
  phone: "+92 304 2002147",
  available: true,
  socials: [
    { label: "GitHub", href: "https://github.com/zas512" },
    { label: "LinkedIn", href: "https://linkedin.com/in/zas512" },
    { label: "Email", href: "mailto:zainalis.914@gmail.com" },
  ],
};

export const stats = [
  { value: "5+", label: "Years shipping" },
  { value: "20+", label: "Production apps" },
  { value: "99.9%", label: "Uptime delivered" },
  { value: "40%", label: "Avg perf gains" },
];

export const experience = [
  {
    company: "CCRIPT Agency",
    role: "Senior Full-Stack Developer · DevOps",
    period: "May 2025 - Present",
    location: "Remote",
    summary:
      "Leading full-stack delivery across enterprise SaaS, AI-assisted tooling, and multi-tenant workflows.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "LangChain", "RAG", "AWS"],
    achievements: [
      "BeBalanced (Medical AI Chatbot) - built an intelligent medical assistant chatbot using LangChain and a PostgreSQL RAG pipeline with session history persistence",
      "JessiAI (Dementia Care Assistant) - voice-enabled caregiver companion featuring custom memory reminders, fall alerts, and a real-time WebSocket dashboard",
      "NexaMortgage - refactored a fragile loan management system into a production-ready URLA-compliant platform with RAG-based AI chat",
      "SureHelp Insurance - rebuilt core modules and reduced data-retrieval time by ~40%",
      "Purchase Portal - multi-vendor school supply platform with approvals and end-to-end fulfilment",
      "SignWise Inbox - unified inbox (Gmail, Outlook, Microsoft) with real-time sync and task management",
    ],
  },
  {
    company: "WJIKS",
    role: "Full-Stack Developer",
    period: "Jan 2024 - April 2025",
    location: "Remote",
    summary:
      "Built data-heavy intelligence platforms, plug-and-play VoIP systems, and 3D geospatial tooling.",
    stack: ["Next.js", "React", "Asterisk", "WebRTC", "CesiumJS", "Node.js"],
    achievements: [
      "OSINT Intelligence Platform - Next.js + amCharts UI tuned for huge datasets and real-time visualization",
      "Adaptive Voice Dialer - React VoIP dialer on Asterisk supporting hundreds of concurrent calls",
      "VoIP Billing Solution - multi-tenant billing with 99.9% uptime and real-time call-based billing",
      "Jadops 3D GIS - live telemetry geospatial visualization on CesiumJS",
    ],
  },
  {
    company: "Graana.com",
    role: "Full-Stack Developer · VoIP Engineer",
    period: "Mar 2022 - Dec 2023",
    location: "Pakistan",
    summary:
      "Modernized the CRM stack and built the company's call-center infrastructure end-to-end.",
    stack: ["React", "React Native", "Node.js", "PHP", "FreePBX", "WebSockets"],
    achievements: [
      "Worksapp CRM - real-time call activity over WebSockets and a custom React Native mobile dialer",
      "Call Center Backend - centralized contact-center management on FreePBX/Asterisk with zero downtime",
      "ARMS CRM Dialer - SIP-based React dialer that reduced manual dialing by 60%",
    ],
  },
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    period: "2021 - Present",
    location: "Contract",
    summary:
      "Shipped Web3, AI, and consumer products end-to-end for founders and small teams worldwide.",
    stack: ["Next.js", "React Native", "OpenAI", "FFmpeg", "Stripe", "Web3"],
    achievements: [
      "Siher.eth - Web3 site builder with Pinata storage, wallet auth, and Namestone subdomains",
      "Apply Pool - conversational AI chatbot leveraging RAG memory persistence to match students to universities, increasing opportunity flow by 5x",
      "ReferPool - AI chatbot-driven platform enabling peer-referral job loops and persistent memory role matching",
      "Beard Friends - niche social platform that hit 5,000+ users in its first quarter",
      "Twinsting - Fiverr-style marketplace processing 1,000+ transactions in 3 months",
      "Slick Magic AI - OpenAI + FFmpeg SaaS for automated video creation with Stripe payments",
    ],
  },
];

export const techStack = [
  { name: "TypeScript", slug: "typescript", color: "3178C6", category: "Language" },
  { name: "JavaScript", slug: "javascript", color: "F7DF1E", category: "Language" },
  { name: "Python", slug: "python", color: "3776AB", category: "Language" },
  { name: "React", slug: "react", color: "61DAFB", category: "Frontend" },
  { name: "Next.js", slug: "nextdotjs", color: "FFFFFF", category: "Frontend" },
  { name: "Redux", slug: "redux", color: "764ABC", category: "Frontend" },
  { name: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4", category: "Frontend" },
  { name: "Node.js", slug: "nodedotjs", color: "5FA04E", category: "Backend" },
  { name: "Express", slug: "express", color: "FFFFFF", category: "Backend" },
  { name: "FastAPI", slug: "fastapi", color: "009688", category: "Backend" },
  { name: "LangChain", slug: "langchain", color: "1C3C3C", category: "AI" },
  { name: "PostgreSQL", slug: "postgresql", color: "4169E1", category: "Data" },
  { name: "MongoDB", slug: "mongodb", color: "47A248", category: "Data" },
  { name: "Redis", slug: "redis", color: "DC382D", category: "Data" },
  { name: "Supabase", slug: "supabase", color: "3FCF8E", category: "Data" },
  { name: "AWS", slug: "amazonwebservices", color: "FF9900", category: "Cloud" },
  { name: "Docker", slug: "docker", color: "2496ED", category: "DevOps" },
  { name: "Kubernetes", slug: "kubernetes", color: "326CE5", category: "DevOps" },
  { name: "GitHub Actions", slug: "githubactions", color: "2088FF", category: "DevOps" },
  { name: "WebRTC", slug: "webrtc", color: "333333", category: "Realtime" },
];

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  year: string;
  client: string;
  role: string;
  stack: string[];
  tags: string[];
  image?: string;
  video?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  accent?: string;
  problem?: string;
  features?: string[];
  type?: string;
  metrics?: { label: string; value: string }[];
  gallery?: string[];
  gitHubRepo?: string;
};

export const projects: Project[] = [
  {
    slug: "nexamortgage",
    title: "NexaMortgage",
    tagline: "AI-assisted loan management for U.S. mortgage teams.",
    description:
      "Refactored a fragile loan management system into a production-ready platform aligned with U.S. URLA standards, with a RAG-based AI assistant that helps loan officers move files faster.",
    year: "2026",
    client: "CCRIPT Agency",
    role: "Senior Full-Stack Developer",
    stack: ["Next.js", "Node.js", "PostgreSQL", "LangChain", "RAG", "AWS"],
    tags: ["SaaS", "AI", "FinTech"],
    image: "https://res.cloudinary.com/dq033xs8n/image/upload/v1780241723/bevri1_qzohce.jpg",
    liveUrl: "https://app.bevri.ai",
    featured: true,
    accent: "from-sky-400/30 to-violet-500/20",
    problem:
      "The original system was unstable, didn't follow URLA standards, and had no AI assistance for the long manual workflows loan officers run daily.",
    features: [
      "RAG-based AI chat trained on loan documents",
      "URLA-compliant loan workflow",
      "Hardened data validation and consistency layer",
      "Refactored architecture for production stability",
    ],
    metrics: [
      { label: "Workflow", value: "URLA-aligned" },
      { label: "AI assist", value: "RAG-based" },
      { label: "Stability", value: "Production" },
    ],
    gallery: [
      "https://res.cloudinary.com/dq033xs8n/image/upload/v1780241723/bevri1_qzohce.jpg",
      "https://res.cloudinary.com/dq033xs8n/image/upload/v1780241723/bevri3_jkuyu7.jpg",
      "https://res.cloudinary.com/dq033xs8n/image/upload/v1780241724/bevri2_veujfq.jpg",
      "https://res.cloudinary.com/dq033xs8n/video/upload/v1780241717/bevri_tugxpl.mp4",
    ],
    gitHubRepo: "private",
    type: "fullstack",
  },
  {
    slug: "surehelp",
    title: "SureHelp Insurance",
    tagline: "Rebuilt a stalled insurance platform into a working product.",
    description:
      "Took over an incomplete codebase and rebuilt major modules to make the platform fully functional, while tuning the database layer for serious throughput.",
    year: "2025",
    client: "CCRIPT Agency",
    role: "Senior Full-Stack Developer",
    stack: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    tags: ["SaaS", "Insurance"],
    image: "https://res.cloudinary.com/dq033xs8n/image/upload/v1780238920/surehelp1_ospabf.jpg",
    liveUrl: "https://surehelp.app",
    featured: true,
    accent: "from-emerald-400/30 to-sky-500/20",
    problem:
      "The platform shipped half-built. Core flows were broken and data retrieval was painfully slow for end users.",
    features: [
      "Rebuilt core insurance modules",
      "Query optimization and indexing pass",
      "Tightened API layer and validation",
    ],
    metrics: [
      { label: "Data retrieval", value: "−40%" },
      { label: "Core modules", value: "Shipped" },
    ],
    gallery: [
      "https://res.cloudinary.com/dq033xs8n/image/upload/v1780238920/surehelp1_ospabf.jpg",
      "https://res.cloudinary.com/dq033xs8n/image/upload/v1780238919/surehelp2_xtv5qq.jpg",
    ],
    gitHubRepo: "private",
    type: "fullstack",
  },
  {
    slug: "signwise-inbox",
    title: "SignWise Inbox",
    tagline: "Unified inbox + project planning in one surface.",
    description:
      "A project planning platform that fuses task management with a unified inbox - Gmail, Outlook, and Microsoft accounts in one live-syncing interface.",
    year: "2025",
    client: "CCRIPT Agency",
    role: "Architect · Full-Stack",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Gmail API", "Microsoft Graph"],
    tags: ["Productivity", "SaaS"],
    featured: false,
    accent: "from-fuchsia-400/30 to-rose-500/20",
    problem:
      "Teams were context-switching between mail clients and task tools. SignWise collapses the loop.",
    features: [
      "Multi-provider mail sync (Gmail, Outlook, Microsoft)",
      "Real-time message updates",
      "Tasks and project planning beside the thread",
    ],
    metrics: [
      { label: "Providers", value: "3" },
      { label: "Sync", value: "Realtime" },
    ],
    gitHubRepo: "private",
    type: "backend",
  },
  {
    slug: "pulseops",
    title: "PulseOps",
    tagline: "AI-driven data analysis and agentic AI platform",
    description:
      "PulseOps is a cutting-edge data analysis platform that leverages AI to automate and enhance business intelligence. It transforms raw data into actionable insights through an intuitive interface powered by advanced machine learning models.",
    year: "2024",
    client: "Freelance",
    role: "Full Stack Developer",
    stack: ["Next.js", "OpenAI", "LangChain", "PostgreSQL"],
    tags: ["AI", "Analytics", "SaaS"],
    image: "https://res.cloudinary.com/dq033xs8n/image/upload/v1780255863/pulse1_sajyvu.jpg",
    featured: false,
    accent: "from-emerald-400/30 to-teal-500/20",
    problem:
      "Organizations struggle to extract actionable intelligence from fragmented raw data, often facing a bottleneck of manual SQL queries and slow report generation by dedicated analyst teams.",
    features: [
      "Natural language interface translating conversational queries into SQL",
      "Agentic AI workflows for automated business intelligence reporting and anomaly alerts",
      "Dynamic data visualization dashboards generated instantly from search prompts",
      "Persistent memory pipeline linking user history and dataset contexts",
    ],
    metrics: [
      { label: "Insight Delivery", value: "10x Faster" },
      { label: "Query Accuracy", value: "96%+" },
      { label: "Data Sources", value: "5+ Supported" },
    ],
    gallery: [
      "https://res.cloudinary.com/dq033xs8n/image/upload/v1780255863/pulse1_sajyvu.jpg",
      "https://res.cloudinary.com/dq033xs8n/image/upload/v1780256011/pulse2_r0rawg.jpg",
      "https://res.cloudinary.com/dq033xs8n/video/upload/v1780256013/pulseops_dnryw9.mp4",
    ],
    gitHubRepo: "private",
    type: "fullstack",
  },
  {
    slug: "adaptive-voice-dialer",
    title: "Adaptive Voice Dialer",
    tagline: "Plug-and-play VoIP dialer for any CRM.",
    description:
      "A React-based VoIP dialer wired directly to an Asterisk server, designed to drop into any CRM and handle hundreds of concurrent calls.",
    year: "2024",
    client: "WJIKS",
    role: "Full-Stack Developer",
    stack: ["React", "Asterisk", "WebRTC", "Node.js"],
    tags: ["VoIP", "Realtime"],
    featured: true,
    image: "https://res.cloudinary.com/dq033xs8n/image/upload/v1780255681/avd1_wwycc1.jpg",
    liveUrl: "https://dialer.wjiks.com",
    accent: "from-amber-400/30 to-rose-500/20",
    gallery: [
      "https://res.cloudinary.com/dq033xs8n/image/upload/v1780255681/avd1_wwycc1.jpg",
      "https://res.cloudinary.com/dq033xs8n/video/upload/v1780255667/avd_skdsi2.mp4",
      "https://res.cloudinary.com/dq033xs8n/image/upload/v1780255682/avd2_e2eraq.jpg",
      "https://res.cloudinary.com/dq033xs8n/image/upload/v1780255682/avd3_mtsazi.jpg",
    ],
    gitHubRepo: "private",
    type: "fullstack",
  },
  {
    slug: "osint-platform",
    title: "OSINT Intelligence Platform",
    tagline: "Realtime visualization for huge intelligence datasets.",
    description:
      "Frontend engineered for very large datasets - Next.js, TailwindCSS, and amCharts tuned for smooth real-time visualisation and fast state management.",
    year: "2024",
    client: "WJIKS",
    role: "Frontend Lead",
    stack: ["Next.js", "TailwindCSS", "amCharts", "WebSockets"],
    tags: ["Intelligence", "Data Viz"],
    image: "https://res.cloudinary.com/dq033xs8n/image/upload/v1780256031/osint1_ksfmkt.jpg",
    accent: "from-violet-400/30 to-sky-500/20",
    gallery: [
      "https://res.cloudinary.com/dq033xs8n/image/upload/v1780256031/osint1_ksfmkt.jpg",
      "https://res.cloudinary.com/dq033xs8n/image/upload/v1780256032/osint2_r3irv3.jpg",
      "https://res.cloudinary.com/dq033xs8n/image/upload/v1780256032/osint3_rumoov.jpg",
      "https://res.cloudinary.com/dq033xs8n/video/upload/v1780238795/osint_dezpan.mp4",
    ],
    gitHubRepo: "private",
    type: "frontend",
  },
  {
    slug: "voip-billing",
    title: "VoIP Billing Solution",
    tagline: "Multi-tenant billing for a VoIP provider.",
    description:
      "Custom multi-tenant billing system with real-time call-based billing, subscription rules, and usage tracking - running at 99.9% uptime.",
    year: "2024",
    client: "WJIKS",
    role: "Full-Stack Developer",
    stack: ["Node.js", "PostgreSQL", "Redis", "Asterisk"],
    tags: ["VoIP", "Billing"],
    accent: "from-emerald-400/30 to-cyan-500/20",
    type: "backend",
  },
  {
    slug: "jadops",
    title: "Jadops 3D GIS",
    tagline: "Live geospatial visualization for enterprise teams.",
    description:
      "Real-time geospatial visualisation built on CesiumJS with backend services supplying live telemetry - used for planning and asset tracking.",
    year: "2024",
    client: "WJIKS",
    role: "Full-Stack Developer",
    stack: ["CesiumJS", "Node.js", "WebSockets"],
    tags: ["GIS", "Realtime", "3D"],
    accent: "from-sky-400/30 to-emerald-500/20",
    type: "backend",
  },
  {
    slug: "worksapp",
    title: "Worksapp CRM",
    tagline: "CRM upgrade with realtime calling and a mobile dialer.",
    description:
      "Upgraded the CRM UI, added real-time call activity over WebSockets, and shipped a custom React Native mobile dialer for call-center agents.",
    year: "2023",
    client: "Graana.com",
    role: "Full-Stack · VoIP Engineer",
    stack: ["React", "React Native", "Node.js", "WebSockets", "FreePBX"],
    tags: ["CRM", "Mobile", "VoIP"],
    type: "fullstack",
    liveUrl: "https://worksapp.com.pk",
    accent: "from-pink-400/30 to-amber-500/20",
  },
  {
    slug: "slick-magic-ai",
    title: "Slick Magic AI",
    tagline: "Automated video creation SaaS for creators.",
    description:
      "AI-powered SaaS that automates video content creation using OpenAI and FFmpeg, with secure Stripe payments.",
    year: "2023",
    client: "Freelance",
    role: "Full-Stack Developer",
    stack: ["Next.js", "OpenAI", "FFmpeg", "Stripe", "Node.js"],
    tags: ["AI", "SaaS", "Creator"],
    accent: "from-fuchsia-400/30 to-violet-500/20",
    type: "fullstack",
  },
  {
    slug: "bebalanced",
    title: "BeBalanced",
    tagline: "Intelligent medical assistant chatbot with persistent memory.",
    description:
      "Built an intelligent medical assistant chatbot using LangChain and a RAG pipeline backed by Postgres. Enabled users to describe health symptoms, receive guidance, and track medications. Patient test results and health histories are stored and retrieved contextually, supporting accurate, personalized responses across sessions.",
    year: "2025",
    client: "CCRIPT Agency",
    role: "Senior Full Stack AI Developer",
    stack: ["Next.js", "Node.js", "PostgreSQL", "LangChain", "RAG", "Python"],
    tags: ["AI", "Healthcare", "SaaS"],
    featured: false,
    accent: "from-teal-400/30 to-emerald-500/20",
    problem:
      "Medical platforms often lack session-to-session continuity. Patients are forced to describe their medical history, chronic symptoms, and prescription schedules from scratch on every interaction.",
    features: [
      "PostgreSQL RAG pipeline for medical database query matching",
      "Contextual session-to-session memory persistence",
      "Patient health history and test result semantic retrieval",
      "Medication tracking and personalized guidance",
    ],
    metrics: [
      { label: "Search Latency", value: "<150ms" },
      { label: "Response Accuracy", value: "98.4%" },
      { label: "Pipeline", value: "RAG & LangChain" },
    ],
    gitHubRepo: "private",
    type: "fullstack",
  },
  {
    slug: "jessiai",
    title: "JessiAI",
    tagline: "Voice-enabled personal AI assistant for dementia care.",
    description:
      "Developed a voice-enabled personal AI assistant for a client living with dementia, featuring memory reminders, daily schedule prompts, and hazard awareness. Integrated emergency detection logic that automatically calls doctors and sends alerts to family members when a fall or emergency is detected — built with LangChain, real-time WebSockets, and a React dashboard for caregivers.",
    year: "2025",
    client: "CCRIPT Agency",
    role: "Senior Full Stack AI Developer",
    stack: ["React", "Node.js", "LangChain", "WebSockets", "FastAPI", "PostgreSQL"],
    tags: ["AI", "Healthcare", "IoT", "Realtime"],
    featured: false,
    accent: "from-indigo-400/30 to-cyan-500/20",
    problem:
      "Dementia care requires uninterrupted support and immediate emergency response. Conventional tools rely on text alerts or passive dashboards, failing to proactively interact with the patient or detect physical falls.",
    features: [
      "Real-time voice assistant with scheduled prompt triggers",
      "Emergency fall detection and automated alert routing",
      "WebSocket-backed React dashboard for caregivers and family",
      "Proactive daily reminders and ambient hazard notifications",
    ],
    metrics: [
      { label: "Emergency Alert", value: "<2s Delay" },
      { label: "Connection", value: "Realtime WebSockets" },
      { label: "Voice Uptime", value: "99.95%" },
    ],
    gitHubRepo: "private",
    type: "fullstack",
  },
  {
    slug: "purchase-portal",
    title: "Purchase Portal",
    tagline: "Multi-vendor supply request & approval workflow engine.",
    description:
      "Contributing to a school-supply request platform that connects multiple vendors and supports end-to-end order fulfilment, approval workflows, and conditional branching logic.",
    year: "2025",
    client: "CCRIPT Agency",
    role: "Senior Full Stack Developer",
    stack: ["Next.js", "Node.js", "PostgreSQL", "React"],
    tags: ["SaaS", "EdTech", "Workflows"],
    image: "https://res.cloudinary.com/dq033xs8n/image/upload/v1780256440/purchase1_hskudz.jpg",
    liveUrl: "https://suncoastprep.purchase-portal.com",
    featured: false,
    accent: "from-amber-400/30 to-rose-500/20",
    problem:
      "Educational institutions face highly disorganized procurement workflows, requiring multiple vendor listings, complex spend approvals, and custom branching logic depending on school levels and budget limits.",
    features: [
      "Multi-vendor supplier marketplace catalog synchronization",
      "Custom conditional branching approval engine",
      "Fulfillment tracking with end-to-end audit logs",
      "Responsive React administrative portal",
    ],
    metrics: [
      { label: "Procurement Cycle", value: "-30% time" },
      { label: "Architecture", value: "Microservices" },
      { label: "Fulfillment Rate", value: "99.8%" },
    ],
    gitHubRepo: "private",
    type: "frontend",
  },
  {
    slug: "call-center-backend",
    title: "Call Center Backend System",
    tagline: "Centralized contact center system with zero downtime.",
    description:
      "Built a centralized contact centre system with zero downtime using FreePBX, Asterisk, Node.js, and PHP with custom routing rules to handle massive concurrent call loads.",
    year: "2022",
    client: "Graana.com",
    role: "Full Stack Developer · VoIP Engineer",
    stack: ["FreePBX", "Asterisk", "Node.js", "PHP"],
    tags: ["VoIP", "Infrastructure"],
    featured: false,
    accent: "from-blue-400/30 to-indigo-500/20",
    problem:
      "High-volume inbound and outbound real estate operations require fail-safe telecommunication setups. Standard VoIP routers struggled with scale and suffered frequent drops.",
    features: [
      "Asterisk and FreePBX custom routing engine",
      "Dynamic failover queues and agent trunking rules",
      "Node.js tracking services with real-time CDR logs",
    ],
    metrics: [
      { label: "System Uptime", value: "100.0%" },
      { label: "Concurrent Calls", value: "300+" },
      { label: "Setup Time", value: "Zero Downtime" },
    ],
    gitHubRepo: "private",
    type: "backend",
  },
  {
    slug: "arms-crm-dialer",
    title: "ARMS CRM Dialer",
    tagline: "SIP-based React dialer for automated real estate outreach.",
    description:
      "Reduced manual dialling by 60% by building a SIP-based React dialer integrated directly with FreePBX and embedded natively inside the custom company CRM platform.",
    year: "2023",
    client: "Graana.com",
    role: "Full Stack Developer · VoIP Engineer",
    stack: ["React", "WebRTC", "SIP.js", "FreePBX", "Asterisk"],
    tags: ["VoIP", "CRM", "Realtime"],
    featured: false,
    accent: "from-violet-400/30 to-purple-500/20",
    problem:
      "Sales associates spent hours typing phone numbers manually, resulting in incorrect logs, missed appointments, and slow cold-calling throughput.",
    features: [
      "SIP.js client embedded natively inside CRM dashboards",
      "One-click call initiation and dynamic inbound call pops",
      "Automated audio state logging and agent metrics",
    ],
    metrics: [
      { label: "Manual Dialing", value: "-60%" },
      { label: "Outbound Velocity", value: "2.5x Boost" },
      { label: "Agent Usage", value: "150+ Daily" },
    ],
    gitHubRepo: "private",
    type: "backend",
  },
  {
    slug: "referpool",
    title: "ReferPool",
    tagline: "AI-chatbot matching platform driving network job referrals.",
    description:
      "Developed an AI chatbot-driven platform that helps job seekers find relevant opportunities and get referred by peers or professionals in their network. The chatbot collects user experience, skills, and preferences, stores them persistently, and surfaces matched roles while also enabling users to refer others, creating a community-driven referral loop.",
    year: "2024",
    client: "Freelance",
    role: "Full Stack Developer",
    stack: ["Next.js", "OpenAI", "LangChain", "PostgreSQL", "RAG"],
    tags: ["AI", "HRTech", "SaaS"],
    image: "https://res.cloudinary.com/dq033xs8n/image/upload/v1780238919/referpool1_q8yydl.jpg",
    featured: false,
    accent: "from-emerald-400/30 to-teal-500/20",
    problem:
      "Standard job boards lack a social connection, making referrals hard to coordinate. Most applicants get rejected by cold resumes with no human sponsor.",
    features: [
      "Conversational career chatbot extracting skill taxonomy",
      "Bidirectional community referral loop architecture",
      "RAG matches candidate experience vectors directly with open roles",
      "Automatic candidate dashboard and network builder",
    ],
    metrics: [
      { label: "Referral Rate", value: "4.5x Boost" },
      { label: "Active Network", value: "1k+ Users" },
      { label: "User Retention", value: "88%" },
    ],
    gallery: [
      "https://res.cloudinary.com/dq033xs8n/image/upload/v1780238919/referpool1_q8yydl.jpg",
      "https://res.cloudinary.com/dq033xs8n/image/upload/v1780238919/referpool2_pfetdw.jpg",
      "https://res.cloudinary.com/dq033xs8n/video/upload/v1780238795/referpool_ggwcz0.mp4",
    ],
    gitHubRepo: "private",
    type: "fullstack",
  },
  {
    slug: "twinsting",
    title: "Twinsting",
    tagline: "Fiverr-style freelance marketplace for digital artists.",
    description:
      "Built a Fiverr-style freelance marketplace for artists, enabling service listings, client hiring, and end-to-end order management. Implemented real-time messaging between clients and artists using WebSockets, integrated a secure payment system to handle transactions, and delivered a cross-platform mobile experience using React Native. Processed 1,000+ transactions within the first 3 months of launch.",
    year: "2022",
    client: "Freelance",
    role: "Full Stack Developer",
    stack: ["React Native", "React", "Node.js", "WebSockets", "Stripe", "PostgreSQL"],
    tags: ["Marketplace", "Mobile", "FinTech"],
    image: "https://res.cloudinary.com/dq033xs8n/image/upload/v1780257593/twin_ltybip.jpg",
    featured: false,
    accent: "from-pink-400/30 to-rose-500/20",
    problem:
      "Freelance designers and digital illustrators suffered from high platform fee cuts, poor transaction escrow protections, and slow messaging in commission pipelines.",
    features: [
      "Cross-platform mobile application built using React Native",
      "Real-time WebSocket instant messaging with file attachment sharing",
      "Stripe payment gateway integration with escrow management workflows",
      "Detailed commission order milestone tracking system",
    ],
    metrics: [
      { label: "Transactions", value: "1,000+ Shipped" },
      { label: "Launch Timeline", value: "3 Months" },
      { label: "User Trust Score", value: "98.9%" },
    ],
    gitHubRepo: "private",
    type: "fullstack",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
