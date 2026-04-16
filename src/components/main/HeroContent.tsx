"use client";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { HiSparkles } from "react-icons/hi2";
import { LuFolderOpen } from "react-icons/lu";
import { PiPlayFill } from "react-icons/pi";

const CODE_LINES = [
  {
    id: "line-comment",
    text: "// Welcome to my workspace",
    tone: "text-zinc-500",
  },
  {
    id: "line-import",
    text: "import { Developer } from './universe';",
    tone: "text-[#d7c9ff]",
  },
  { id: "line-empty-1", text: "", tone: "text-[#d7d9ff]" },
  {
    id: "line-component",
    text: "const Portfolio = () => {",
    tone: "text-[#f3c66d]",
  },
  { id: "line-return", text: "  return (", tone: "text-[#a78bfa]" },
  { id: "line-open-tag", text: "    <Developer", tone: "text-[#d7d9ff]" },
  { id: "line-name", text: "      name='Abdul Momin'", tone: "text-[#22d3ee]" },
  {
    id: "line-role",
    text: "      role='Full Stack Engineer'",
    tone: "text-emerald-400",
  },
  {
    id: "line-passion",
    text: "      passion='Engineering Beyond Boundaries'",
    tone: "text-emerald-400",
  },
  { id: "line-close-tag", text: "    />", tone: "text-[#d7d9ff]" },
  { id: "line-close-return", text: "  );", tone: "text-[#d7d9ff]" },
  { id: "line-close-component", text: "};", tone: "text-[#d7d9ff]" },
];

const HeroContent = () => {
  const [typedLines, setTypedLines] = useState<string[]>(
    Array(CODE_LINES.length).fill(""),
  );
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= CODE_LINES.length) return;

    const activeLine = CODE_LINES[currentLine].text;
    const lineCompleted = currentChar >= activeLine.length;
    const delay = lineCompleted ? 220 : 24;

    const timer = window.setTimeout(() => {
      if (lineCompleted) {
        setCurrentLine((previous) => previous + 1);
        setCurrentChar(0);
        return;
      }

      setTypedLines((previous) => {
        const next = [...previous];
        next[currentLine] = activeLine.slice(0, currentChar + 1);
        return next;
      });
      setCurrentChar((previous) => previous + 1);
    }, delay);

    return () => window.clearTimeout(timer);
  }, [currentLine, currentChar]);

  const isTypingFinished = currentLine >= CODE_LINES.length;
  const visibleLineCount = useMemo(() => {
    return Math.max(currentLine + 1, 1);
  }, [currentLine]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="z-20 mt-28 w-full px-4 sm:px-8 lg:mt-36 lg:px-12"
    >
      <div className="mx-auto grid w-full max-w-[1260px] items-center gap-10 lg:grid-cols-[1fr_1.02fr]">
        <div className="flex w-full flex-col gap-6 text-left">
          <motion.div
            variants={slideInFromTop}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-[11px] tracking-[0.16em] text-orange-200"
          >
            <HiSparkles className="h-4 w-4 text-orange-300" />
            SYSTEM.KERNEL :: v2.5.0 ONLINE
          </motion.div>

          <motion.h1
            variants={slideInFromLeft(0.4)}
            className="max-w-[620px] text-5xl font-bold leading-[1.04] text-zinc-100 sm:text-6xl lg:text-7xl"
          >
            Hello, I&apos;m
            <span className="mt-1 block bg-linear-to-r from-orange-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
              Abdul Momin
            </span>
          </motion.h1>

          <motion.p
            variants={slideInFromLeft(0.7)}
            className="max-w-[620px] text-xl leading-relaxed text-zinc-300"
          >
            <span className="font-mono text-orange-300">{`<Architect />`}</span>{" "}
            Engineering Beyond Boundaries. Specializing in distributed systems,
            real-time architecture, and high-performance applications.
          </motion.p>

          <motion.div
            variants={slideInFromLeft(0.9)}
            className="mt-3 flex max-w-[620px] items-center gap-4"
          >
            <div className="flex-1 rounded-xl border border-orange-400/25 bg-zinc-900/80 p-3 shadow-[inset_0_0_0_1px_rgba(251,146,60,0.08)]">
              <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-widest text-zinc-300">
                <span>Initialize OS</span>
                <span className="text-orange-300">Loading...</span>
              </div>
              <div className="h-1.5 rounded-full bg-zinc-700/70">
                <div className="h-1.5 w-4/5 rounded-full bg-linear-to-r from-orange-400 to-indigo-400" />
              </div>
            </div>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/15 bg-white/5 px-5 py-4 text-sm font-semibold text-zinc-100 transition hover:bg-white/10"
            >
              Check out GitHub
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={slideInFromRight(0.8)}
          className="relative w-full"
        >
          <div className="pointer-events-none absolute -inset-2 -z-10 rounded-[24px] bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.2),transparent_44%),radial-gradient(circle_at_bottom_right,rgba(251,146,60,0.18),transparent_48%)] blur-xl" />
          <div className="w-full overflow-hidden rounded-2xl border border-white/12 bg-[#070a12]/95 shadow-[0_18px_70px_rgba(0,0,0,0.55)]">
            <div className="flex h-11 items-center justify-between border-b border-white/10 bg-zinc-700/35 px-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>
              <p className="text-xs font-semibold tracking-[0.12em] text-zinc-200">
                portfolio.tsx
              </p>
              <span className="w-[42px]" />
            </div>
            <pre className="min-h-[390px] px-4 py-5 font-mono text-[0.96rem] leading-8 text-[#d7d9ff] sm:px-5">
              {CODE_LINES.slice(0, visibleLineCount).map((line, index) => {
                const typedLine = typedLines[index];
                const showCursor =
                  (!isTypingFinished &&
                    index === currentLine &&
                    currentChar <= line.text.length) ||
                  (isTypingFinished && index === CODE_LINES.length - 1);

                return (
                  <div
                    key={line.id}
                    className="grid grid-cols-[22px_1fr] gap-3"
                  >
                    <span className="select-none text-[0.8rem] text-blue-300/45">
                      {index + 1}
                    </span>
                    <span className="whitespace-pre-wrap wrap-break-word">
                      <span className={line.tone}>{typedLine}</span>
                      {showCursor && (
                        <span className="ml-px animate-pulse text-blue-300">
                          |
                        </span>
                      )}
                    </span>
                  </div>
                );
              })}
            </pre>
            <div className="flex items-center gap-3 border-t border-white/8 px-4 py-4 sm:px-5">
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-lg border border-orange-400/30 bg-orange-500/12 px-4 py-2 text-sm font-medium text-orange-200 transition hover:bg-orange-500/20"
              >
                <PiPlayFill className="h-4 w-4" />
                Run Profile
              </a>
              <a
                href="/work"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:bg-white/10"
              >
                <LuFolderOpen className="h-4 w-4" />
                View Projects
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
