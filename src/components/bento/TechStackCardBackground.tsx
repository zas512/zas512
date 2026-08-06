const firstRow = ["TypeScript", "React", "Next.js", "Tailwind"];
const secondRow = ["Node.js", "FastAPI", "PostgreSQL", "Redis"];
const thirdRow = ["AWS", "Docker", "WebRTC", "LangChain"];

function PillRow({
  items,
  offset,
}: Readonly<{ items: string[]; offset: string }>) {
  return (
    <div className={`flex flex-wrap gap-2 ${offset}`}>
      {items.map((item) => (
        <span
          key={item}
          className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-zinc-300"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export function TechStackCardBackground() {
  return (
    <div className="relative h-full overflow-hidden px-4 pt-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_58%_at_50%_120%,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="relative space-y-3 transition-transform duration-300 group-hover:-translate-y-2">
        <PillRow items={firstRow} offset="" />
        <PillRow items={secondRow} offset="translate-x-5" />
        <PillRow items={thirdRow} offset="-translate-x-2" />
      </div>
    </div>
  );
}
