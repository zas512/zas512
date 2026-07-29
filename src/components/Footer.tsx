import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-border py-10">
      <div className="container mx-auto flex flex-col items-center gap-3 px-6 text-xs text-muted-foreground md:flex-row md:justify-between">
        <div>
          © {new Date().getFullYear()} {profile.name} - crafted with care.
        </div>
        <div className="font-mono">v1.0 · {profile.handle}</div>
      </div>
    </footer>
  );
}
