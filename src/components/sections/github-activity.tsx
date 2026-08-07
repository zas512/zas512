"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GH_USER = "zas512";

type Contribution = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };
type ContribResponse = {
  total: Record<string, number>;
  contributions: Contribution[];
};
type GhUser = { followers: number; public_repos: number };
type GhRepo = { stargazers_count: number; forks_count: number; fork: boolean };

type GithubData = {
  followers: number;
  publicRepos: number;
  stars: number;
  forks: number;
  contributions: Contribution[];
  totalContrib: number;
};

async function fetchGithub(): Promise<GithubData> {
  const [userRes, contribRes, reposRes] = await Promise.all([
    fetch(`https://api.github.com/users/${GH_USER}`),
    fetch(`https://github-contributions-api.jogruber.de/v4/${GH_USER}?y=last`),
    fetch(
      `https://api.github.com/users/${GH_USER}/repos?per_page=100&type=owner`
    )
  ]);
  const user: GhUser = userRes.ok
    ? await userRes.json()
    : { followers: 0, public_repos: 0 };
  const contrib: ContribResponse = contribRes.ok
    ? await contribRes.json()
    : { total: {}, contributions: [] };
  const repos: GhRepo[] = reposRes.ok ? await reposRes.json() : [];

  const stars = repos.reduce((s, r) => s + (r.stargazers_count || 0), 0);
  const forks = repos.reduce((s, r) => s + (r.forks_count || 0), 0);
  const totalContrib = contrib.contributions.reduce((s, c) => s + c.count, 0);

  return {
    followers: user.followers,
    publicRepos: user.public_repos,
    stars,
    forks,
    contributions: contrib.contributions,
    totalContrib
  };
}

const levelColor = (lvl: number) => {
  switch (lvl) {
    case 0:
      return "bg-white/[0.04] border-white/[0.03]";
    case 1:
      return "bg-primary/20 border-primary/10";
    case 2:
      return "bg-primary/40 border-primary/20";
    case 3:
      return "bg-primary/70 border-primary/30";
    case 4:
      return "bg-primary border-primary/40 shadow-[0_0_8px_oklch(0.78_0.16_230_/_0.6)]";
    default:
      return "bg-white/5";
  }
};

function buildWeeks(contributions: Contribution[]) {
  if (!contributions.length)
    return {
      weeks: [] as (Contribution | null)[][],
      monthLabels: [] as { label: string; weekIndex: number }[]
    };

  const first = new Date(contributions[0].date);
  const lead = first.getDay();
  const padded: (Contribution | null)[] = [
    ...Array.from({ length: lead }, () => null),
    ...contributions
  ];
  const weeks: (Contribution | null)[][] = [];
  for (let i = 0; i < padded.length; i += 7) weeks.push(padded.slice(i, i + 7));

  const monthLabels: { label: string; weekIndex: number }[] = [];
  let lastMonth = -1;
  weeks.forEach((w, idx) => {
    const firstReal = w.find(Boolean);
    if (!firstReal) return;
    const m = new Date(firstReal.date).getMonth();
    if (m !== lastMonth) {
      monthLabels.push({
        label: new Date(firstReal.date).toLocaleString("en-US", {
          month: "short"
        }),
        weekIndex: idx
      });
      lastMonth = m;
    }
  });
  return { weeks, monthLabels };
}

function renderCell(cell: Contribution | null, w: number, d: number) {
  if (!cell) return <div key={d} className="size-3.5" />;
  return (
    <motion.div
      key={d}
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25, delay: (w * 7 + d) * 0.0008 }}
      title={`${cell.date} · ${cell.count} contributions`}
      className={`size-3.5 rounded-[3px] border ${levelColor(cell.level)}`}
    />
  );
}

export function GithubActivity() {
  const [data, setData] = useState<GithubData | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    setIsLoading(true);
    setIsError(false);

    fetchGithub()
      .then((result) => {
        if (!cancelled) setData(result);
      })
      .catch(() => {
        if (!cancelled) setIsError(true);
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const { weeks, monthLabels } = buildWeeks(data?.contributions ?? []);

  return (
    <section className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Developer insights · live from github
          </p>
          <h2 className="mt-4 font-display text-5xl leading-[1.02] md:text-7xl">
            Github <span className="italic text-foreground">Activity</span>
          </h2>
          <a
            href={`https://github.com/${GH_USER}`}
            target="_blank"
            rel="noreferrer"
            className="mt-3 font-mono text-xs text-muted-foreground hover:text-foreground"
          >
            @{GH_USER}
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-14 max-w-5xl rounded-2xl border border-border bg-card/60 p-6 md:p-10"
        >
          {isLoading && (
            <div className="flex h-50 items-center justify-center font-mono text-xs text-muted-foreground">
              Loading contributions…
            </div>
          )}

          {!isLoading && (isError || !weeks.length) && (
            <div className="flex h-50 items-center justify-center font-mono text-xs text-muted-foreground">
              Couldn't load GitHub data right now.
            </div>
          )}

          {!isLoading && !isError && weeks.length > 0 && (
            <>
              {/* Months — hidden on mobile, pixel offset matches size-3.5 + gap-0.75 */}
              <div className="relative mb-2 hidden h-4 pl-1 font-mono text-xs text-muted-foreground md:block">
                {monthLabels.map((m) => (
                  <span
                    key={`${m.label}-${m.weekIndex}`}
                    className="absolute"
                    style={{ left: `calc(${m.weekIndex} * (14px + 3px))` }}
                  >
                    {m.label}
                  </span>
                ))}
              </div>

              {/* Grid */}
              <div className="w-full overflow-x-auto">
                <div className="flex min-w-max gap-0.75">
                  {weeks.map((col, w) => {
                    const weekKey = col.find(Boolean)?.date ?? `week-${w}`;
                    return (
                    <div key={weekKey} className="flex flex-col gap-0.75">
                      {col.map((cell, d) => renderCell(cell, w, d))}
                    </div>
                    );
                  })}
                </div>
              </div>

              {/* Legend */}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-muted-foreground">
                <span>
                  {data?.totalContrib ?? 0} contributions in the last year
                </span>
                <div className="flex items-center gap-1.5">
                  <span>Less</span>
                  {[0, 1, 2, 3, 4].map((l) => (
                    <span
                      key={l}
                      className={`size-2.5 rounded-[2px] border ${levelColor(l)}`}
                    />
                  ))}
                  <span>More</span>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
