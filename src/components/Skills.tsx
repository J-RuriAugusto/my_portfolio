import { motion } from "framer-motion";
import { SKILLS } from "../data/skills";
import { SectionTitle } from "./SectionTitle";
import { useInView } from "../hooks/useInView";

export function Skills() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28 md:px-10">
      <SectionTitle eyebrow="Skills" title="What I work with" />

      <div ref={ref} className="grid gap-10 sm:grid-cols-2">
        {SKILLS.map((group, groupIndex) => (
          <div key={group.label}>
            <h3 className="mb-4 text-sm uppercase tracking-[0.2em] text-ink-soft">{group.label}</h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                    delay: groupIndex * 0.08 + i * 0.05,
                  }}
                  whileHover={{ y: -3 }}
                  className="cursor-default rounded-xl border border-line bg-card px-4 py-2.5 text-sm text-ink shadow-sm transition-[box-shadow,border-color] hover:border-primary hover:shadow-[0_6px_20px_-8px_var(--color-highlight)]"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
