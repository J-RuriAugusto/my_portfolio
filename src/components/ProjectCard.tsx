import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiMaximize2 } from "react-icons/fi";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  inView: boolean;
  onImageClick: (project: Project) => void;
}

export function ProjectCard({ project, index, inView, onImageClick }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-card transition-shadow hover:shadow-[0_20px_40px_-20px_var(--color-highlight)]"
    >
      <button
        type="button"
        onClick={() => onImageClick(project)}
        aria-label={`View larger screenshot of ${project.name}`}
        className="relative aspect-[16/10] w-full cursor-zoom-in overflow-hidden border-b border-line"
      >
        <img
          src={project.image}
          alt={`${project.name} screenshot`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink">
            <FiMaximize2 size={16} />
          </span>
        </span>
      </button>

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