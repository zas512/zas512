"use client";
import LogoLoop from "@/components/LogoLoop";
import {
  Archive,
  Bot,
  BrainCircuit,
  Cloud,
  Phone,
  PhoneCall,
  Radio,
  Server,
  Zap,
  type LucideIcon
} from "lucide-react";
import { useMemo, useState, type ReactNode } from "react";
import {
  SiAsterisk,
  SiDocker,
  SiEslint,
  SiExpress,
  SiFastapi,
  SiFigma,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiJavascript,
  SiJenkins,
  SiJira,
  SiLangchain,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiRedux,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiWebrtc
} from "react-icons/si";

type TechLogo = {
  node: ReactNode;
  title: string;
  href: string;
};

const si = (colorClass: string) => `size-[1.05rem] shrink-0 ${colorClass}`;

function LuGlyph({
  Icon,
  className
}: Readonly<{ Icon: LucideIcon; className: string }>) {
  return (
    <Icon
      className={`size-[1.05rem] shrink-0 stroke-[1.75] fill-none ${className}`}
      aria-hidden
    />
  );
}

function techPillRender(item: TechLogo, _key: string) {
  const pill = (
    <span className="inline-flex h-10 items-center gap-4 rounded-lg border border-white/10 bg-white/5 px-4 py-2 tracking-wide text-zinc-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
      <span className="flex items-center [&_svg]:size-[1.05rem]">
        {item.node}
      </span>
      <span className="font-mono text-sm text-zinc-400 mt-1">{item.title}</span>
    </span>
  );
  return (
    <p className="inline-flex shrink-0 no-underline outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-violet-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950">
      {pill}
    </p>
  );
}

function TechStackRow({
  direction,
  logos,
  ariaLabel,
  paused
}: Readonly<{
  direction: "left" | "right";
  logos: TechLogo[];
  ariaLabel: string;
  paused: boolean;
}>) {
  return (
    <div className="relative h-12 w-full overflow-hidden sm:h-13 md:h-12.5">
      <LogoLoop
        logos={logos}
        speed={38}
        direction={direction}
        logoHeight={28}
        gap={22}
        pauseOnHover={false}
        paused={paused}
        scaleOnHover
        fadeOut
        fadeOutColor="rgb(9 9 11)"
        ariaLabel={ariaLabel}
        renderItem={(item: TechLogo, key: string) =>
          techPillRender(item as TechLogo, String(key))
        }
        className="h-full"
      />
    </div>
  );
}

export function BentoTechStackCard() {
  const [cardHovered, setCardHovered] = useState(false);

  const rowLanguagesAndFrontend = useMemo<TechLogo[]>(
    () => [
      {
        node: <SiJavascript className={si("text-[#F7DF1E]")} />,
        title: "JavaScript",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        node: <SiTypescript className={si("text-[#3178C6]")} />,
        title: "TypeScript",
        href: "https://www.typescriptlang.org"
      },
      {
        node: <SiPython className={si("text-[#3776AB]")} />,
        title: "Python",
        href: "https://www.python.org"
      },
      {
        node: <SiReact className={si("text-[#61DAFB]")} />,
        title: "React.js",
        href: "https://react.dev"
      },
      {
        node: <SiNextdotjs className={si("text-white")} />,
        title: "Next.js",
        href: "https://nextjs.org"
      },
      {
        node: <SiRedux className={si("text-[#764ABC]")} />,
        title: "Redux",
        href: "https://redux.js.org"
      },
      {
        node: <SiTailwindcss className={si("text-[#06B6D4]")} />,
        title: "Tailwind CSS",
        href: "https://tailwindcss.com"
      },
      {
        node: <SiShadcnui className={si("text-white")} />,
        title: "shadcn/ui",
        href: "https://ui.shadcn.com"
      },
      {
        node: <SiFigma className={si("text-[#F24E1E]")} />,
        title: "Figma",
        href: "https://www.figma.com"
      }
    ],
    []
  );

  const rowBackendAndDatabase = useMemo<TechLogo[]>(
    () => [
      {
        node: <SiNodedotjs className={si("text-[#5FA04E]")} />,
        title: "Node.js",
        href: "https://nodejs.org"
      },
      {
        node: <SiExpress className={si("text-white")} />,
        title: "Express.js",
        href: "https://expressjs.com"
      },
      {
        node: <SiFastapi className={si("text-[#009688]")} />,
        title: "FastAPI",
        href: "https://fastapi.tiangolo.com"
      },
      {
        node: <LuGlyph Icon={Radio} className="stroke-[#22C55E]" />,
        title: "WebSockets",
        href: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"
      },
      {
        node: <SiMongodb className={si("text-[#47A248]")} />,
        title: "MongoDB",
        href: "https://www.mongodb.com"
      },
      {
        node: <SiPostgresql className={si("text-[#4169E1]")} />,
        title: "PostgreSQL",
        href: "https://www.postgresql.org"
      },
      {
        node: <SiRedis className={si("text-[#FF4438]")} />,
        title: "Redis",
        href: "https://redis.io"
      },
      {
        node: <SiSupabase className={si("text-[#3ECF8E]")} />,
        title: "Supabase",
        href: "https://supabase.com"
      }
    ],
    []
  );

  const rowCloudAndGeneral = useMemo<TechLogo[]>(
    () => [
      {
        node: <LuGlyph Icon={Cloud} className="stroke-[#FF9900]" />,
        title: "AWS",
        href: "https://aws.amazon.com"
      },
      {
        node: <LuGlyph Icon={Server} className="stroke-[#FF9900]" />,
        title: "EC2",
        href: "https://aws.amazon.com/ec2/"
      },
      {
        node: <LuGlyph Icon={Archive} className="stroke-[#FF9900]" />,
        title: "S3",
        href: "https://aws.amazon.com/s3/"
      },
      {
        node: <LuGlyph Icon={Zap} className="stroke-[#FF9900]" />,
        title: "Amplify",
        href: "https://aws.amazon.com/amplify/"
      },
      {
        node: <SiDocker className={si("text-[#2496ED]")} />,
        title: "Docker",
        href: "https://www.docker.com"
      },
      {
        node: <SiJenkins className={si("text-[#D24939]")} />,
        title: "CI/CD",
        href: "https://www.jenkins.io"
      },
      {
        node: <SiGithubactions className={si("text-[#2088FF]")} />,
        title: "GitHub Actions",
        href: "https://github.com/features/actions"
      },
      {
        node: <SiGit className={si("text-[#F05032]")} />,
        title: "Git",
        href: "https://git-scm.com"
      },
      {
        node: <SiGithub className={si("text-white")} />,
        title: "GitHub",
        href: "https://github.com"
      },
      {
        node: <SiJira className={si("text-[#0052CC]")} />,
        title: "Jira",
        href: "https://www.atlassian.com/software/jira"
      },
      {
        node: <SiWebrtc className={si("text-[#FF6600]")} />,
        title: "WebRTC",
        href: "https://webrtc.org"
      },
      {
        node: <LuGlyph Icon={Phone} className="stroke-[#E87722]" />,
        title: "FreePBX",
        href: "https://www.freepbx.org"
      },
      {
        node: <SiAsterisk className={si("text-[#F68F1E]")} />,
        title: "Asterisk",
        href: "https://www.asterisk.org"
      },
      {
        node: <SiLangchain className={si("text-[#2FE6AB]")} />,
        title: "LangChain",
        href: "https://www.langchain.com"
      },
      {
        node: <LuGlyph Icon={Bot} className="stroke-[#10B981]" />,
        title: "OpenAI API",
        href: "https://platform.openai.com/docs/overview"
      },
      {
        node: <LuGlyph Icon={BrainCircuit} className="stroke-[#B794F4]" />,
        title: "Claude API",
        href: "https://docs.anthropic.com/en/api/getting-started"
      },
      {
        node: <LuGlyph Icon={BrainCircuit} className="stroke-[#22D3EE]" />,
        title: "RAG Pipelines",
        href: "https://python.langchain.com/docs/concepts/rag/"
      },
      {
        node: <LuGlyph Icon={PhoneCall} className="stroke-[#F97316]" />,
        title: "Twilio Voice",
        href: "https://www.twilio.com/docs/voice"
      },
      {
        node: <LuGlyph Icon={Radio} className="stroke-[#FB923C]" />,
        title: "SIP Trunking",
        href: "https://www.twilio.com/docs/sip-trunking"
      },
      {
        node: <SiEslint className={si("text-[#4B32C3]")} />,
        title: "ESLint",
        href: "https://eslint.org"
      }
    ],
    []
  );

  return (
    <div
      className="flex h-full flex-col gap-6"
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
    >
      <h3 className="mt-2 max-w-[18ch] text-balance font-display text-xl text-center leading-[1.02] text-zinc-100 md:text-[2.1rem] p-6">
        Crafting experiences powered by next-gen tech
      </h3>

      <div className="flex flex-1 flex-col gap-2 overflow-hidden">
        <TechStackRow
          direction="left"
          logos={rowLanguagesAndFrontend}
          ariaLabel="Languages and front-end stack"
          paused={cardHovered}
        />
        <TechStackRow
          direction="right"
          logos={rowBackendAndDatabase}
          ariaLabel="Backend and database stack"
          paused={cardHovered}
        />
        <TechStackRow
          direction="left"
          logos={rowCloudAndGeneral}
          ariaLabel="Cloud, DevOps, and general tooling"
          paused={cardHovered}
        />
      </div>
      <div
        className={`flex shrink-0 mx-6 flex-col overflow-hidden rounded-xl border border-white/10 bg-zinc-950/40 backdrop-blur-md transition-all duration-500 ease-out -bottom-4 absolute ${
          cardHovered ? "h-56" : "h-44"
        }`}
      >
        <div className="flex shrink-0 items-center gap-2 rounded-t-xl bg-white/10 px-4 py-2">
          <span className="size-2 rounded-full bg-red-500/90" />
          <span className="size-2 rounded-full bg-amber-400/90" />
          <span className="size-2 rounded-full bg-emerald-500/85" />
        </div>
        <section className=" space-y-4 p-6">
          <div className="h-6 rounded-md bg-white/20" />
          <p className="text-center transition-all duration-75 leading-relaxed text-zinc-400 font-display text-lg">
            Websites that stand out and make a difference
          </p>
        </section>
      </div>
    </div>
  );
}
