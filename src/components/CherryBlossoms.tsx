import { useMemo } from "react";
import { Petal } from "./Petal";

interface PetalConfig {
  id: number;
  left: number; // vw
  size: number; // px
  duration: number; // s
  delay: number; // s
  drift: number; // px, horizontal sway across the fall
  opacity: number;
  rotateStart: number;
}

const PETAL_COUNT = 24;

function generatePetals(count: number): PetalConfig[] {
  return Array.from({ length: count }, (_, id) => ({
    id,
    left: Math.random() * 100,
    size: 10 + Math.random() * 14,
    duration: 9 + Math.random() * 8,
    delay: Math.random() * -16,
    drift: (Math.random() - 0.5) * 160,
    opacity: 0.35 + Math.random() * 0.45,
    rotateStart: Math.random() * 360,
  }));
}

/**
 * Ambient sakura petals drifting down the hero. Purely decorative, so it is
 * hidden from assistive tech and disabled automatically for users who prefer
 * reduced motion (handled globally in index.css).
 */
export function CherryBlossoms() {
  const petals = useMemo(() => generatePetals(PETAL_COUNT), []);

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute top-0 text-highlight animate-fall"
          style={{
            left: `${petal.left}%`,
            width: petal.size,
            height: petal.size,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
            transform: `rotate(${petal.rotateStart}deg)`,
            // Custom properties consumed by the `fall` keyframes in index.css
            ["--drift" as string]: `${petal.drift}px`,
            ["--petal-opacity" as string]: petal.opacity,
          }}
        >
          <Petal className="w-full h-full" />
        </div>
      ))}
    </div>
  );
}
