const person = {
  firstName: "Zain",
  lastName: "Ali Sajid",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer (MERN / MEAN)",
  avatar: "/images/avatar.png",
  email: "zainalis.914@gmail.com",
  languages: ["English", "Urdu"],
  location: "Rawalpindi, Pakistan",
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about full stack development, DevOps, and engineering
      solutions across MERN/MEAN platforms.
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
  headline: (
    <>
      Delivering scalable SaaS, GIS, VoIP, and AI-driven solutions with MERN /
      MEAN Stack and DevOps
    </>
  ),
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className="ml-4">SignWise Inbox</strong>
      </>
    ),
    href: "/work/signwise-inbox",
  },
  subline: (
    <>
      I'm Zain, a full stack developer with 4+ years of experience building
      SaaS, VoIP, GIS, and AI platforms using React, Next.js, Angular, Node.js,
      and AWS.
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
        Full Stack Developer with 4+ years of experience in building and scaling
        applications across enterprise SaaS, telecommunications, and AI-driven
        platforms. Skilled in both MERN (MongoDB, Express, React, Node.js) and
        MEAN (MongoDB, Express, Angular, Node.js) stacks. I specialize in
        end-to-end development — from frontend UI/UX to backend APIs, databases,
        and DevOps.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "CCRIPT Agency",
        timeframe: "May 2025 – Present",
        role: "Full Stack Developer",
        achievements: [
          <>
            Architected SignWise Inbox, a productivity suite combining email +
            project planning.
          </>,
          <>
            Built Adaptive Voice Dialer supporting hundreds of concurrent calls
            with analytics.
          </>,
        ],
      },
      {
        company: "WJIKS",
        timeframe: "Jan 2024 – Apr 2025",
        role: "Full Stack Developer",
        achievements: [
          <>
            Built OSINT Intelligence Platform for real-time dataset
            visualization with Next.js.
          </>,
          <>
            Developed multi-tenant Billing Solution with 99.9% uptime and cloud
            deployment.
          </>,
          <>
            Created Jadops 3D GIS platform with CesiumJS for real-time
            geospatial data.
          </>,
          <>
            Engineered SureHelp Insurance Platform with faster claims
            processing.
          </>,
        ],
      },
      {
        company: "Graana.com",
        timeframe: "Mar 2022 – Dec 2023",
        role: "Full Stack Developer | VoIP Engineer",
        achievements: [
          <>
            Built ARMS CRM Dialer reducing manual dialing by 60% with React +
            FreePBX.
          </>,
          <>
            Developed Call Center Backend with Node.js + Asterisk ensuring zero
            downtime.
          </>,
          <>
            Upgraded Worksapp CRM Dialer UI and integrated real-time call
            activity via WebSockets.
          </>,
          <>
            Contributed to Angular-based internal dashboards for call analytics
            and reporting.
          </>,
        ],
      },
      {
        company: "Freelance Projects",
        timeframe: "Nov 2023 – Present",
        role: "Full Stack Developer | UI/UX Designer",
        achievements: [
          <>
            Developed Slick Magic AI, an AI-powered video rendering SaaS with
            Stripe payments.
          </>,
          <>
            Built Apply Pool, a smart auto-apply university tool connecting
            students with mentors.
          </>,
          <>
            Launched Beard Friends, a niche social booking platform with 5k+
            users in first quarter.
          </>,
          <>
            Created Twinsting, a Fiverr-like artist marketplace with real-time
            chat + React Native.
          </>,
        ],
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
        title: "Languages",
        description: <>JavaScript, TypeScript</>,
      },
      {
        title: "Frontend",
        description: (
          <>
            React, Next.js, Angular, Redux, TailwindCSS, ShadCN, Figma,
            Next-Auth, Clerk
          </>
        ),
      },
      {
        title: "Backend",
        description: (
          <>Node.js, Express.js, WebSockets, Sequelize, Mongoose, Firebase</>
        ),
      },
      {
        title: "Databases",
        description: <>MongoDB, PostgreSQL, MySQL, Redis, Supabase</>,
      },
      {
        title: "DevOps & Cloud",
        description: (
          <>AWS (EC2, S3, Amplify), Docker, Kubernetes, CI/CD, GitHub Actions</>
        ),
      },
      {
        title: "Other Tools",
        description: (
          <>
            WebRTC, FreePBX, Asterisk, Stripe, OpenAI, LangChain, FFmpeg, EsLint
          </>
        ),
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about MERN, MEAN, SaaS, VoIP, and system design...",
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
