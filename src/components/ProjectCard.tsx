import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  inView: boolean;
}

export function ProjectCard({ project, index, inView }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-card transition-shadow hover:shadow-[0_20px_40px_-20px_var(--color-highlight)]"
    >
      {/* Placeholder visual — swap for a real screenshot per project */}
      <div
        className="flex aspect-[16/10] items-center justify-center border-b border-line font-display text-2xl text-primary/70"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in srgb, var(--color-primary) 10%, var(--color-card)), color-mix(in srgb, var(--color-highlight) 16%, var(--color-card)))",
        }}
      >
        {project.name}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl text-ink">{project.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{project.summary}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line px-3 py-1 text-xs text-ink-soft"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4 text-sm">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-ink-soft transition-colors hover:text-primary"
            >
              <FiGithub size={15} /> Code
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-ink-soft transition-colors hover:text-primary"
            >
              <FiArrowUpRight size={15} /> Live demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
