import { motion } from "framer-motion";
import { EXPERIENCE } from "../data/experience";
import { SectionTitle } from "./SectionTitle";
import { useInView } from "../hooks/useInView";

function TimelineItem({ entry, index }: { entry: (typeof EXPERIENCE)[number]; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <div ref={ref} className="relative pb-12 pl-10 last:pb-0">
      {/* Connecting line */}
      <span className="absolute left-[7px] top-2 h-full w-px bg-line" aria-hidden="true" />

      {/* Node */}
      <motion.span
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-bg"
      />

      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
      >
        <span className="text-xs uppercase tracking-[0.25em] text-primary">{entry.year}</span>
        <h3 className="mt-1 font-display text-xl text-ink">{entry.title}</h3>
        <p className="mt-0.5 text-sm text-ink-soft">{entry.org}</p>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">{entry.description}</p>
      </motion.div>
    </div>
  );
}

export function Timeline() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28 md:px-10">
      <SectionTitle eyebrow="Experience" title="Where I've spent my time" />
      <div className="mt-4">
        {EXPERIENCE.map((entry, i) => (
          <TimelineItem key={`${entry.year}-${entry.title}`} entry={entry} index={i} />
        ))}
      </div>
    </section>
  );
}
