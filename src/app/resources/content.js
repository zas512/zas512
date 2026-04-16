const person = {
  firstName: "Zain",
  lastName: "Ali",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Senior Full Stack Developer",
  avatar: "/images/avatar.png",
  email: "zainalis.914@gmail.com",
  phone: "+92 304 2002147",
  location: "Rawalpindi, Pakistan",
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      Insights on the MERN stack, Python-driven AI, scalable SaaS architecture,
      and high-performance VoIP systems.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/zas512",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/zas512",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} | Senior Full Stack Developer`,
  description: `Portfolio of ${person.name}, a Full Stack Developer with 5 years of experience specializing in AI-driven platforms, enterprise SaaS, and telecommunications.`,
  headline: (
    <>
      Architecting scalable SaaS, AI-driven solutions, and high-concurrency
      telecommunications platforms.
    </>
  ),
  featured: {
    display: true,
    title: (
      <>
        Current Project: <strong className="ml-4">SureHelp Insurance</strong>
      </>
    ),
    href: "/work/surehelp",
  },
  subline: (
    <>
      I am a Senior Full Stack Developer with 5 years of experience [cite: 5]
      transforming complex requirements into high-performance applications. From
      rebuilding enterprise insurance modules to architecting real-time AI
      content engines, I specialize in React, Next.js, Python (FastAPI), and
      AWS.
    </>
  ),
  stats: {
    display: true,
    items: [
      { label: "Years of Experience", value: "5" }, // Reflected from CV [cite: 5]
      { label: "Projects Delivered", value: "25+" },
      { label: "Tech Stack", value: "MERN + AI" },
    ],
  },
  highlights: {
    display: true,
    items: [
      "Boosted data retrieval performance by 40% for enterprise platforms [cite: 19]",
      "Engineered multi-tenant billing systems with 99.9% uptime [cite: 29]",
      "Automated video creation using Generative AI (OpenAI & FFmpeg) [cite: 49]",
      "Reduced manual dialing by 60% via custom VoIP integrations [cite: 37]",
    ],
  },
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "The Professional Narrative",
    description: (
      <>
        With a solid foundation in Computer Science from ARID University[cite:
        51, 52], I have spent 5 years [cite: 5] navigating the complete software
        lifecycle. My expertise lies at the intersection of robust backend
        architecture (Node.js/Python) and dynamic, data-heavy frontends. I am
        particularly focused on the integration of Generative AI to streamline
        workflows and the optimization of real-time communication systems.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "WJIKS", // Corrected per CV [cite: 15]
        timeframe: "May 2025 – Present",
        role: "Senior Full Stack Developer",
        achievements: [
          <>
            <b>SureHelp Insurance:</b> Rebuilt legacy modules for a fully
            functional corporate platform, optimizing PostgreSQL performance to
            reduce data retrieval times by 40%[cite: 18, 19].
          </>,
          <>
            <b>SignWise Inbox:</b> Architected a unified communication suite
            with real-time syncing for project management and email
            integrations[cite: 20].
          </>,
          <>
            <b>NexaMortgage:</b> Stabilized an AI-driven loan management system
            by modernizing an existing codebase and enhancing functional
            reliability[cite: 23].
          </>,
        ],
      },
      {
        company: "CCCRIPT Agency", // Corrected per CV [cite: 24]
        timeframe: "Jan 2024 – April 2025",
        role: "Full Stack Developer",
        achievements: [
          <>
            <b>OSINT Platform:</b> Developed a high-performance frontend for
            massive dataset visualization using Next.js and amCharts[cite: 26,
            27].
          </>,
          <>
            <b>Custom Billing & VoIP:</b> Engineered a multi-tenant billing
            solution for VoIP providers with 99.9% uptime and real-time usage
            tracking[cite: 28, 29].
          </>,
          <>
            <b>Jadops GIS:</b> Delivered a 3D geospatial platform using CesiumJS
            for real-time telemetry and asset tracking[cite: 30].
          </>,
        ],
      },
      {
        company: "Graana.com",
        timeframe: "Mar 2022 – Dec 2023",
        role: "Full Stack Developer | VoIP Engineer",
        achievements: [
          <>
            Built a SIP-based React dialer integrated with FreePBX, reducing
            manual sales dialing by 60%[cite: 37].
          </>,
          <>
            Achieved zero downtime for a centralized contact center management
            system through custom routing rules and Node.js[cite: 38].
          </>,
        ],
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Expertise",
    skills: [
      {
        title: "AI & Data Science",
        description: (
          <>
            Generative AI (OpenAI), LangChain, Python, FastAPI, FFmpeg
            Automation
          </>
        ),
        images: [],
      },
      {
        title: "Languages & Frameworks",
        description: (
          <>TypeScript, JavaScript, Python, React, Next.js, Redux, Node.js</>
        ),
        images: [],
      },
      {
        title: "Backend & Databases",
        description: (
          <>Express.js, PostgreSQL, MongoDB, Redis, WebSockets, Supabase</>
        ),
        images: [],
      },
      {
        title: "DevOps & Cloud",
        description: <>AWS (EC2, S3, Amplify), Docker, GitHub Actions, CI/CD</>,
        images: [],
      },
      {
        title: "Telecommunications",
        description: (
          <>WebRTC, Asterisk, FreePBX, SIP Protocol, VoIP Integration</>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title:
    "Writing about Full Stack Development, SaaS, VoIP, GIS, AI, and DevOps...",
  description: `Read what ${person.name} has been up to recently`,
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Case studies and technical projects built by ${person.name}`,
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
