import { PROJECTS } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionTitle } from "./SectionTitle";
import { useInView } from "../hooks/useInView";

export function Projects() {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28 md:px-10">
      <SectionTitle eyebrow="Projects" title="Selected work" />

      <div ref={ref} className="grid gap-8 sm:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} inView={inView} />
        ))}
      </div>
    </section>
  );
}
