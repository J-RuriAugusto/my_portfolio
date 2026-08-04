export interface SkillGroup {
  label: string;
  items: string[];
}

export const SKILLS: SkillGroup[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "Python", "PHP"] },
  { label: "Frontend", items: ["React", "Vue", "Tailwind CSS"] },
  { label: "Backend & Data", items: ["Node", "MySQL"] },
  { label: "Tools & Design", items: ["Git", "Figma"] },
];
