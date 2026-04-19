"use client";
import { motion } from "framer-motion";
import { BentoTrustCard } from "./BentoTrustCard";
import { BentoTechStackCard } from "./BentoTechStackCard";
import { BentoTimezoneCard } from "./BentoTimezoneCard";
import { BentoWorkspaceCard } from "./BentoWorkspaceCard";
import { BentoCollaborationCard } from "./BentoCollaborationCard";

const easeIn = [0.42, 0, 1, 1] as const;

const cardTransition = {
  duration: 0.52,
  ease: easeIn,
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0,
      delayChildren: 0,
    },
  },
};

const trustVariants = {
  hidden: { opacity: 0, x: -18 },
  visible: {
    opacity: 1,
    x: 0,
    transition: cardTransition,
  },
};

const techVariants = {
  hidden: { opacity: 0, y: -18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: cardTransition,
  },
};

const timezoneVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: cardTransition,
  },
};

const collaborationVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.55, ease: easeIn },
  },
};

const workspaceVariants = {
  hidden: { opacity: 0, x: 18 },
  visible: {
    opacity: 1,
    x: 0,
    transition: cardTransition,
  },
};

export function BentoAboutSection() {
  return (
    <section className="w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35, margin: "0px" }}
        variants={container}
        className="grid h-full min-h-[720px] grid-cols-3 grid-rows-3 gap-4 overflow-visible"
      >
        <motion.div
          variants={trustVariants}
          className="col-start-1 col-end-3 row-start-1 row-end-2 h-full will-change-transform"
        >
          <BentoTrustCard />
        </motion.div>
        <motion.div
          variants={techVariants}
          className="col-start-3 col-end-4 row-start-1 row-end-3 h-full will-change-transform"
        >
          <BentoTechStackCard />
        </motion.div>
        <motion.div
          variants={timezoneVariants}
          className="col-start-1 col-end-2 row-start-2 row-end-4 h-full will-change-transform"
        >
          <BentoTimezoneCard />
        </motion.div>
        <motion.div
          variants={collaborationVariants}
          className="col-start-2 col-end-3 row-start-2 row-end-3 h-full"
        >
          <BentoCollaborationCard />
        </motion.div>
        <motion.div
          variants={workspaceVariants}
          className="col-start-2 col-end-4 row-start-3 row-end-4 h-full will-change-transform"
        >
          <BentoWorkspaceCard />
        </motion.div>
      </motion.div>
    </section>
  );
}
