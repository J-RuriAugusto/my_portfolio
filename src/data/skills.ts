export interface TechSkill {
  name: string;
  /**
   * Path to the logo image. Drop the file into `public/logos/` and
   * reference it here as `/logos/filename.svg` — no import needed.
   */
  logo: string;
}

export const SKILLS: TechSkill[] = [
  { name: "TypeScript", logo: "/logos/typescript.png" },
  { name: "JavaScript", logo: "/logos/javascript.png" },
  { name: "Python", logo: "/logos/python.png" },
  { name: "PHP", logo: "/logos/php.png" },
  { name: "React", logo: "/logos/react.png" },
  { name: "Vue.js", logo: "/logos/vuejs.png" },
  { name: "Tailwind CSS", logo: "/logos/tailwindcss.png" },
  { name: "Node.js", logo: "/logos/nodejs.png" },
  { name: "MySQL", logo: "/logos/mysql.svg" },
  { name: "Expo Go", logo: "/logos/expo.png" },
  { name: "GitHub", logo: "/logos/github.svg" },
  { name: "Figma", logo: "/logos/figma.png" },
];