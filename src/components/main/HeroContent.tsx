"use client";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { FolderOpen, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { person, codeLines } from "@/app/resources";

const HeroContent = () => {
  const [typedLines, setTypedLines] = useState<string[]>(
    Array(codeLines.length).fill(""),
  );
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= codeLines.length) return;
    const activeLine = codeLines[currentLine].text;
    const lineCompleted = currentChar >= activeLine.length;
    const charDelay = 10;
    const lineDelay = 90;
    const delay = lineCompleted ? lineDelay : charDelay;
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

  const isTypingFinished = currentLine >= codeLines.length;
  const visibleLineCount = useMemo(() => {
    return Math.max(currentLine + 1, 1);
  }, [currentLine]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex min-h-screen w-full items-center px-4 sm:px-8 lg:px-0"
    >
      <div className="mx-auto grid w-full max-w-[1260px] items-center gap-10 lg:grid-cols-[1fr_1.02fr]">
        {/* Left Side */}
        <div className="flex w-full flex-col gap-6 text-left">
          <motion.div variants={slideInFromTop} className="w-fit">
            <Badge
              variant="outline"
              className="h-8 gap-2 rounded-full border-orange-400/30 bg-orange-500/10 px-4 text-[11px] tracking-[0.16em] text-orange-200"
            >
              <Sparkles className="h-4 w-4 text-orange-300" />
              SYSTEM.KERNEL :: v2.5.0 ONLINE
            </Badge>
          </motion.div>

          <motion.h1
            variants={slideInFromLeft(0.4)}
            className="max-w-[620px] font-heading text-5xl font-bold leading-[1.04] text-zinc-100 sm:text-6xl lg:text-7xl"
          >
            Hello, I&apos;m
            <span className="mt-1 block bg-linear-to-r from-orange-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
              {person.name}
            </span>
          </motion.h1>

          <motion.p
            variants={slideInFromLeft(0.7)}
            className="max-w-[620px] text-xl leading-relaxed text-zinc-300"
          >
            <span className="font-mono text-orange-300">{`< AI | Full Stack Developer />`}</span>
            <p>
              Engineering Beyond Boundaries. Specializing in distributed
              systems, real-time architecture, and high-performance
              applications.
            </p>
          </motion.p>

          <motion.div
            variants={slideInFromLeft(0.9)}
            className="mt-3 flex max-w-[620px] items-center gap-4"
          >
            <Card
              size="sm"
              className="flex-1 gap-3 rounded-xl border-orange-400/25 bg-zinc-900/80 py-3 shadow-[inset_0_0_0_1px_rgba(251,146,60,0.08)]"
            >
              <CardContent className="px-3">
                <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-widest text-zinc-300">
                  <span>Initialize OS</span>
                  <span className="text-orange-300">Loading...</span>
                </div>
                <Progress
                  value={80}
                  className="h-1.5 bg-zinc-700/70 **:data-[slot=progress-indicator]:bg-linear-to-r **:data-[slot=progress-indicator]:from-orange-400 **:data-[slot=progress-indicator]:to-indigo-400"
                />
              </CardContent>
            </Card>
            <Button
              asChild
              variant="outline"
              className="h-14 rounded-xl border-white/15 bg-white/5 px-5 text-sm font-semibold text-zinc-100 hover:bg-white/10 hover:text-zinc-100"
            >
              <a href="https://github.com" target="_blank" rel="noreferrer">
                Check out GitHub
              </a>
            </Button>
          </motion.div>
        </div>
        {/* Right Side */}
        <motion.div
          variants={slideInFromRight(0.8)}
          className="relative w-full transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_36px_rgba(139,92,246,0.16),0_0_22px_rgba(168,85,247,0.1)] rounded-2xl"
        >
          <div className="pointer-events-none absolute -inset-2 -z-10 rounded-[24px] bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.2),transparent_44%),radial-gradient(circle_at_bottom_right,rgba(251,146,60,0.18),transparent_48%)] blur-xl" />
          <Card className="w-full gap-0 overflow-hidden rounded-2xl border-white/12 bg-[#070a12]/95 py-0 shadow-[0_18px_70px_rgba(0,0,0,0.55)]">
            <CardHeader className="flex h-10 items-center rounded-none border-b border-white/10 bg-zinc-700/35">
              <div className="flex items-center gap-2 h-full">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>
              <p className="text-xs w-full text-center font-semibold tracking-[0.12em] text-zinc-200">
                portfolio.tsx
              </p>
            </CardHeader>
            <CardContent className="px-4 py-4 sm:px-5">
              <pre className="min-h-max font-mono text-[0.92rem] leading-7 text-[#d7d9ff]">
                {codeLines.slice(0, visibleLineCount).map((line, index) => {
                  const typedLine = typedLines[index];
                  const isActiveTypingLine =
                    !isTypingFinished && index === currentLine;
                  const isLastCharHighlighted =
                    isActiveTypingLine &&
                    currentChar >= line.text.length &&
                    typedLine.length > 0;

                  const showCursor =
                    (isActiveTypingLine && currentChar < line.text.length) ||
                    (isTypingFinished && index === codeLines.length - 1);

                  const isActive = isActiveTypingLine && typedLine.length > 0;

                  return (
                    <div
                      key={line.id}
                      className="grid grid-cols-[22px_1fr] gap-2"
                    >
                      <span className="select-none text-[0.8rem] text-blue-300/45">
                        {index + 1}
                      </span>
                      <span className="whitespace-pre-wrap wrap-break-word">
                        {isLastCharHighlighted ? (
                          <>
                            <span className={line.tone}>
                              {typedLine.slice(0, -1)}
                            </span>
                            <span
                              className={[
                                line.tone,
                                "inline-block rounded-[2px] bg-[#049EE2]/25 px-px animate-pulse",
                                "shadow-[0_0_14px_rgba(4,158,226,0.65)]",
                              ].join(" ")}
                              style={{ animationDuration: "140ms" }}
                            >
                              {typedLine.slice(-1)}
                            </span>
                          </>
                        ) : (
                          <span
                            className={[
                              line.tone,
                              isActive
                                ? "[text-shadow:0_0_14px_rgba(4,158,226,0.18)] transition-all duration-75"
                                : "",
                            ].join(" ")}
                          >
                            {typedLine}
                          </span>
                        )}
                        {showCursor ? (
                          isTypingFinished && index === codeLines.length - 1 ? (
                            <motion.span
                              className="ml-px inline-block text-violet-300"
                              aria-hidden
                              animate={{ opacity: [1, 0] }}
                              transition={{
                                duration: 0.28,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "linear",
                              }}
                            >
                              |
                            </motion.span>
                          ) : (
                            <span className="ml-px text-blue-300">|</span>
                          )
                        ) : null}
                      </span>
                    </div>
                  );
                })}
              </pre>
            </CardContent>
            <CardFooter className="border-t h-12 border-white/8">
              <Button
                asChild
                variant="outline"
                className="rounded-lg border-white/15 bg-white/5 text-zinc-100 hover:bg-white/10 hover:text-zinc-100"
              >
                <Link href="/work">
                  <FolderOpen className="h-4 w-4" />
                  View Projects
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
