import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

interface SectionTitleProps {
  // eyebrow: string;
  title: string;
  align?: "left" | "center";
}

export function SectionTitle({ title, align = "left" }: SectionTitleProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`mb-12 flex flex-col ${align === "center" ? "items-center text-center" : "items-start"}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {/* <span className="mb-2 text-xs uppercase tracking-[0.3em] text-primary">{eyebrow}</span> */}
      <h2 className="text-3xl uppercase tracking-[0.3em] text-primary sm:text-4xl">{title}</h2>
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: inView ? 1 : 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        style={{ transformOrigin: align === "center" ? "center" : "left" }}
        className="mt-4 h-px w-16 bg-highlight"
      />
    </div>
  );
}
