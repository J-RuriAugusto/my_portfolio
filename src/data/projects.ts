export interface Project {
  id: string;
  name: string;
  summary: string;
  stack: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  image: string;
}

export const PROJECTS: Project[] = [
  {
    id: "inspectify",
    name: "Inspectify",
    summary:
      "A structural integrity assessment app using AR, machine learning, and computer vision — handles photo-based damage analysis, real-time feedback, emergency hotline access, and map integration for nearby hardware stores.",
    stack: ["React Native", "TypeScript", "JavaScript", "Expo Go", "Railway"],
    githubUrl: "https://github.com/J-RuriAugusto/INSPECTIFY",
    featured: true,
    image: "/projects/inspectify.png",
  },
  {
    id: "chr-cmms",
    name: "CHR-CMMS: Case Management and Monitoring System Website",
    summary:
      "A case management and monitoring system built for the Commission on Human Rights, with automated 120/60-day deadline tracking, notification alerts, role-based access, and centralized dashboard reporting.",
    stack: ["TypeScript", "JavaScript", "CSS", "MySQL"],
    githubUrl: "https://github.com/J-RuriAugusto/Project_CHR",
    featured: true,
    image: "/projects/chr-cmms.png",
  },
  {
    id: "pharmatrack",
    name: "PharmaTrack",
    summary:
      "A pharmacy inventory system that automates stock tracking and eliminates daily manual logging for staff, with low-stock and near-expiry alerts, role-based access, and real-time reporting.",
    stack: ["PHP", "CSS", "MySQL"],
    githubUrl: "https://github.com/J-RuriAugusto/SP_PharmaTrack",
    featured: true,
    image: "/projects/pharmatrack.png",
  },
  {
    id: "gridpulse",
    name: "GridPulse PH: Visayas Power Grid Intelligence",
    summary:
      "A data analytics dashboard forecasting Visayas peak electricity demand through 2030, using 22 years of DOE power statistics and Prophet/ARIMA time-series models — visualized in a fully offline, interactive Plotly dashboard for DOE planners and LGU policymakers.",
    stack: ["Python", "Plotly", "Prophet" , "ARIMA", "Pandas", "Plotly", "Matplotlib", "Jupyter Notebook", "HTML"],
    githubUrl: "https://colab.research.google.com/drive/16gbgU6dYxkBycWjQTqvSyjButyXMDVjj?usp=sharing",
    featured: true,
    image: "/projects/gridpulse.png",
  },
  {
    id: "house-event-manager",
    name: "House Event Manager",
    summary:
      "A household management web app with user authentication, full CRUD for people and tasks, and task assignment.",
    stack: ["Vue.js", "Node.js", "MySQL"],
    githubUrl: "https://github.com/J-RuriAugusto/house-event-manager",
    featured: true,
    image: "/projects/house-event-manager.png",
  },
  {
    id: "syntaxhub",
    name: "SyntaxHub",
    summary:
      "A modern IDE designed to streamline coding, compiling, and debugging — intuitive multi-language support, tool integration (Git Bash, Python, MARS), and real-time testing feedback.",
    stack: ["Rust", "Tauri CLI", "Node.js"],
    githubUrl: "https://github.com/",
    featured: true,
    image: "/projects/syntaxhub.png",
  },
  {
    id: "snackrifice",
    name: "Snackrifice",
    summary:
      "A web-based clicker game simulating a virtual vending machine, built with Finite State Machine logic for smooth, real-time interactions in a single-page app.",
    stack: ["React", "Vite", "CSS", "JavaScript", "HTML"],
    githubUrl: "https://github.com/J-RuriAugusto/CS-141",
    featured: true,
    image: "/projects/snackrifice.png",
  },
  {
    id: "run-rryan-run",
    name: "Run Rryan Run",
    summary:
      "A 2D endless-runner game where players guide a CS student through academic-themed obstacles — UI/UX, visual flow, and player feedback designed from the ground up.",
    stack: ["C", "SFML"],
    githubUrl: "https://drive.google.com/drive/folders/1Xkf6Rz8iiai5YqL2wupDf_dAHdg1h8lV",
    featured: true,
    image: "/projects/run-rryan-run.png",
  },
];
