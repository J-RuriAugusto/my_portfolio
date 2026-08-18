import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import { CherryBlossoms } from "./CherryBlossoms";
import { PROFILE } from "../data/site";
import profileImg from "../assets/images/logo-1.jpg";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-bg px-6 py-20"
    >
      {/* Ambient gradient wash, deepest at the bottom */}
      <div
        className="pointer-events-none absolute inset-0 dark:opacity-100 opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 20%, color-mix(in srgb, var(--color-highlight) 18%, transparent), transparent 70%), linear-gradient(180deg, var(--color-bg) 0%, color-mix(in srgb, var(--color-primary) 6%, var(--color-bg)) 100%)",
        }}
      />

      <CherryBlossoms />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex max-w-2xl flex-col items-center text-center"
      >
        <motion.div
          variants={item}
          className="mb-6 h-24 w-24 overflow-hidden rounded-full border border-line shadow-[0_0_0_6px_color-mix(in_srgb,var(--color-highlight)_14%,transparent)] sm:mb-8 sm:h-28 sm:w-28 md:h-32 md:w-32"
        >
          <img
            src={profileImg}
            alt={PROFILE.name}
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.p variants={item} className="mb-2 text-xs uppercase tracking-[0.3em] text-primary sm:mb-3">
          Portfolio
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-3xl leading-tight text-ink sm:text-5xl md:text-6xl"
        >
          {PROFILE.name}
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-ink-soft sm:mt-5 sm:text-base"
        >
          {PROFILE.roles.map((role, i) => (
            <span key={role} className="flex items-center gap-3">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-highlight" aria-hidden="true" />}
              {role}
            </span>
          ))}
        </motion.div>

        <motion.p variants={item} className="mt-5 max-w-md text-sm leading-relaxed text-ink-soft sm:mt-6 sm:text-base">
          {PROFILE.tagline}
        </motion.p>

        <motion.a
          variants={item}
          href="#projects"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-white shadow-[0_8px_24px_-8px_var(--color-primary)] transition-transform hover:scale-[1.03] hover:shadow-[0_10px_28px_-6px_var(--color-primary)] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary sm:mt-10"
        >
          View My Work
        </motion.a>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 text-ink-soft transition-colors hover:text-primary sm:bottom-8"
      >
        <FiArrowDown size={18} />
      </motion.a>
    </section>
  );
}