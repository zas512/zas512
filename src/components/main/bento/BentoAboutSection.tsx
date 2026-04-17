"use client";

import { motion } from "framer-motion";
import { BentoTrustCard } from "./BentoTrustCard";
import { BentoTechStackCard } from "./BentoTechStackCard";
import { BentoTimezoneCard } from "./BentoTimezoneCard";
import { BentoCollaborationCard } from "./BentoCollaborationCard";
import { BentoWorkspaceCard } from "./BentoWorkspaceCard";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.07,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function BentoAboutSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={container}
      className="relative z-10 w-full px-4 py-16 sm:px-8 lg:px-0"
    >
      <div className="mx-auto w-full max-w-[1260px]">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-stretch md:gap-5">
          <motion.div
            variants={item}
            className="h-full min-h-0 md:col-span-3 md:row-span-2"
          >
            <BentoTrustCard />
          </motion.div>

          <motion.div
            variants={item}
            className="h-full min-h-0 md:col-span-1 md:row-span-4 md:col-start-4 md:row-start-1"
          >
            <BentoTechStackCard />
          </motion.div>

          <motion.div
            variants={item}
            className="h-full min-h-0 md:col-span-1 md:row-span-3 md:col-start-1 md:row-start-3"
          >
            <BentoTimezoneCard />
          </motion.div>

          <motion.div
            variants={item}
            className="h-full min-h-0 md:col-span-2 md:row-span-2 md:col-start-2 md:row-start-3"
          >
            <BentoCollaborationCard />
          </motion.div>

          <motion.div
            variants={item}
            className="h-full min-h-0 md:col-span-3 md:col-start-2 md:row-start-5"
          >
            <BentoWorkspaceCard />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
