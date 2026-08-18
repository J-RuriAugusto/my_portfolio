import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { useInView } from "../hooks/useInView";
import { PROFILE } from "../data/site";
import profileImg from "../assets/images/profile.jpg";

const FOCUS_AREAS = ["Frontend Development", "Web Development", "Full-Stack Development", "Mobile Development", "Software Engineering", "Data Visualization"];

export function About() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28 md:px-10">
      <SectionTitle title="About" align="center"/>

      <div ref={ref} className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto aspect-4/5 w-full max-w-sm overflow-hidden rounded-2xl border border-line bg-card"
        >
          <img src={profileImg} alt={PROFILE.name} className="h-full w-full object-cover" />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, transparent 60%, color-mix(in srgb, var(--color-primary) 12%, transparent))",
            }}
          />
        </motion.div>

        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s",
          }}
        >
          <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
            I'm a Computer Science graduate from UP Cebu, and most of what I know about
            building software I picked up by actually shipping things — a case-tracking system for
            the Commission on Human Rights, a pharmacy inventory tool for my thesis, a
            structural-inspection app that uses , Gemini for reports, and computer vision to flag
            building damage, and a dashboard forecasting power demand across the Visayas. I like frontend and
            UI/UX most, but I don't mind crossing into backend or data work when a project calls for it.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {FOCUS_AREAS.map((area) => (
              <span
                key={area}
                className="rounded-full border border-line bg-card px-4 py-1.5 text-sm text-ink-soft"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
