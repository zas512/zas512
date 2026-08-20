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
        title: "JavaScript"
      },
      {
        node: <SiTypescript className={si("text-[#3178C6]")} />,
        title: "TypeScript"
      },
      {
        node: <SiPython className={si("text-[#3776AB]")} />,
        title: "Python"
      },
      {
        node: <SiReact className={si("text-[#61DAFB]")} />,
        title: "React.js"
      },
      {
        node: <SiNextdotjs className={si("text-white")} />,
        title: "Next.js"
      },
      {
        node: <SiRedux className={si("text-[#764ABC]")} />,
        title: "Redux"
      },
      {
        node: <SiTailwindcss className={si("text-[#06B6D4]")} />,
        title: "Tailwind CSS"
      },
      {
        node: <SiShadcnui className={si("text-white")} />,
        title: "shadcn/ui"
      },
      {
        node: <SiFigma className={si("text-[#F24E1E]")} />,
        title: "Figma"
      }
    ],
    []
  );

  const rowBackendAndDatabase = useMemo<TechLogo[]>(
    () => [
      {
        node: <SiNodedotjs className={si("text-[#5FA04E]")} />,
        title: "Node.js"
      },
      {
        node: <SiExpress className={si("text-white")} />,
        title: "Express.js"
      },
      {
        node: <SiFastapi className={si("text-[#009688]")} />,
        title: "FastAPI"
      },
      {
        node: <LuGlyph Icon={Radio} className="stroke-[#22C55E]" />,
        title: "WebSockets"
      },
      {
        node: <SiMongodb className={si("text-[#47A248]")} />,
        title: "MongoDB"
      },
      {
        node: <SiPostgresql className={si("text-[#4169E1]")} />,
        title: "PostgreSQL"
      },
      {
        node: <SiRedis className={si("text-[#FF4438]")} />,
        title: "Redis"
      },
      {
        node: <SiSupabase className={si("text-[#3ECF8E]")} />,
        title: "Supabase"
      }
    ],
    []
  );

  const rowCloudAndGeneral = useMemo<TechLogo[]>(
    () => [
      {
        node: <LuGlyph Icon={Cloud} className="stroke-[#FF9900]" />,
        title: "AWS"
      },
      {
        node: <LuGlyph Icon={Server} className="stroke-[#FF9900]" />,
        title: "EC2"
      },
      {
        node: <LuGlyph Icon={Archive} className="stroke-[#FF9900]" />,
        title: "S3"
      },
      {
        node: <LuGlyph Icon={Zap} className="stroke-[#FF9900]" />,
        title: "Amplify"
      },
      {
        node: <SiDocker className={si("text-[#2496ED]")} />,
        title: "Docker"
      },
      {
        node: <SiJenkins className={si("text-[#D24939]")} />,
        title: "CI/CD"
      },
      {
        node: <SiGithubactions className={si("text-[#2088FF]")} />,
        title: "GitHub Actions"
      },
      {
        node: <SiGit className={si("text-[#F05032]")} />,
        title: "Git"
      },
      {
        node: <SiGithub className={si("text-white")} />,
        title: "GitHub"
      },
      {
        node: <SiJira className={si("text-[#0052CC]")} />,
        title: "Jira"
      },
      {
        node: <SiWebrtc className={si("text-[#FF6600]")} />,
        title: "WebRTC"
      },
      {
        node: <LuGlyph Icon={Phone} className="stroke-[#E87722]" />,
        title: "FreePBX"
      },
      {
        node: <SiAsterisk className={si("text-[#F68F1E]")} />,
        title: "Asterisk"
      },
      {
        node: <SiLangchain className={si("text-[#2FE6AB]")} />,
        title: "LangChain"
      },
      {
        node: <LuGlyph Icon={Bot} className="stroke-[#10B981]" />,
        title: "OpenAI API"
      },
      {
        node: <LuGlyph Icon={BrainCircuit} className="stroke-[#B794F4]" />,
        title: "Claude API"
      },
      {
        node: <LuGlyph Icon={BrainCircuit} className="stroke-[#22D3EE]" />,
        title: "RAG Pipelines"
      },
      {
        node: <LuGlyph Icon={PhoneCall} className="stroke-[#F97316]" />,
        title: "Twilio Voice"
      },
      {
        node: <LuGlyph Icon={Radio} className="stroke-[#FB923C]" />,
        title: "SIP Trunking"
      },
      {
        node: <SiEslint className={si("text-[#4B32C3]")} />,
        title: "ESLint"
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
      <h3 className="text-balance font-display tracking-wide text-xl w-full text-center text-zinc-100 md:text-3xl p-4">
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
        className={`hidden lg:flex shrink-0 mx-6 flex-col overflow-hidden rounded-xl border border-white/10 bg-zinc-950/40 backdrop-blur-md transition-all duration-500 ease-out -bottom-4 absolute ${
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
          <p
            className={`text-center transition-all duration-75 leading-relaxed font-display text-lg ${cardHovered ? "text-white" : " text-zinc-400"}`}
          >
            Websites that stand out and make a difference
          </p>
        </section>
      </div>
    </div>
  );
}
