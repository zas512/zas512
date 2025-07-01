const person = {
  firstName: "Zain",
  lastName: "Ali",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer",
  avatar: "/images/avatar.png", // Ensure this image exists
  email: "zainalis.914@gmail.com",
  languages: ["English", "Urdu"],
  location: "Rawalpindi, Pakistan",
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about full stack development, DevOps, and engineering solutions across
      web platforms.
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
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Delivering scalable full stack solutions with React, Node, and DevOps</>,
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className="ml-4">AI SaaS Platform</strong>
      </>
    ),
    href: "/work/ai-saas-platform",
  },
  subline: (
    <>
      I'm Zain, a full stack developer delivering robust solutions across CRM, GIS, SaaS, and VoIP
      platforms using MERN and DevOps tools.
    </>
  ),
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
    title: "Introduction",
    description: (
      <>
        Full Stack Developer with 3+ years of experience in building scalable web applications. I
        specialize in the MERN stack, DevOps, and real-time systems. My recent work includes
        WebRTC-based dialers, 3D GIS platforms, and AI-powered SaaS tools.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "CCript",
        timeframe: "Apr 2025 – Present",
        role: "Full Stack Developer",
        achievements: [
          <>
            Working on a variety of full stack projects including internal tools, dashboards, and
            API integrations.
          </>,
          <>
            Handling modern web3, WebRTC-based real-time apps, and streamlining CI/CD with Docker +
            GitHub Actions.
          </>,
        ],
        images: [],
      },
      {
        company: "WJIKS",
        timeframe: "May 2024 – Apr 2025",
        role: "Full Stack Developer",
        achievements: [
          <>
            Built OSINT, GIS, billing, and VoIP dialer systems using Next.js, CesiumJS, WebSockets,
            and Docker.
          </>,
          <>
            Created real-time dashboards, multi-tenant billing solutions, and integrated tracking
            tools for surveillance.
          </>,
        ],
        images: [],
      },
      {
        company: "Graana.com",
        timeframe: "Jun 2022 – May 2024",
        role: "Full Stack Developer",
        achievements: [
          <>
            Built and upgraded CRM dialers, real-time agent dashboards, and backend systems using
            React, FreePBX, and Node.js.
          </>,
          <>
            Reduced call latency and manual tasks, improved UX for agents, and managed complex
            integrations with Asterisk.
          </>,
        ],
        images: [],
      },
      {
        company: "Freelance Projects",
        timeframe: "Nov 2023 – Present",
        role: "Full Stack Developer",
        achievements: [
          <>
            Built SaaS platforms like Slick Magic AI (video rendering), Apply Pool (university
            chatbot), and Beard Friends (social booking).
          </>,
          <>
            Handled web3 integrations, real-time chat with WebRTC & WebSockets, and full payment
            flows with Stripe/PayPal.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "ARID University, Rawalpindi",
        description: <>B.S. in Computer Science (2016 – 2020)</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Frontend",
        description: (
          <>React, Next.js (App/Pages Router), TailwindCSS, Redux Toolkit, Zustand, ShadCN</>
        ),
        images: [],
      },
      {
        title: "Backend",
        description: <>Node.js, Express, WebSockets, Sequelize, Mongoose, Firebase, WebRTC</>,
        images: [],
      },
      {
        title: "Databases",
        description: <>MongoDB, PostgreSQL, MySQL, Redis, Supabase</>,
        images: [],
      },
      {
        title: "DevOps & Cloud",
        description: <>Docker, AWS (EC2, S3, Amplify), CI/CD, GitHub Actions, Vercel, Kubernetes</>,
        images: [],
      },
      {
        title: "Other Tools",
        description: <>Stripe, OpenAI, Clerk, LangChain, FFmpeg, Asterisk, FreePBX</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about full stack dev and system design...",
  description: `Read what ${person.name} has been up to recently`,
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Technical case studies and projects built by ${person.name}`,
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
