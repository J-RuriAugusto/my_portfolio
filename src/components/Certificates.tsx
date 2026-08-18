import { useState } from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { CERTIFICATES } from "../data/certificates";
import { SectionTitle } from "./SectionTitle";
import { useInView } from "../hooks/useInView";

const SWIPE_THRESHOLD = 60;

export function Certificates() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const count = CERTIFICATES.length;
  const current = CERTIFICATES[index];

  function goTo(nextIndex: number, dir: number) {
    setDirection(dir);
    // Wrap around at either end so the carousel loops.
    setIndex((nextIndex + count) % count);
  }

  function handleDragEnd(_: unknown, info: PanInfo) {
    if (info.offset.x < -SWIPE_THRESHOLD) {
      goTo(index + 1, 1);
    } else if (info.offset.x > SWIPE_THRESHOLD) {
      goTo(index - 1, -1);
    }
  }

  if (count === 0) return null;

  return (
    <section id="certificates" className="mx-auto max-w-4xl px-6 py-28 md:px-10">
      <SectionTitle title="Certificates" align="center" />

      <div
        ref={ref}
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div className="relative">
          {/* Slide */}
          <div className="relative overflow-hidden rounded-2xl border border-line bg-card">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current.id}
                custom={direction}
                initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={handleDragEnd}
                className="cursor-grab active:cursor-grabbing"
              >
                <div className="flex aspect-4/3 items-center justify-center bg-bg sm:aspect-16/10">
                  <img
                    src={current.image}
                    alt={`${current.title} — ${current.issuer}`}
                    draggable={false}
                    className="h-full w-full select-none object-contain p-4"
                  />
                </div>

                <div className="border-t border-line px-6 py-5 text-center">
                  <h3 className="font-display text-lg text-ink">{current.title}</h3>
                  <p className="mt-1 text-sm text-ink-soft">
                    {current.issuer} &middot; {current.date}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrows */}
          {count > 1 && (
            <>
              <button
                type="button"
                onClick={() => goTo(index - 1, -1)}
                aria-label="Previous certificate"
                className="absolute left-3 top-[38%] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-card/90 text-ink-soft shadow-md backdrop-blur transition-colors hover:text-primary hover:border-primary sm:-left-5"
              >
                <FiChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => goTo(index + 1, 1)}
                aria-label="Next certificate"
                className="absolute right-3 top-[38%] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-card/90 text-ink-soft shadow-md backdrop-blur transition-colors hover:text-primary hover:border-primary sm:-right-5"
              >
                <FiChevronRight size={18} />
              </button>
            </>
          )}
        </div>

        {/* Dots */}
        {count > 1 && (
          <div className="mt-6 flex items-center justify-center gap-2">
            {CERTIFICATES.map((cert, i) => (
              <button
                key={cert.id}
                type="button"
                onClick={() => goTo(i, i > index ? 1 : -1)}
                aria-label={`Go to certificate ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-primary" : "w-2 bg-line hover:bg-highlight"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
