interface PetalProps {
  className?: string;
}

/** A single five-lobed sakura petal, drawn once and reused via CSS transforms. */
export function Petal({ className }: PetalProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M16 2C18 2 19.5 6 16 10C12.5 6 14 2 16 2Z"
        fill="currentColor"
      />
      <path
        d="M16 10C16 10 24 8 27 12C30 16 25 20 16 10Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M16 10C16 10 8 8 5 12C2 16 7 20 16 10Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M16 10C16 10 20 18 17 24C14 30 9 25 16 10Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M16 10C10 16 12 24 16 10Z"
        fill="currentColor"
        opacity="0.7"
      />
    </svg>
  );
}
