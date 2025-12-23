/**
 * @typedef {object} ContentImage
 * @property {string} src
 * @property {string} alt
 * @property {number} width
 * @property {number} height
 */

const person = {
  firstName: "Zain",
  lastName: "Ali",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer",
  avatar: "/images/avatar.png",
  email: "zainalis.914@gmail.com",
  phone: "+92334 9068211",
  languages: ["English", "Urdu"],
  location: "Rawalpindi, Pakistan",
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about full stack development, SaaS platforms, VoIP
      systems, GIS applications, AI-driven solutions, and DevOps practices.
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
  description: `Portfolio website showcasing my work as a ${person.role} with 4+ years of experience building enterprise SaaS, telecommunications, and AI-driven platforms`,
  headline: (
    <>
      Building scalable applications across enterprise SaaS, telecommunications,
      and AI-driven platforms
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
      I'm Zain, a Full Stack Developer with 4+ years of experience building and
      scaling applications across diverse sectors. I specialize in React,
      Next.js, Node.js, PostgreSQL, and AWS, delivering solutions that improve
      performance, streamline processes, and enhance user experiences.
    </>
  ),
  stats: {
    display: true,
    items: [
      { label: "Years of Experience", value: "4+" },
      { label: "Projects Delivered", value: "20+" },
      { label: "Technologies", value: "15+" },
    ],
  },
  highlights: {
    display: true,
    items: [
      "Improved data retrieval times by 40% on insurance platforms",
      "Achieved 99.9% uptime on multi-tenant billing solutions",
      "Reduced manual dialing by 60% with VoIP automation",
      "Built platforms supporting 5,000+ users within first quarter",
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
    title: "Introduction",
    description: (
      <>
        Full Stack Developer with 4+ years of experience building and scaling
        applications across diverse sectors, including enterprise SaaS,
        telecommunications, and AI-driven platforms. Proficient in the complete
        project lifecycle, utilizing a tech stack that includes React, Next.js,
        Node.js, PostgreSQL, and AWS. Passionate about leveraging modern
        technologies to solve complex problems and deliver exceptional user
        experiences.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "CCCRIPT Agency",
        timeframe: "May 2025 – Present",
        role: "Full Stack Developer",
        /** @type {ContentImage[]} */
        images: [],
        achievements: [
          <>
            SureHelp Insurance Platform: Developed a comprehensive insurance
            management system for corporate clients, centralizing client data
            and policy details. Engineered features that improved data retrieval
            times by 40% and streamlined the claims tracking process.
          </>,
          <>
            SignWise Inbox: Architected a unified productivity suite combining a
            multi-platform email client (Gmail, Outlook) with an integrated
            project planner. The solution boosted user productivity by
            consolidating communication and task management into a single,
            intuitive interface.
          </>,
        ],
      },
      {
        company: "WJIKS",
        timeframe: "Jan 2024 – April 2025",
        role: "Full Stack Developer",
        /** @type {ContentImage[]} */
        images: [],
        achievements: [
          <>
            OSINT Intelligence Platform: Engineered a high-performance front end
            using Next.js and Redux Toolkit, enabling real-time visualization of
            massive OSINT datasets and improving data analysis capabilities.
          </>,
          <>
            Billing Solution: Architected a multi-tenant, cloud-deployed billing
            platform that achieved 99.9% uptime, successfully managing multiple
            clients, subscriptions, and payment processes.
          </>,
          <>
            Jadops (3D GIS Platform): Developed an interactive 3D GIS platform
            with CesiumJS to visualize real-time geospatial data, enhancing
            operational planning and asset tracking for enterprise users.
          </>,
          <>
            Adaptive Voice Dialer: Built a scalable VoIP dialer supporting
            hundreds of concurrent calls, which included features like campaign
            management and real-time analytics, improving call center agent
            efficiency and monitoring.
          </>,
        ],
      },
      {
        company: "Freelance (Contract-Based Projects)",
        timeframe: "Nov 2023 – Present",
        role: "Full Stack Developer | UI/UX Designer",
        /** @type {ContentImage[]} */
        images: [],
        achievements: [
          <>
            Slick Magic AI: Enabled automated video content creation for
            creators by developing an AI-powered SaaS platform using OpenAI and
            FFmpeg, with secure payment processing via Stripe.
          </>,
          <>
            Apply Pool: Helped students increase their application opportunities
            by 5x with a smart auto-apply tool on a platform connecting
            university applicants with mentors.
          </>,
          <>
            Beard Friends: Attracted over 5,000 users within the first quarter
            by launching a niche social platform with features like appointment
            booking, contests, and leaderboards.
          </>,
          <>
            Twinsting: Processed over 1,000 transactions within the first 3
            months of launch on a Fiverr-like platform for artists, featuring
            real-time messaging and mobile support with React Native.
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
        description: (
          <>Bachelor of Science in Computer Science (Sep 2016 – Nov 2020)</>
        ),
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
        /** @type {ContentImage[]} */
        images: [],
      },
      {
        title: "Frontend",
        description: (
          <>
            React, Next.js, Angular, Redux, TailwindCSS, ShadCN, Figma,
            Next-Auth, Clerk
          </>
        ),
        /** @type {ContentImage[]} */
        images: [],
      },
      {
        title: "Backend",
        description: (
          <>Node.js, Express.js, WebSockets, Sequelize, Mongoose, Firebase</>
        ),
        /** @type {ContentImage[]} */
        images: [],
      },
      {
        title: "Databases",
        description: <>MongoDB, PostgreSQL, MySQL, Redis, Supabase</>,
        /** @type {ContentImage[]} */
        images: [],
      },
      {
        title: "DevOps & Cloud",
        description: (
          <>AWS (EC2, S3, Amplify), Docker, Kubernetes, CI/CD, GitHub Actions</>
        ),
        /** @type {ContentImage[]} */
        images: [],
      },
      {
        title: "Other Tools",
        description: (
          <>
            WebRTC, FreePBX, Asterisk, Stripe, OpenAI, LangChain, FFmpeg, EsLint
          </>
        ),
        /** @type {ContentImage[]} */
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
