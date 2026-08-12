import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import { CherryBlossoms } from "./CherryBlossoms";
import { PROFILE } from "../data/site";
import profileImg from "../assets/images/logo-2.png";

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
  // const initials = PROFILE.name
  //   .split(" ")
  //   .map((n) => n[0])
  //   .join("")
  //   .slice(0, 2);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg px-6"
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
          className="mb-8 h-28 w-28 overflow-hidden rounded-full border border-line shadow-[0_0_0_6px_color-mix(in_srgb,var(--color-highlight)_14%,transparent)] sm:h-32 sm:w-32"
        >
          <img src={profileImg} alt={PROFILE.name} className="h-full w-full object-cover" />
        </motion.div>

        <motion.p variants={item} className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
          Portfolio
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-4xl leading-tight text-ink sm:text-5xl md:text-6xl"
        >
          {PROFILE.name}
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-ink-soft sm:text-base"
        >
          {PROFILE.roles.map((role, i) => (
            <span key={role} className="flex items-center gap-3">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-highlight" aria-hidden="true" />}
              {role}
            </span>
          ))}
        </motion.div>

        <motion.p variants={item} className="mt-6 max-w-md text-sm leading-relaxed text-ink-soft sm:text-base">
          {PROFILE.tagline}
        </motion.p>

        <motion.a
          variants={item}
          href="#projects"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-white shadow-[0_8px_24px_-8px_var(--color-primary)] transition-transform hover:scale-[1.03] hover:shadow-[0_10px_28px_-6px_var(--color-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          View My Work
        </motion.a>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-ink-soft transition-colors hover:text-primary"
      >
        <FiArrowDown size={18} />
      </motion.a>
    </section>
  );
}
