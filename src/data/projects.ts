export interface Project {
  id: string;
  name: string;
  summary: string;
  stack: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "pharmatrack",
    name: "PharmaTrack",
    summary:
      "A medicine inventory management system that tracks stock levels, expiry dates, and restocking needs for a small pharmacy.",
    stack: ["PHP", "MySQL", "JavaScript"],
    githubUrl: "https://github.com/",
    featured: true,
  },
  {
    id: "gridpulse",
    name: "GridPulse PH",
    summary:
      "An interactive analytics dashboard forecasting energy grid demand using Python and Plotly, built to make raw utility data legible at a glance.",
    stack: ["Python", "Plotly", "Data Analysis"],
    githubUrl: "https://github.com/",
    featured: true,
  },
  {
    id: "inspectify",
    name: "Inspectify",
    summary:
      "A mobile inspection app for field teams to log, photograph, and report site issues on the go.",
    stack: ["React Native"],
    githubUrl: "https://github.com/",
  },
  {
    id: "chr-cmms",
    name: "CHR-CMMS",
    summary:
      "A computerized maintenance management dashboard built for a government office to track assets, work orders, and maintenance schedules.",
    stack: ["React", "Node", "MySQL"],
    githubUrl: "https://github.com/",
  },
];
