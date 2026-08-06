const services = [
  "Full-stack apps",
  "AI-native products",
  "VoIP and realtime",
  "SaaS architecture",
  "DevOps delivery",
  "Performance tuning",
];

export function WorkspaceCardBackground() {
  return (
    <div className="relative h-full overflow-hidden px-4 py-5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_90%_100%,rgba(244,114,182,0.14),transparent_52%)]" />
      <div className="relative flex h-full flex-col justify-end gap-3">
        <div className="flex flex-wrap gap-2 transition-transform duration-300 group-hover:-translate-y-1.5">
          {services.map((service) => (
            <span
              key={service}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-zinc-300"
            >
              {service}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
