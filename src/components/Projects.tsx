import { useState } from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { PROJECTS, type Project } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionTitle } from "./SectionTitle";
import { ImageLightbox } from "./ImageLightbox";
import { useInView } from "../hooks/useInView";

const PROJECTS_PER_PAGE = 2;
const SWIPE_THRESHOLD = 60;

function chunk<T>(items: T[], size: number): T[][] {
  const pages: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    pages.push(items.slice(i, i + size));
  }
  return pages;
}

const PAGES = chunk(PROJECTS, PROJECTS_PER_PAGE);

export function Projects() {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [lightboxProject, setLightboxProject] = useState<Project | null>(null);

  const pageCount = PAGES.length;

  function goTo(nextPage: number, dir: number) {
    setDirection(dir);
    // Wrap around at either end so the carousel loops.
    setPage((nextPage + pageCount) % pageCount);
  }

  function handleDragEnd(_: unknown, info: PanInfo) {
    if (info.offset.x < -SWIPE_THRESHOLD) {
      goTo(page + 1, 1);
    } else if (info.offset.x > SWIPE_THRESHOLD) {
      goTo(page - 1, -1);
    }
  }

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28 md:px-10">
      <SectionTitle title="Projects" align="center" />

      <div ref={ref} className="relative">
        <div className="-m-10 overflow-hidden p-10">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={handleDragEnd}
              className="grid cursor-grab gap-8 active:cursor-grabbing sm:grid-cols-2"
            >
              {PAGES[page].map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  inView={inView}
                  onImageClick={setLightboxProject}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Arrows */}
        {/* {pageCount > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(page - 1, -1)}
              aria-label="Previous projects"
              className="absolute left-3 top-[38%] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-card/90 text-ink-soft shadow-md backdrop-blur transition-colors hover:text-primary hover:border-primary sm:-left-5"
            >
              <FiChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => goTo(page + 1, 1)}
              aria-label="Next projects"
              className="absolute right-3 top-[38%] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-card/90 text-ink-soft shadow-md backdrop-blur transition-colors hover:text-primary hover:border-primary sm:-right-5"
            >
              <FiChevronRight size={18} />
            </button>
          </>
        )} */}

        {/* Dots — one per page, not per project */}
        {pageCount > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            {PAGES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i, i > page ? 1 : -1)}
                aria-label={`Go to projects page ${i + 1}`}
                aria-current={i === page ? "true" : undefined}
                className={`h-2 rounded-full transition-all ${
                  i === page ? "w-6 bg-primary" : "w-2 bg-line hover:bg-highlight"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {lightboxProject && (
          <ImageLightbox
            src={lightboxProject.image}
            alt={`${lightboxProject.name} screenshot`}
            onClose={() => setLightboxProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}