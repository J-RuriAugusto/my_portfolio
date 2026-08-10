import { SKILLS } from "../data/skills";
import { SectionTitle } from "./SectionTitle";

// Duplicated once so the strip can loop seamlessly at -50% translateX.
const LOOP = [...SKILLS, ...SKILLS];

export function Skills() {
  return (
    <section id="skills" className="py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionTitle eyebrow="Skills" title="What I work with" align="center" />
      </div>

      <div
        className="group relative mt-6 overflow-hidden py-8"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee items-center gap-16 group-hover:[animation-play-state:paused]">
          {LOOP.map((skill, i) => (
            <div
              key={`${skill.name}-${i}`}
              className="flex w-28 flex-col items-center gap-3 text-center"
            >
              {/* White chip so dark/black logos (GitHub, VS Code, etc.)
                  stay visible against the dark-mode background too. */}
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white p-3 shadow-sm ring-1 ring-line">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="h-full w-full object-contain"
                  loading="lazy"
                  draggable={false}
                />
              </div>
              <span className="text-sm text-ink-soft">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}